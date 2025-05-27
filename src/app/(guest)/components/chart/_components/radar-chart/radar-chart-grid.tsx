import SimpleRadarChart from '@/app/(guest)/components/chart/_components/radar-chart/charts/simple-radar-chart';
import DotsRadarChart from '@/app/(guest)/components/chart/_components/radar-chart/charts/dots-radar-chart';
import MultipleRadarChart from '@/app/(guest)/components/chart/_components/radar-chart/charts/multiple-radar-chart';
import LinesOnlyRadarChart from '@/app/(guest)/components/chart/_components/radar-chart/charts/lines-only-radar-chart';
import CustomLabelRadarChart from '@/app/(guest)/components/chart/_components/radar-chart/charts/custom-label-radar-chart';
import RadiusAxisRadarChart from '@/app/(guest)/components/chart/_components/radar-chart/charts/radius-axis-radar-chart';
import GridCustomRadarChart from '@/app/(guest)/components/chart/_components/radar-chart/charts/grid-custom-radar-chart';
import GridFilledRadarChart from '@/app/(guest)/components/chart/_components/radar-chart/charts/grid-filled-radar-chart';
import GridNoneRadarChart from '@/app/(guest)/components/chart/_components/radar-chart/charts/grid-none-radar-chart';
import GridCircleRadarChart from '@/app/(guest)/components/chart/_components/radar-chart/charts/grid-circle-radar-chart';
import GridCircleNoLinesRadarChart from '@/app/(guest)/components/chart/_components/radar-chart/charts/grid-circle-no-lines-radar-chart';
import GridCircleFilledRadarChart from '@/app/(guest)/components/chart/_components/radar-chart/charts/grid-circle-filled-radar-chart';
import LegendRadarChart from '@/app/(guest)/components/chart/_components/radar-chart/charts/legend-radar-chart';
import IconsRadarChart from '@/app/(guest)/components/chart/_components/radar-chart/charts/icons-radar-chart';
import { cn } from '@/shared/libs/styles';

export default function RadarChartGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'grid flex-1 scroll-mt-20 items-start gap-6 md:grid-cols-2 lg:grid-cols-3',
        className,
      )}
    >
      <SimpleRadarChart />
      <DotsRadarChart />
      <MultipleRadarChart />
      <LinesOnlyRadarChart />
      <CustomLabelRadarChart />
      <RadiusAxisRadarChart />
      <GridCustomRadarChart />
      <GridFilledRadarChart />
      <GridNoneRadarChart />
      <GridCircleRadarChart />
      <GridCircleNoLinesRadarChart />
      <GridCircleFilledRadarChart />
      <LegendRadarChart />
      <IconsRadarChart />
    </div>
  );
}
