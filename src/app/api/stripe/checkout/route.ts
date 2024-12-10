import { getStripeInstance } from "@/app/api/_payment/stripe";
import loggerServer from "@/loggerServer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const nextUrl = req.nextUrl;
    const { priceId, productId } = await req.json();
    const stripe = getStripeInstance();

    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${nextUrl.origin}/api/stripe/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${nextUrl.origin}/cancel`,
      metadata: {
        productId,
        priceId,
      },
    });
    return NextResponse.json({ sessionId: stripeSession.id }, { status: 200 });
  } catch (error: any) {
    loggerServer.error(
      "Error creating a checkout session",
      "Unknown user",
      error
    );
    return NextResponse.json(
      { error: "Error creating a checkout session" },
      { status: 500 }
    );
  }
}
