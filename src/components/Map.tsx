'use client'

interface MapProps {
  address: string;
  className?: string;
}

export default function Map({ address, className = "" }: MapProps) {
  // Coordinates for Ghiroda, Timiș, Romania - Str. Calea Lugojului Nr 134/3 45.777217199794116, 21.31357416843446
  const latitude = 45.777217199794116;
  const longitude = 21.31357416843446;
  
  // Create OpenStreetMap URL for iframe
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.01}%2C${latitude-0.01}%2C${longitude+0.01}%2C${latitude+0.01}&amp;layer=mapnik&amp;marker=${latitude}%2C${longitude}`;
  
  return (
    <div className={`relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden ${className}`}>
      <iframe
        src={mapUrl}
        className="w-full h-full border-0"
        title="Locația Corox Engineering"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      
      {/* Overlay with address information */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <p className="text-sm font-medium text-gray-900">Corox Engineering</p>
        <p className="text-xs text-gray-600">{address}</p>
        <a
          href={`https://www.google.com/maps?q=${latitude},${longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary hover:text-slate-600 transition-colors mt-1 inline-block"
        >
          Vezi pe Google Maps →
        </a>
      </div>
    </div>
  );
}