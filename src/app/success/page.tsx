"use client";

import usePayments from "@/lib/hooks/usePayments";
import { Product } from "@/models/payment";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { PopupButton } from "react-calendly";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL as string;

const SuccessPage = ({ params }: { params: { orderId: string } }) => {
  const searchParams = useSearchParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const loadingRef = useRef(false);
  const { getProduct } = usePayments();

  useEffect(() => {
    if (loadingRef.current) {
      return;
    }
    loadingRef.current = true;
    const productId = searchParams.get("productId")!;
    getProduct(productId)
      .then((product) => {
        setProduct(product);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      })
      .catch((error) => toast.error("Error fetching product"))
      .finally(() => {
        setLoading(false);
        loadingRef.current = false;
      });
  }, [searchParams]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-primary/10 to-background flex justify-center items-center p-4">
      {loading ? (
        <Skeleton className="w-full h-96 max-w-md rounded-lg" />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card text-card-foreground shadow-lg rounded-lg p-8 max-w-md w-full space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center"
          >
            <CheckCircle className="text-primary w-16 h-16" />
          </motion.div>

          <h1 className="text-3xl font-bold text-center">Thank You!</h1>

          <p className="text-center text-muted-foreground">
            Your purchase was successful. We're excited to work with you!
          </p>

          {product && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-muted p-4 rounded-md border-foreground/70 border"
            >
              <h2 className="font-semibold mb-2">Your Purchase:</h2>
              <p className="text-lg">{product.name}</p>
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
            </motion.div>
          )}

          <div className="space-y-2">
            <p className="text-center font-medium">Next Steps:</p>
            <p className="text-center text-sm text-muted-foreground">
              Schedule a meeting with me to discuss your project in detail.
            </p>
          </div>

          <div className="flex flex-col">
            {document.getElementById("calendly-portal") && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PopupButton
                  url={calendlyUrl}
                  rootElement={document.getElementById("calendly-portal")!}
                  text="Let's talk"
                  className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md flex items-center justify-center space-x-2 transition-colors hover:bg-primary/90"
                />
              </motion.div>
            )}
            <Button variant="link" className="w-full text-center" asChild>
              <Link href="/">Go back to home</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SuccessPage;
