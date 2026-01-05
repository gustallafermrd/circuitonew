'use client';

interface GoogleMapProps {
  lat: number;
  lng: number;
  name: string;
}

export default function GoogleMap({ lat, lng, name }: GoogleMapProps) {
  // Using the public Google Maps embed URL with a label
  // Force label display using q=Name@lat,lng and iwloc=A
  const encodedName = encodeURIComponent(name);
  const mapUrl = `https://www.google.com/maps?q=${encodedName}@${lat},${lng}&t=&z=14&ie=UTF8&iwloc=A&output=embed`;

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm bg-gray-50">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1)' }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={mapUrl}
        title="Ubicación de la posada"
      ></iframe>
    </div>
  );
}
