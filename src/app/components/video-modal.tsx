'use client';

import { useVideoModal } from '@/app/context/video-modal-context';

export default function VideoModal() {
  const { video, closeVideo } = useVideoModal();

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={closeVideo}
    >
      <div
        className="relative w-[90vw] max-w-4xl aspect-video bg-black rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeVideo}
          className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg transition-colors"
          aria-label="Cerrar video"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Vimeo Iframe */}
        <iframe
          src={`https://player.vimeo.com/video/${video.vimeoId}?h=${video.hash}&title=0&byline=0&portrait=0`}
          className="w-full h-full border-0"
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          title={video.title}
          allowFullScreen
        />
      </div>
    </div>
  );
}
