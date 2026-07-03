'use client';

import { useMapModal } from '@/app/context/map-modal-context';

export default function Mapa() {
  const { openModal } = useMapModal();

  return (
    <div className="w-full max-w-[1440px] px-4 md:px-6 py-16">
      <div className="relative overflow-hidden rounded-2xl bg-primary flex flex-col items-center justify-center text-center p-8 md:p-16 gap-6 min-h-[400px]"
        style={{backgroundImage: 'linear-gradient(rgba(24, 24, 52, 0.4) 0%, rgba(24, 24, 52, 0.6) 100%), url("/img/map.png"); background-size: cover; background-position: center'}}>
        <h2 className="text-white text-3xl md:text-4xl font-bold max-w-2xl">
          Planifica Tu Viaje por Venezuela
        </h2>
        <p className="text-gray-300 text-lg max-w-xl">
          Explora nuestro mapa interactivo para encontrar la posada perfecta para tu próxima aventura.
        </p>
        <button
          onClick={openModal}
          className="bg-secondary hover:bg-[#e0b852] text-[#181834] font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined">map</span> Abrir Mapa
        </button>
      </div>
    </div>
  );
}
