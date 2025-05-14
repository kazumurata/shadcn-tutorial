'use client';

import { Button } from '@/shared/components/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCallback } from 'react';

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleChangeTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      variant={'ghost'}
      onClick={handleChangeTheme}
      className="h-8 w-8 cursor-pointer px-0"
    >
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="block dark:hidden" />
    </Button>
  );
}
