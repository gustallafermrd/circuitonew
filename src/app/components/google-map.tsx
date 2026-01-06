'use client';

interface GoogleMapProps {
  src: string;
}

export default function GoogleMap({ src }: GoogleMapProps) {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm bg-gray-50">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1)' }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={src}
        title="Ubicación de la posada"
      ></iframe>
    </div>
  );
}
