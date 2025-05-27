'use client';

import { usePathname } from 'next/navigation';

/**
 * ケバブケースをタイトルケースに変換
 * @param str
 * @returns
 */
function toTitleCase(str: string): string {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * コンポーネントページのタイトル
 * @returns
 */
export default function ComponentPageTitle() {
  const pathname = usePathname();

  const title = pathname.split('/').pop() ?? 'not-found';

  return <h1 className="text-xl font-bold">{toTitleCase(title)}</h1>;
}
