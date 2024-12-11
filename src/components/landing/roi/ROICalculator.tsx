import { Card } from "@/components/ui/card";
import { Calculator } from 'lucide-react';
import { motion } from "framer-motion";

export function ROICalculator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Card className="p-6 mt-8 bg-primary/5">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-semibold">The Bottom Line</h3>
        </div>
        <motion.div className="grid md:grid-cols-5 gap-6">
          <motion.div
            className="col-start-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-2">
              Total Cost with{" "}
              <span className="text-red-500">Cheap Development</span>
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Initial Development: $10,000</li>
              <li>Yearly Maintenance: $15,000</li>
              <li>Required Rewrites: $20,000</li>
              <li>Bug Fixes: $10,000</li>
              <li className="font-semibold text-destructive">
                Total 2-Year Cost: $55,000+
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="col-start-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="font-semibold mb-2">
              Total Cost with
              <span className="text-green-600"> Professional Development</span>
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Initial Development: $20,000</li>
              <li>Yearly Maintenance: $5,000</li>
              <li>Required Rewrites: $0</li>
              <li>Bug Fixes: $2,000</li>
              <li className="font-semibold text-green-600">
                Total 2-Year Cost: $32,000
              </li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-6 text-center text-lg font-semibold text-green-600"
          whileInView={{ scale: [1, 1.05, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Potential 2-Year Savings: $23,000+
        </motion.div>
      </Card>
    </motion.div>
  );
}

