'use client';

import { ThemeProvider } from 'next-themes';
import { MapModalProvider } from './context/map-modal-context';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MapModalProvider>{children}</MapModalProvider>
    </ThemeProvider>
  );
}
