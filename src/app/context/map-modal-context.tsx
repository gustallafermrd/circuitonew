'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface MapModalContextValue {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const MapModalContext = createContext<MapModalContextValue | undefined>(undefined);

export function MapModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <MapModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </MapModalContext.Provider>
  );
}

export function useMapModal() {
  const context = useContext(MapModalContext);
  if (!context) {
    throw new Error('useMapModal must be used within a MapModalProvider');
  }
  return context;
}
