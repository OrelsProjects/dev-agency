import { CostBenefitHeader } from "./roi/CostBenefitHeader";
import { ComparisonTable } from "./roi/ComparisonTable";
import { ROICalculator } from "./roi/ROICalculator";

export function ServiceComparison() {
  return (
    <div className="container mx-auto py-12 px-4">
      <CostBenefitHeader />
      <ComparisonTable />
      <ROICalculator />
    </div>
  );
}