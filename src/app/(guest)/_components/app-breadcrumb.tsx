'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/shared/components/breadcrumb';
import { cn } from '@/shared/libs/styles';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

type Path = {
  name: string;
  href: string;
  isLast: boolean;
};

function getPaths(pathname: string): Path[] {
  if (pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }

  const pathnames = pathname.split('/');
  const paths: Path[] = [];
  let href = '';

  for (let i = 0; i < pathnames.length; i++) {
    const path = pathnames[i];
    const isLast = i === pathnames.length - 1;

    if (path) {
      href += `/${path}`;
      paths.push({ name: path, href, isLast });
    } else {
      paths.push({ name: 'Home', href: '/', isLast });
    }
  }

  return paths;
}

export default function AppBreadcrumb({ className }: { className?: string }) {
  const pathname = usePathname();
  const paths = getPaths(pathname);

  return (
    <Breadcrumb className={cn(className)}>
      <BreadcrumbList>
        {paths.map((path) => (
          <Fragment key={path.name}>
            {path.isLast ? (
              <BreadcrumbItem>
                <BreadcrumbPage>{path.name}</BreadcrumbPage>
              </BreadcrumbItem>
            ) : (
              <Fragment>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href={path.href}>{path.name}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
              </Fragment>
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
