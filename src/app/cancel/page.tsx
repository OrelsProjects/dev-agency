"use client";

import { useCustomRouter } from "@/lib/hooks/useCustomRouter";
import { useEffect } from "react";

export default function CancelStripe() {
  const router = useCustomRouter();
  useEffect(() => {
    router.push("/#plans", { preserveQuery: true });
  }, []);
}
