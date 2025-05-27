import AreaChartGrid from '@/app/(guest)/components/chart/_components/area-chart/area-chart-grid';
import BarChartGrid from '@/app/(guest)/components/chart/_components/bar-chart/bar-chart-grid';
import LineChartGrid from '@/app/(guest)/components/chart/_components/line-chart/line-chart-grid';
import PieChartGrid from '@/app/(guest)/components/chart/_components/pie-chart/pie-chart-grid';
import RadarChartGrid from '@/app/(guest)/components/chart/_components/radar-chart/radar-chart-grid';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/card';
import { cn } from '@/shared/libs/styles';
import { ReactNode } from 'react';

function ChartCard({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default function ChartPage() {
  return (
    <div className="flex flex-col items-center p-4 gap-8">
      {/* Area Chart */}
      <ChartCard title="Area Chart">
        <AreaChartGrid />
      </ChartCard>

      {/* Bar Chart */}
      <ChartCard title="Bar Chart">
        <BarChartGrid />
      </ChartCard>

      {/* Line Chart */}
      <ChartCard title="Line Chart">
        <LineChartGrid />
      </ChartCard>

      {/* Pie Chart */}
      <ChartCard title="Pie Chart">
        <PieChartGrid />
      </ChartCard>

      {/* Radar Chart */}
      <ChartCard title="Radar Chart">
        <RadarChartGrid />
      </ChartCard>
    </div>
  );
}
