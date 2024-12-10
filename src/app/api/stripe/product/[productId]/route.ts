import { getStripeInstance } from "@/app/api/_payment/stripe";
import loggerServer from "@/loggerServer";
import { Product } from "@/models/payment";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const stripe = getStripeInstance();
    const data = await stripe.products.retrieve(params.productId);
    const product: Product = {
      id: "",
      name: data.name,
      description: data.description || "",
      priceStructure: {
        id: "",
        currency: "",
        price: 0,
      },
      spotsLeft: 0,
      features: [],
    };

    return NextResponse.json(product, { status: 200 });
  } catch (error: any) {
    loggerServer.error("Error getting product details", "system", error);
    return NextResponse.json(
      { error: "Error getting product details" },
      { status: 500 }
    );
  }
}
