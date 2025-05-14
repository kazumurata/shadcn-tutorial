import AppBreadcrumb from '@/app/(guest)/_components/app-breadcrumb';
import AppSidebar from '@/app/(guest)/_components/app-sidebar';
import { Separator } from '@/shared/components/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/shared/components/sidebar';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      {/* サイドバー */}
      <AppSidebar />
      <SidebarInset>
        {/* ヘッダー */}
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation={'vertical'} className="mr-2 h-4" />
            <AppBreadcrumb />
          </div>
        </header>
        <Separator />
        {/* コンテンツ */}
        <div className="p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
