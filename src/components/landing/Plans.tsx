import React, { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import usePayments from "@/lib/hooks/usePayments";
import { useAppSelector } from "@/lib/hooks/redux";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const Plans = () => {
  const { getProducts, goToCheckout } = usePayments();
  const { products } = useAppSelector((state) => state.products);
  const [loadingCheckout, setLoadingCheckout] = useState<{
    productId: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(false);

  useEffect(() => {
    const fetchProducts = async () => {
      if (loadingRef.current) {
        return;
      }
      loadingRef.current = true;
      setLoading(true);
      try {
        if (products.length === 0) await getProducts();
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
        loadingRef.current = false;
      }
    };
    fetchProducts();
  }, [products, getProducts]);

  const handleCheckout = async (priceId: string, productId: string) => {
    if (loadingCheckout) {
      return;
    }
    setLoadingCheckout({ productId });
    try {
      await goToCheckout(priceId, productId);
    } catch (error) {
      toast.error("Something went wrong. Try again :)");
    } finally {
      setLoadingCheckout(null);
    }
  };

  return (
    <section id="plans" className="py-20 bg-white">
      <div className="h-full max-w-7xl flex flex-col gap-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your project needs
          </p>
        </div>

        {loading ? (
          <div className="flex flex-row gap-8 items-start justify-center">
            <Skeleton className="h-[624px] w-[384px]" />
            <Skeleton className="h-[624px] w-[384px]" />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row gap-8 items-start justify-center"
          >
            {[...products]
              .sort((a, b) =>
                a.priceStructure.price > b.priceStructure.price ? 1 : -1
              )
              .map((product) => (
                <div
                  key={product.id}
                  className={cn("relative rounded-2xl", {
                    "shadow-xl border-2 border-primary": product.recommended,
                    "bg-white text-gray-900 border border-gray-200":
                      !product.recommended,
                    "grayscale opacity-50": product.unavailable,
                  })}
                >
                  {product.recommended && (
                    <div className="absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
                      <span className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                    <p>{product.description}</p>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-extrabold">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: product.priceStructure.currency,
                          minimumFractionDigits: 0,
                        }).format(product.priceStructure.price)}
                      </span>
                    </div>
                    <ul className="mt-8 space-y-4">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check
                            className={`flex-shrink-0 h-6 w-6 text-primary`}
                          />
                          <span className="ml-3">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-col items-center">
                      <div className="w-full flex flex-col items-center gap-0">
                        <Button
                          loading={loadingCheckout?.productId === product.id}
                          disabled={
                            loadingCheckout !== null || product.unavailable
                          }
                          variant={product.recommended ? "default" : "outline"}
                          className="w-full rounded-full"
                          size={"lg"}
                          onClick={() => {
                            handleCheckout(
                              product.priceStructure.id,
                              product.id
                            );
                          }}
                        >
                          Get Started{" "}
                          {product.unavailable
                            ? ""
                            : `${product.spotsLeft} spots left`}
                        </Button>
                      </div>
                      <Button variant="link" asChild={!product.unavailable}>
                        {product.unavailable ? (
                          "Sold out"
                        ) : (
                          <Link href={`/pricing/${product.id}`}>
                            Contact me
                          </Link>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Plans;
