import prisma from "@/app/api/_db/db";
import { getStripeInstance } from "@/app/api/_payment/stripe";
import loggerServer from "@/loggerServer";
import { Product } from "@/models/payment";
import { NextRequest, NextResponse } from "next/server";

const MAX_ORDERS = 2;
const appName = process.env.NEXT_PUBLIC_APP_NAME as string;

export async function GET(req: NextRequest) {
  try {
    console.log("Getting products");
    const stripe = getStripeInstance();
    const { data: stripeProducts } = await stripe.products.list();

    const products: Product[] = [];

    console.log("got stripe products", stripeProducts);

    const appProducts = stripeProducts
      .filter((stripeProduct) => stripeProduct.active)
      .filter((stripeProduct) =>
        stripeProduct.metadata.app
          ?.toLowerCase()
          .includes(appName.toLowerCase())
      );

    console.log("got app products", appProducts);

    const userOrders = await prisma.userOrders.findMany();

    console.log("got user orders", userOrders);

    for (const stripeProduct of appProducts) {
      const { data: stripePrices } = await stripe.prices.list({
        product: stripeProduct.id,
      });
      const spotsLeft =
        stripeProduct.metadata.recommended === "true"
          ? 0
          : MAX_ORDERS -
            userOrders.filter((order) => order.productId === stripeProduct.id)
              .length;
      stripePrices
        .filter((stripePrice) => stripePrice.active && stripePrice.unit_amount)
        // only those that have StripeGuard
        .map((stripePrice) => {
          const product: Product = {
            id: stripeProduct.id,
            name: stripeProduct.name,
            description: stripeProduct.description || "",
            priceStructure: {
              id: stripePrice.id,
              currency: stripePrice.currency,
              price: stripePrice.unit_amount! / 100,
            },
            unavailable:
              stripeProduct.metadata.unavailable === "true" || spotsLeft <= 0,
            features: stripeProduct.marketing_features.map(
              (feature) => feature.name || ""
            ),
            spotsLeft:
              stripeProduct.metadata.recommended === "true"
                ? 0
                : MAX_ORDERS -
                  userOrders.filter(
                    (order) => order.productId === stripeProduct.id
                  ).length,
            recommended: stripeProduct.metadata.recommended === "true",
          };
          products.push(product);
        });
    }

    const productsSortedByPrice = products.sort(
      (a, b) => b.priceStructure.price - a.priceStructure.price
    );

    console.log("got products", productsSortedByPrice);

    return NextResponse.json(productsSortedByPrice, { status: 200 });
  } catch (error: any) {
    loggerServer.error("Error getting products", "system", error);
    return NextResponse.json(
      { error: "Error getting products" },
      { status: 500 }
    );
  }
}
