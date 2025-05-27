import AreaChartGrid from '@/app/(guest)/components/chart/_components/area-chart/area-chart-grid';
import BarChartGrid from '@/app/(guest)/components/chart/_components/bar-chart/bar-chart-grid';
import LineChartGrid from '@/app/(guest)/components/chart/_components/line-chart/line-chart-grid';
import PieChartGrid from '@/app/(guest)/components/chart/_components/pie-chart/pie-chart-grid';
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
      <ChartCard
        title="Area Chart"
        description="Showing total visitors for the last 6 months"
      >
        <AreaChartGrid />
      </ChartCard>

      {/* Bar Chart */}
      <ChartCard
        title="Bar Chart"
        description="Showing total visitors for the last 6 months"
      >
        <BarChartGrid />
      </ChartCard>

      {/* Line Chart */}
      <ChartCard
        title="Line Chart"
        description="Showing total visitors for the last 6 months"
      >
        <LineChartGrid />
      </ChartCard>

      {/* Pie Chart */}
      <ChartCard
        title="Pie Chart"
        description="Showing total visitors for the last 6 months"
      >
        <PieChartGrid />
      </ChartCard>
    </div>
  );
}
