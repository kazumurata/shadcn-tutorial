import SimpleLineChart from '@/app/(guest)/components/chart/_components/line-chart/charts/simple-line-chart';
import LinearLineChart from '@/app/(guest)/components/chart/_components/line-chart/charts/linear-line-chart';
import StepLineChart from '@/app/(guest)/components/chart/_components/line-chart/charts/step-line-chart';
import MultipleLineChart from '@/app/(guest)/components/chart/_components/line-chart/charts/multiple-line-chart';
import DotsLineChart from '@/app/(guest)/components/chart/_components/line-chart/charts/dots-line-chart';
import CustomDotsLineChart from '@/app/(guest)/components/chart/_components/line-chart/charts/custom-dots-line-chart';
import DotsColorsLineChart from '@/app/(guest)/components/chart/_components/line-chart/charts/dots-colors-line-chart';
import LabelLineCharts from '@/app/(guest)/components/chart/_components/line-chart/charts/label-line-charts';
import CustomLabelLineChart from '@/app/(guest)/components/chart/_components/line-chart/charts/custom-label-line-chart';
import InteractiveLineChart from '@/app/(guest)/components/chart/_components/line-chart/charts/interactive-line-chart';
import { cn } from '@/shared/libs/styles';

export default function LineChartGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'grid flex-1 scroll-mt-20 items-start gap-6 md:grid-cols-2 lg:grid-cols-3',
        className,
      )}
    >
      <SimpleLineChart />
      <LinearLineChart />
      <StepLineChart />
      <MultipleLineChart />
      <DotsLineChart />
      <CustomDotsLineChart />
      <DotsColorsLineChart />
      <LabelLineCharts />
      <CustomLabelLineChart />
      <div className="col-span-full">
        <InteractiveLineChart />
      </div>
    </div>
  );
}
