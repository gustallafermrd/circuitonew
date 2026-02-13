'use client';

import { useState } from 'react';

export default function Mapa() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
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

      {/* Modal */}
      {isModalOpen && (
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2022064.7920524!2d-67.5!3d8.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2909e7e76c5c7b%3A0x7c5b3f3a3a3a3a3a!2sVenezuela!5e0!3m2!1ses!2sve!4v1234567890"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
