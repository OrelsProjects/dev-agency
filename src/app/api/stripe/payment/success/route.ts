import prisma from "@/app/api/_db/db";
import { getStripeInstance } from "@/app/api/_payment/stripe";
import loggerServer from "@/loggerServer";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("session_id");
  if (!sessionId || typeof sessionId !== "string") {
    return NextResponse.json({ error: "Invalid session_id" }, { status: 400 });
  }
  try {
    const stripe = getStripeInstance();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session) {
      return NextResponse.json(
        { error: "Invalid session_id" },
        { status: 400 }
      );
    }

    const email = session.customer_details?.email;
    const productId = session.metadata?.productId;
    const priceId = session.metadata?.priceId;

    if (!email || !productId || !priceId) {
      return NextResponse.json(
        { error: "No email, productId or priceId in session" },
        { status: 400 }
      );
    }

    const product = await getStripeInstance().products.retrieve(productId);
    const price = await getStripeInstance().prices.retrieve(priceId);

    const payment = await prisma.payment.create({
      data: {
        sessionId,
        email,
        productId,
        priceId,
        productName: product.name,
        status: session.payment_status,
        amountReceived: (price.unit_amount as number) / 100,
        currency: price.currency as string,
      },
    });

    const userOrder = await prisma.userOrders.create({
      data: {
        email,
        paymentId: payment.id,
        productId,
      },
    });

    return NextResponse.redirect(
      req.nextUrl.origin + `/success/?productId=${productId}`
    );
  } catch (error: any) {
    loggerServer.error(
      "Failed to complete subscription",
      "stripe callback",
      error
    );
    return NextResponse.redirect(req.nextUrl.origin + "/?error=true");
  }
}

//"\nInvalid `prisma.payment.create()` invocation:\n\n{\n  data: {\n    sessionId: \"cs_test_a1WiUx1g22blDdhM3bGDaTwRSmcQhlw3SpXsmY9aXyexTjcK7BNwduvk7p\",\n    productId: \"prod_RL2PfOjEtczQ8F\",\n    priceId: \"price_1QSMKmRxhYQDfRYG5MBZo00I\",\n    status: \"paid\",\n    invoiceId: null,\n    amountReceived: 219,\n    currency: \"usd\",\n    appUser: {\n      connect: {\n        id: \"cm3y7oujq0000k85c1h4yoog5\"\n      }\n    },\n+   customerId: String\n  }\n}\n\nArgument `customerId` must not be null."
