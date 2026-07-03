'use client';

import { ThemeProvider } from 'next-themes';
import { MapModalProvider } from './context/map-modal-context';
import { VideoModalProvider } from './context/video-modal-context';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MapModalProvider>
        <VideoModalProvider>{children}</VideoModalProvider>
      </MapModalProvider>
    </ThemeProvider>
  );
}
