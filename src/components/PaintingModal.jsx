import { useEffect } from 'react';

export default function PaintingModal({ painting, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!painting) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-neutral-900 border border-amber-500/40 rounded-2xl shadow-[0_0_50px_rgba(217,119,6,0.25)] overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-amber-500/50 text-amber-400 hover:text-white hover:bg-amber-600 transition-colors flex items-center justify-center cursor-pointer text-lg font-bold"
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        {/* Contenedor de la imagen */}
        <div className="md:w-3/5 bg-black flex items-center justify-center p-4 md:p-6 overflow-hidden relative">
          <img
            src={painting.imageUrl}
            alt={painting.title}
            onError={(e) => {
              if (painting.fallbackUrl && e.target.src !== painting.fallbackUrl) {
                e.target.src = painting.fallbackUrl;
              }
            }}
            className="max-h-[55vh] md:max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-3 left-4 bg-black/70 border border-amber-900/50 px-3 py-1 rounded text-[11px] text-amber-400/90 font-['Cinzel'] tracking-wider">
            {painting.year}
          </div>
        </div>

        {/* Ficha técnica y análisis */}
        <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto border-t md:border-t-0 md:border-l border-amber-900/40 bg-neutral-900/95">
          <div className="space-y-4">
            <div>
              <span className="text-amber-500 font-['Cinzel'] tracking-widest uppercase text-xs block mb-1">
                {painting.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-['Cinzel'] text-amber-100 leading-snug">
                {painting.title}
              </h3>
              {painting.originalTitle && painting.originalTitle !== painting.title && (
                <p className="text-xs italic text-gray-400 mt-1">
                  Título original: {painting.originalTitle}
                </p>
              )}
            </div>

            <div className="p-4 rounded-lg bg-black/50 border border-amber-900/30 text-xs space-y-2 font-mono text-gray-300">
              <div className="flex justify-between border-b border-amber-900/20 pb-1">
                <span className="text-amber-400">Año:</span>
                <span>{painting.year}</span>
              </div>
              <div className="flex justify-between border-b border-amber-900/20 pb-1">
                <span className="text-amber-400">Técnica:</span>
                <span className="text-right truncate max-w-[180px]">{painting.medium}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-400">Ubicación:</span>
                <span className="text-right">{painting.museum}</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider text-amber-400 font-['Cinzel'] font-bold mb-2">
                Interpretación & Simbolismo
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed font-serif">
                {painting.description}
              </p>
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-amber-900/30">
            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 bg-amber-600/20 hover:bg-amber-500 text-amber-300 hover:text-black border border-amber-500/50 rounded text-xs font-['Cinzel'] uppercase tracking-widest font-bold transition-colors cursor-pointer text-center"
            >
              Volver a la Galería
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
