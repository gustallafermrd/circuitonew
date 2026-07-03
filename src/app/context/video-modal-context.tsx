'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export interface VideoModalVideo {
  vimeoId: string;
  hash: string;
  title: string;
}

interface VideoModalContextValue {
  video: VideoModalVideo | null;
  openVideo: (video: VideoModalVideo) => void;
  closeVideo: () => void;
}

const VideoModalContext = createContext<VideoModalContextValue | undefined>(undefined);

export function VideoModalProvider({ children }: { children: ReactNode }) {
  const [video, setVideo] = useState<VideoModalVideo | null>(null);

  const openVideo = (nextVideo: VideoModalVideo) => setVideo(nextVideo);
  const closeVideo = () => setVideo(null);

  return (
    <VideoModalContext.Provider value={{ video, openVideo, closeVideo }}>
      {children}
    </VideoModalContext.Provider>
  );
}

export function useVideoModal() {
  const context = useContext(VideoModalContext);
  if (!context) {
    throw new Error('useVideoModal must be used within a VideoModalProvider');
  }
  return context;
}
