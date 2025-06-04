import SimplePieChart from '@/app/(guest)/components/chart/_components/pie-chart/charts/simple-pie-chart';
import SeparatorNonePieChart from '@/app/(guest)/components/chart/_components/pie-chart/charts/separator-none-pie-chart';
import LabelPieChart from '@/app/(guest)/components/chart/_components/pie-chart/charts/label-pie-chart';
import CustomLabelPieChart from '@/app/(guest)/components/chart/_components/pie-chart/charts/custom-label-pie-chart';
import LabelListPieChart from '@/app/(guest)/components/chart/_components/pie-chart/charts/label-list-pie-chart';
import LegendPieChart from '@/app/(guest)/components/chart/_components/pie-chart/charts/legend-pie-chart';
import DonutPieChart from '@/app/(guest)/components/chart/_components/pie-chart/charts/donut-pie-chart';
import DonutActivePieChart from '@/app/(guest)/components/chart/_components/pie-chart/charts/donut-active-pie-chart';
import DonutTextPieChart from '@/app/(guest)/components/chart/_components/pie-chart/charts/donut-text-pie-chart';
import StackedPieChart from '@/app/(guest)/components/chart/_components/pie-chart/charts/stacked-pie-chart';
import InteractivePieChart from '@/app/(guest)/components/chart/_components/pie-chart/charts/interactive-pie-chart';
import { cn } from '@/shared/libs/styles';

export default function PieChartGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'grid flex-1 scroll-mt-20 items-start gap-6 md:grid-cols-2 lg:grid-cols-3',
        className,
      )}
    >
      <SimplePieChart />
      <SeparatorNonePieChart />
      <LabelPieChart />
      <CustomLabelPieChart />
      <LabelListPieChart />
      <LegendPieChart />
      <DonutPieChart />
      <DonutActivePieChart />
      <DonutTextPieChart />
      <StackedPieChart />
      <div className="col-span-full">
        <InteractivePieChart />
      </div>
    </div>
  );
}
