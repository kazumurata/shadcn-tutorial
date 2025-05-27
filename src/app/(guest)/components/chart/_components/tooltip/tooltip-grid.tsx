import DefaultTooltip from '@/app/(guest)/components/chart/_components/tooltip/charts/default-tooltip';
import LineIndicatorTooltip from '@/app/(guest)/components/chart/_components/tooltip/charts/line-indicator-tooltip';
import NoIndicatorTooltip from '@/app/(guest)/components/chart/_components/tooltip/charts/no-indicator-tooltip';
import CustomLabelTooltip from '@/app/(guest)/components/chart/_components/tooltip/charts/custom-label-tooltip';
import LabelFormatterTooltip from '@/app/(guest)/components/chart/_components/tooltip/charts/label-formatter-tooltip';
import NoLabelTooltip from '@/app/(guest)/components/chart/_components/tooltip/charts/no-label-tooltip';
import FormatterTooltip from '@/app/(guest)/components/chart/_components/tooltip/charts/formatter-tooltip';
import IconsTooltip from '@/app/(guest)/components/chart/_components/tooltip/charts/icons-tooltip';
import AdvancedTooltip from '@/app/(guest)/components/chart/_components/tooltip/charts/advanced-tooltip';
import { cn } from '@/shared/libs/styles';

export default function TooltipGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'grid flex-1 scroll-mt-20 items-start gap-6 md:grid-cols-2 lg:grid-cols-3',
        className,
      )}
    >
      <DefaultTooltip />
      <LineIndicatorTooltip />
      <NoIndicatorTooltip />
      <CustomLabelTooltip />
      <LabelFormatterTooltip />
      <NoLabelTooltip />
      <FormatterTooltip />
      <IconsTooltip />
      <AdvancedTooltip />
    </div>
  );
}
