import HorizontalBarChart from '@/app/(guest)/components/chart/_components/bar-chart/charts/horizontal-bar-chart';
import LabelBarChart from '@/app/(guest)/components/chart/_components/bar-chart/charts/label-bar-chart';
import MultipleBarChart from '@/app/(guest)/components/chart/_components/bar-chart/charts/multiple-bar-chart';
import SimpleBarChart from '@/app/(guest)/components/chart/_components/bar-chart/charts/simple-bar-chart';
import CustomLabelBarChart from '@/app/(guest)/components/chart/_components/bar-chart/charts/custom-label-bar-chart';
import MixedBarChart from '@/app/(guest)/components/chart/_components/bar-chart/charts/mixed-bar-chart';
import StackedLegendBarChart from '@/app/(guest)/components/chart/_components/bar-chart/charts/stacked-legend-bar-chart';
import ActiveBarChart from '@/app/(guest)/components/chart/_components/bar-chart/charts/active-bar-chart';
import NegativeBarChart from '@/app/(guest)/components/chart/_components/bar-chart/charts/negative-bar-chart';
import InteractiveBarChart from '@/app/(guest)/components/chart/_components/bar-chart/charts/interactive-bar-chart';
import { cn } from '@/shared/libs/styles';

export default function BarChartGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'grid flex-1 scroll-mt-20 items-start gap-6 md:grid-cols-2 lg:grid-cols-3',
        className,
      )}
    >
      <SimpleBarChart />
      <HorizontalBarChart />
      <MultipleBarChart />
      <LabelBarChart />
      <CustomLabelBarChart />
      <MixedBarChart />
      <StackedLegendBarChart />
      <ActiveBarChart />
      <NegativeBarChart />
      <div className="col-span-full">
        <InteractiveBarChart />
      </div>
    </div>
  );
}
