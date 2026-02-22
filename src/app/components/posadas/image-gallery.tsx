'use client';

import { useState, useEffect } from 'react';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[300px] md:h-[500px] rounded-xl overflow-hidden mb-12">
        {/* Main Image */}
        <div
          className="col-span-1 md:col-span-2 md:row-span-2 relative h-full overflow-hidden group cursor-pointer"
          onClick={() => openLightbox(0)}
        >
          <img
            src={images[0]}
            alt={`${title} - foto principal`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Supporting Images — hidden on mobile */}
        {images.slice(1, 5).map((img, i) => (
          <div
            key={i}
            className="hidden md:block relative overflow-hidden group cursor-pointer"
            onClick={() => openLightbox(i + 1)}
          >
            <img
              src={img}
              alt={`${title} - foto ${i + 2}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}

        <button
          onClick={() => openLightbox(0)}
          className="absolute bottom-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur text-text-main dark:text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-white dark:hover:bg-black flex items-center gap-2 transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-[18px]">grid_view</span>
          Ver todas las fotos
        </button>
      </div>

      {/* Lightbox Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95">
          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-secondary p-2 transition-colors z-50"
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>

          {/* Prev */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-10 text-white hover:text-secondary p-2 transition-colors z-50 bg-black/30 hover:bg-black/50 rounded-full"
          >
            <span className="material-symbols-outlined text-5xl">chevron_left</span>
          </button>

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-10 text-white hover:text-secondary p-2 transition-colors z-50 bg-black/30 hover:bg-black/50 rounded-full"
          >
            <span className="material-symbols-outlined text-5xl">chevron_right</span>
          </button>

          {/* Current Image */}
          <div className="relative w-full h-full flex items-center justify-center p-16 md:p-24">
            <img
              src={images[currentIndex]}
              alt={`${title} - foto ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />

            {/* Info */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center bg-black/60 backdrop-blur px-6 py-2 rounded-full border border-white/10 whitespace-nowrap">
              <span className="font-bold text-base md:text-lg">{title}</span>
              <span className="mx-3 opacity-50">|</span>
              <span className="text-gray-300">{currentIndex + 1} / {images.length}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
