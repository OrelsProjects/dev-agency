import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Clock, Wrench, PiggyBank, Rocket, Shield } from "lucide-react";
import { motion } from "framer-motion";

export function ComparisonTable() {
  const comparisons = [
    {
      aspect: "Initial Development",
      quality:
        "✓ No hidden costs\n✓ Higher upfront value\n✓ Built right the first time",
      cheap:
        "× Cut corners\n× Seemingly cheaper\n× Technical debt accumulation",
      icon: <Clock className="w-5 h-5 text-primary" />,
      savings: "$10,000+ saved in rewrites",
    },
    {
      aspect: "Maintenance Costs",
      quality: "✓ Easy updates\n✓ Clean codebase\n✓ Minimal bug fixes needed",
      cheap:
        "× Difficult updates\n× Constant bug fixes\n× Growing technical debt",
      icon: <Wrench className="w-5 h-5 text-primary" />,
      savings: "$5,000+ saved yearly",
    },
    {
      aspect: "Long-term Value",
      quality: "✓ Easy to extend\n✓ Scalable solution\n✓ Future-proof code",
      cheap:
        "× Limited scalability\n× Outdated practices\n× Expensive to modify",
      icon: <PiggyBank className="w-5 h-5 text-primary" />,
      savings: "$20,000+ saved in scaling",
    },
    {
      aspect: "Development Speed",
      quality: "✓ Clear progress\n✓ Efficient workflow\n✓ No repeated work",
      cheap: "× Multiple rewrites\n× Unclear timeline\n× Delays from bugs",
      icon: <Rocket className="w-5 h-5 text-primary" />,
      savings: "2-3 months saved",
    },
    {
      aspect: "Risk Management",
      quality: "✓ Secure code\n✓ Best practices\n✓ Reliable solution",
      cheap: "× Security risks\n× Technical debt\n× Reliability issues",
      icon: <Shield className="w-5 h-5 text-primary" />,
      savings: "Priceless peace of mind",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Card className="p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]"></TableHead>
              <TableHead className="w-[200px]">Aspect</TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  <span>Professional Development</span>
                  <Badge variant="default" className="bg-green-600">
                    Smart Investment
                  </Badge>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  <span>Cheap Alternative</span>
                  <Badge variant="destructive">Hidden Costs</Badge>
                </div>
              </TableHead>
              <TableHead className="text-right">Potential Savings</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="scrollbar-hide">
            {comparisons.map((item, index) => (
              <motion.tr
                key={item.aspect}
                className="group hover:bg-muted/50"
                // initial={{ opacity: 0, y: 20 }}
                // viewport={{ once: true }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TableCell>{item.icon}</TableCell>
                <TableCell className="font-medium">{item.aspect}</TableCell>
                <TableCell className="text-green-600 dark:text-green-400 whitespace-pre-line">
                  {item.quality}
                </TableCell>
                <TableCell className="text-red-600 dark:text-red-400 whitespace-pre-line">
                  {item.cheap}
                </TableCell>
                <TableCell className="text-right font-semibold text-green-600">
                  {item.savings}
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </Card>
    </motion.div>
  );
}
