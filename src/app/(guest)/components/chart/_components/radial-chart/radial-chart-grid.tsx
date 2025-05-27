import SimpleRadialChart from '@/app/(guest)/components/chart/_components/radial-chart/charts/simple-radial-chart';
import LabelRadialChart from '@/app/(guest)/components/chart/_components/radial-chart/charts/label-radial-chart';
import GridRadialChart from '@/app/(guest)/components/chart/_components/radial-chart/charts/grid-radial-chart';
import TextRadialChart from '@/app/(guest)/components/chart/_components/radial-chart/charts/text-radial-chart';
import ShapeRadialChart from '@/app/(guest)/components/chart/_components/radial-chart/charts/shape-radial-chart';
import StackedRadialChart from '@/app/(guest)/components/chart/_components/radial-chart/charts/stacked-radial-chart';
import { cn } from '@/shared/libs/styles';

export default function RadialChartGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'grid flex-1 scroll-mt-20 items-start gap-6 md:grid-cols-2 lg:grid-cols-3',
        className,
      )}
    >
      <SimpleRadialChart />
      <LabelRadialChart />
      <GridRadialChart />
      <TextRadialChart />
      <ShapeRadialChart />
      <StackedRadialChart />
    </div>
  );
}
