import { ShadcnIcon } from '@/app/(guest)/_components/icons';
import Link from 'next/link';

export default function AppSidebarHeader() {
  return (
    <div className="flex flex-1 items-center">
      <Link href="/" className="flex items-center gap-2">
        <ShadcnIcon className="h-6 w-6" />
        <h1 className="font-bold">shadcn/ui tutorial</h1>
      </Link>
    </div>
  );
}
