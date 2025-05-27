import AxesAreaChart from '@/app/(guest)/components/chart/_components/area-chart/charts/axes-area-chart';
import GradientAreaChart from '@/app/(guest)/components/chart/_components/area-chart/charts/gradient-area-chart';
import IconsAreaChart from '@/app/(guest)/components/chart/_components/area-chart/charts/icons-area-chart';
import InteractiveAreaChart from '@/app/(guest)/components/chart/_components/area-chart/charts/interactive-area-chart';
import LegendAreaChart from '@/app/(guest)/components/chart/_components/area-chart/charts/legend-area-chart';
import LinearAreaChart from '@/app/(guest)/components/chart/_components/area-chart/charts/linear-area-chart';
import SimpleAreaChart from '@/app/(guest)/components/chart/_components/area-chart/charts/simple-area-chart';
import StackedAreaChart from '@/app/(guest)/components/chart/_components/area-chart/charts/stacked-area-chart';
import StackedExpandedAreaChart from '@/app/(guest)/components/chart/_components/area-chart/charts/stacked-expanded-area-chart';
import StepAreaChart from '@/app/(guest)/components/chart/_components/area-chart/charts/step-area-chart';
import { cn } from '@/shared/libs/styles';

export default function AreaChartGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'grid flex-1 scroll-mt-20 items-start gap-6 md:grid-cols-2 lg:grid-cols-3',
        className,
      )}
    >
      <SimpleAreaChart />
      <LinearAreaChart />
      <StepAreaChart />
      <StackedAreaChart />
      <StackedExpandedAreaChart />
      <LegendAreaChart />
      <IconsAreaChart />
      <GradientAreaChart />
      <AxesAreaChart />
      <div className="col-span-full">
        <InteractiveAreaChart />
      </div>
    </div>
  );
}
