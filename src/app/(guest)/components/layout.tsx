import ComponentPageTitle from '@/app/(guest)/components/_components/component-page-title';
import { Separator } from '@/shared/components/separator';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div>
        <ComponentPageTitle />
        <Separator className="my-2" />
      </div>
      <div>{children}</div>
    </div>
  );
}
