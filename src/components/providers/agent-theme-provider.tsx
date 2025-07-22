'use client';

import { useEffect } from 'react';
import { ThemeManager } from '@/lib/theme-manager';

interface AgentThemeProviderProps {
  children: React.ReactNode;
}

export function AgentThemeProvider({ children }: AgentThemeProviderProps) {
  useEffect(() => {
    const themeManager = ThemeManager.getInstance();
    themeManager.initialize();
  }, []);

  return <>{children}</>;
}