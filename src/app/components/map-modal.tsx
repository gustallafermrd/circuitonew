'use client';

import { useMapModal } from '@/app/context/map-modal-context';

export default function MapModal() {
  const { isModalOpen, closeModal } = useMapModal();

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={closeModal}
    >
      <div
        className="relative w-[80vw] h-[80vh] bg-white rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg transition-colors"
          aria-label="Cerrar mapa"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Google Maps Iframe */}
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1RBRT-bE6KccOdhYbaQTgsvkJuVcu-n8&ehbc=2E312F&noprof=1"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Nuestras Posadas"
          allowFullScreen
        />
      </div>
    </div>
  );
}
