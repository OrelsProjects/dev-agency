import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coins, Gem } from "lucide-react";
import { motion } from "framer-motion";

export function CostBenefitHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4">Invest Smart, Save More</h2>
        <p className="text-xl text-muted-foreground mb-6">
          The true cost of development isn't in the initial price tag—it's in
          the long-term value and maintenance
        </p>
        <motion.div className="grid md:grid-cols-2 gap-4 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 300,
              duration: 0.8,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="p-6 border-green-200 bg-green-50 dark:bg-green-950/30">
              <Gem className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Investment</h3>
              <p className="text-muted-foreground">
                Pay once for clean, maintainable code that saves money long-term
              </p>
              <Badge className="mt-4 bg-green-600">Smart Choice</Badge>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 300,
              duration: 0.8,
            }}
          >
            <Card className="p-6 border-red-200 bg-red-50 dark:bg-red-950/30">
              <Coins className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hidden Costs</h3>
              <p className="text-muted-foreground">
                Cheap solutions lead to expensive rewrites and ongoing
                maintenance
              </p>
              <Badge variant="destructive" className="mt-4">
                Cost Trap
              </Badge>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
