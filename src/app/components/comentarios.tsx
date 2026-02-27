"use client";

import { useState, useEffect } from "react";

interface ComentariosProps {
  dictionary: {
    title: string;
    subtitle: string;
    reviews: {
      text: string;
      author: string;
      stars: number;
      image: string;
      alt: string;
    }[];
  };
}

export default function Comentarios({ dictionary }: ComentariosProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animState, setAnimState] = useState<'idle' | 'exiting' | 'entering'>('idle');

  useEffect(() => {
    if (!dictionary.reviews || dictionary.reviews.length <= 3) return;

    const interval = setInterval(() => {
      setAnimState('exiting'); // Start exit animation: slide left & fade out
      
      setTimeout(() => {
        // Change items
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 3;
          return nextIndex >= dictionary.reviews.length ? 0 : nextIndex;
        });
        
        // Instantly move to the right (hidden)
        setAnimState('entering'); 
        
        // Small delay to allow CSS class to apply without transition
        setTimeout(() => {
          setAnimState('idle'); // Slide in to center & fade in
        }, 50);
        
      }, 700); // Wait for exit animation to complete
    }, 6500);

    return () => clearInterval(interval);
  }, [dictionary.reviews]);

  const visibleReviews = [];
  if (dictionary.reviews && dictionary.reviews.length > 0) {
    if (dictionary.reviews.length <= 3) {
      visibleReviews.push(...dictionary.reviews);
    } else {
      for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % dictionary.reviews.length;
        visibleReviews.push(dictionary.reviews[index]);
      }
    }
  }

  const getContainerClasses = () => {
    if (animState === 'exiting') return 'opacity-0 -translate-x-12 transition-all duration-700 ease-in-out';
    if (animState === 'entering') return 'opacity-0 translate-x-12 transition-none';
    return 'opacity-100 translate-x-0 transition-all duration-700 ease-out';
  };

  return (
    <div className="w-full bg-background-light dark:bg-background-dark py-16 flex justify-center overflow-hidden">
        <div className="max-w-[1200px] w-full px-4 md:px-6 flex flex-col gap-12">
          <div className="text-center">
            <h2 className="text-text-main dark:text-white text-3xl font-bold mb-4">{dictionary.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{dictionary.subtitle}</p>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${getContainerClasses()}`}>
            {visibleReviews.map((review, index) => (
              <div 
                key={`${currentIndex}-${index}`}
                className={`p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm ${index === 2 ? 'hidden lg:block' : ''}`}>
                <div className="flex gap-1 text-secondary mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm">star</span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-6">{review.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden"
                    data-alt={review.alt}
                    style={{backgroundImage: `url("${review.image}")`, backgroundSize: 'cover'}}>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-main dark:text-white">{review.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}