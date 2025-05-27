import AppBreadcrumb from '@/app/(guest)/_components/app-breadcrumb';
import AppSidebar from '@/app/(guest)/_components/app-sidebar';
import { GithubIcon } from '@/app/(guest)/_components/icons';
import ThemeSwitcher from '@/app/(guest)/_components/theme-switcher';
import { Button } from '@/shared/components/button';
import { Separator } from '@/shared/components/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/shared/components/sidebar';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      {/* サイドバー */}
      <AppSidebar />
      <SidebarInset>
        {/* ヘッダー */}
        <header className="sticky top-0 z-10 border-b bg-background flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          {/* 左側 */}
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation={'vertical'} className="mr-2 h-4" />
            <AppBreadcrumb />
          </div>
          {/* 右側 */}
          <div className="flex items-center gap-0.5 px-4">
            <Button
              asChild
              variant={'ghost'}
              size={'icon'}
              className="h-8 w-8 px-0"
            >
              <Link
                href={'https://github.com/kazumurata/shadcn-tutorial'}
                target={'_blank'}
                rel={'noreferrer'}
              >
                <GithubIcon className="h-4 w-4" />
              </Link>
            </Button>
            <ThemeSwitcher />
          </div>
        </header>
        {/* コンテンツ */}
        <main className="flex grow p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
