import AreaChartGrid from '@/app/(guest)/components/chart/_components/area-chart/area-chart-grid';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/card';
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
    <Card className={className}>
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
    <div className="flex flex-col items-center p-4 gap-4">
      {/* Area Chart */}
      <ChartCard
        title="Area Chart"
        description="Showing total visitors for the last 6 months"
        className="w-full"
      >
        <AreaChartGrid />
      </ChartCard>
    </div>
  );
}
