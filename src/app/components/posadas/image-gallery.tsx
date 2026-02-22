'use client';

import { useState, useEffect } from 'react';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
  }, [isOpen]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[300px] md:h-[500px] rounded-xl overflow-hidden mb-12">
        {/* Main Image */}
        <div 
          className="col-span-1 md:col-span-2 md:row-span-2 relative h-full group cursor-pointer"
          onClick={() => openLightbox(0)}
        >
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url('${images[0]}')` }}>
          </div>
        </div>

        {/* Supporting Images — hidden on mobile (cells collapse to 0 height in single-col grid) */}
        {images.slice(1, 5).map((img, i) => (
          <div 
            key={i} 
            className="hidden md:block relative group cursor-pointer"
            onClick={() => openLightbox(i + 1)}
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${img}')` }}>
            </div>
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 transition-opacity duration-300">
          {/* Controls */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-secondary p-2 transition-colors z-50"
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>

          <button 
            onClick={prevImage}
            className="absolute left-4 md:left-10 text-white hover:text-secondary p-2 transition-colors z-50 bg-black/20 hover:bg-black/40 rounded-full"
          >
            <span className="material-symbols-outlined text-5xl">chevron_left</span>
          </button>

          <button 
            onClick={nextImage}
            className="absolute right-4 md:right-10 text-white hover:text-secondary p-2 transition-colors z-50 bg-black/20 hover:bg-black/40 rounded-full"
          >
            <span className="material-symbols-outlined text-5xl">chevron_right</span>
          </button>

          {/* Current Image */}
          <div className="relative w-full h-full p-4 md:p-20 flex flex-col items-center justify-center">
            <div 
              className="max-w-full max-h-full bg-contain bg-center bg-no-repeat transition-all duration-300"
              style={{ 
                backgroundImage: `url('${images[currentIndex]}')`,
                width: '100%',
                height: '100%'
              }}
            ></div>
            
            {/* Info */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-center bg-black/50 backdrop-blur px-6 py-2 rounded-full border border-white/10">
              <span className="font-bold text-lg">{title}</span>
              <span className="mx-3 opacity-50">|</span>
              <span className="text-gray-300">{currentIndex + 1} / {images.length}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
