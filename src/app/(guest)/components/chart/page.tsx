import AreaChartGrid from '@/app/(guest)/components/chart/_components/area-chart/area-chart-grid';
import BarChartGrid from '@/app/(guest)/components/chart/_components/bar-chart/bar-chart-grid';
import LineChartGrid from '@/app/(guest)/components/chart/_components/line-chart/line-chart-grid';
import PieChartGrid from '@/app/(guest)/components/chart/_components/pie-chart/pie-chart-grid';
import RadarChartGrid from '@/app/(guest)/components/chart/_components/radar-chart/radar-chart-grid';
import RadialChartGrid from '@/app/(guest)/components/chart/_components/radial-chart/radial-chart-grid';
import TooltipGrid from '@/app/(guest)/components/chart/_components/tooltip/tooltip-grid';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/shared/components/tabs';
import { cn } from '@/shared/libs/styles';
import { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const chartTypes = [
  'all',
  'area',
  'bar',
  'line',
  'pie',
  'radar',
  'radial',
  'tooltip',
] as const;

type ChartType = (typeof chartTypes)[number];

type ChartTab = {
  value: ChartType;
  label: string;
};

const chartTabs = {
  all: {
    value: 'all',
    label: 'All',
  },
  area: {
    value: 'area',
    label: 'Area Chart',
  },
  bar: {
    value: 'bar',
    label: 'Bar Chart',
  },
  line: {
    value: 'line',
    label: 'Line Chart',
  },
  pie: {
    value: 'pie',
    label: 'Pie Chart',
  },
  radar: {
    value: 'radar',
    label: 'Radar Chart',
  },
  radial: {
    value: 'radial',
    label: 'Radial Chart',
  },
  tooltip: {
    value: 'tooltip',
    label: 'Tooltip',
  },
} as const satisfies Record<ChartType, ChartTab>;

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

function ChartTabContent({
  value,
  className,
}: {
  value: ChartType;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col items-center gap-8', className)}>
      {/* Area Chart */}
      {['all', 'area'].includes(value) && (
        <ChartCard title="Area Chart">
          <AreaChartGrid />
        </ChartCard>
      )}

      {/* Bar Chart */}
      {['all', 'bar'].includes(value) && (
        <ChartCard title="Bar Chart">
          <BarChartGrid />
        </ChartCard>
      )}

      {/* Line Chart */}
      {['all', 'line'].includes(value) && (
        <ChartCard title="Line Chart">
          <LineChartGrid />
        </ChartCard>
      )}

      {/* Pie Chart */}
      {['all', 'pie'].includes(value) && (
        <ChartCard title="Pie Chart">
          <PieChartGrid />
        </ChartCard>
      )}

      {/* Radar Chart */}
      {['all', 'radar'].includes(value) && (
        <ChartCard title="Radar Chart">
          <RadarChartGrid />
        </ChartCard>
      )}

      {/* Radial Chart */}
      {['all', 'radial'].includes(value) && (
        <ChartCard title="Radial Chart">
          <RadialChartGrid />
        </ChartCard>
      )}

      {/* Tooltip */}
      {['all', 'tooltip'].includes(value) && (
        <ChartCard title="Tooltip">
          <TooltipGrid />
        </ChartCard>
      )}
    </div>
  );
}

export default function ChartPage() {
  return (
    <Tabs defaultValue="all" className="w-full p-4 gap-8">
      <TabsList className="w-full">
        {Object.values(chartTabs).map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.values(chartTabs).map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <ChartTabContent value={tab.value} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
