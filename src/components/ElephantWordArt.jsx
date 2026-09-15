import { useState, useMemo } from 'react';
import { INITIAL_ELEPHANT_WORDS, SUGGESTED_TAGS } from '../data/daliData';

// Silueta del "elefante espacial" daliniano (cuerpo, cabeza, trompa alzada,
// orejas, colmillo, obelisco sobre el lomo y 4 patas zancudas larguísimas).
// Se define una única vez como shapes SVG reutilizables tanto para la
// máscara de texto (rellenas de blanco) como para el contorno decorativo.
const ELEPHANT_VIEWBOX = '0 0 620 760';

const ELEPHANT_SHAPES_FILL = `
  <rect x="365" y="50" width="32" height="95" fill="#fff"/>
  <polygon points="381,8 358,50 404,50" fill="#fff"/>
  <ellipse cx="380" cy="260" rx="140" ry="85" fill="#fff"/>
  <path d="M230,150 C300,128 322,212 280,262 C250,292 208,272 200,232 C195,192 200,162 230,150 Z" fill="#fff"/>
  <circle cx="190" cy="230" r="70" fill="#fff"/>
  <path d="M120,235 Q80,285 63,335 Q52,368 78,382" fill="none" stroke="#fff" stroke-width="22" stroke-linecap="round"/>
  <path d="M140,278 Q118,302 92,296" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round"/>
  <path d="M515,245 Q545,265 535,300" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round"/>
  <path d="M270,340 L255,460 L268,460 L250,600 L266,600 L255,730" fill="none" stroke="#fff" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M310,340 L322,465 L308,465 L326,605 L310,605 L322,730" fill="none" stroke="#fff" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M430,340 L415,465 L428,465 L412,605 L426,605 L415,730" fill="none" stroke="#fff" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M470,340 L485,460 L470,460 L488,600 L472,600 L485,730" fill="none" stroke="#fff" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
  <ellipse cx="255" cy="732" rx="15" ry="7" fill="#fff"/>
  <ellipse cx="322" cy="732" rx="15" ry="7" fill="#fff"/>
  <ellipse cx="415" cy="732" rx="15" ry="7" fill="#fff"/>
  <ellipse cx="485" cy="732" rx="15" ry="7" fill="#fff"/>
`;

// Máscara CSS: incrustada como data-URI para que funcione de forma
// autocontenida (sin depender de referenciar un <mask> vivo del DOM).
const ELEPHANT_MASK_URI = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${ELEPHANT_VIEWBOX}">${ELEPHANT_SHAPES_FILL}</svg>`
)}`;

// Cuántas "casillas" de palabra se necesitan para cubrir por completo la
// silueta (cuerpo ancho + patas larguísimas y delgadas) sin dejar huecos.
const WORD_TILE_COUNT = 640;

export default function ElephantWordArt() {
  const [words, setWords] = useState(INITIAL_ELEPHANT_WORDS);
  const [inputWord, setInputWord] = useState('');
  const [visualMode, setVisualMode] = useState('calligram'); // 'calligram' | 'silhouette'

  // Añadir una nueva palabra ingresada por el usuario
  const handleAddWord = (e) => {
    e?.preventDefault();
    const trimmed = inputWord.trim().toUpperCase();
    if (!trimmed) return;
    if (!words.includes(trimmed)) {
      setWords([trimmed, ...words]);
    }
    setInputWord('');
  };

  // Añadir una sugerencia rápida
  const handleAddSuggested = (tag) => {
    const uppercaseTag = tag.toUpperCase();
    if (!words.includes(uppercaseTag)) {
      setWords([uppercaseTag, ...words]);
    }
  };

  // Eliminar una palabra específica
  const handleRemoveWord = (wordToRemove) => {
    if (words.length <= 4) {
      alert("Se requieren al menos 4 palabras para mantener en pie las patas del elefante.");
      return;
    }
    setWords(words.filter(w => w !== wordToRemove));
  };

  // Remezclar aleatoriamente el orden de las palabras
  const handleShuffle = () => {
    setWords([...words].sort(() => Math.random() - 0.5));
  };

  // Restaurar las palabras originales de Dalí
  const handleReset = () => {
    setWords(INITIAL_ELEPHANT_WORDS);
  };

  // Rellenar densamente la silueta repitiendo cíclicamente las palabras activas,
  // de modo que el cuerpo, la trompa, las orejas y las patas larguísimas queden
  // cubiertas de texto de punta a punta (como un caligrama real, no una lista de cajas).
  const tiledWords = useMemo(() => {
    if (words.length === 0) return [];
    return Array.from({ length: WORD_TILE_COUNT }, (_, i) => words[i % words.length]);
  }, [words]);

  return (
    <div className="w-full my-12 p-6 md:p-10 border border-amber-500/30 bg-gradient-to-b from-black/90 via-neutral-950/90 to-black/90 backdrop-blur-xl rounded-3xl relative shadow-[0_0_40px_rgba(217,119,6,0.18)]">
      {/* Placa superior */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-600 text-black text-xs font-['Cinzel'] px-6 py-1.5 rounded-full uppercase tracking-widest font-bold shadow-lg border border-amber-400/50 flex items-center gap-2">
        <span>🐘</span>
        <span>Metamorfosis Tipográfica Daliniana</span>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-8 pt-4">
        <h3 className="text-2xl md:text-3xl font-bold font-['Cinzel'] text-amber-100 mb-2">
          El Elefante Espacial Formado con Palabras
        </h3>
        <p className="text-sm md:text-base text-gray-300 font-serif italic">
          "En 'Los Elefantes' (1948), las colosales bestias desafían la gravedad sobre patas arácnidas infinitas portando obeliscos celestes."
          <br className="hidden md:inline" />
          <span className="text-amber-400 font-sans text-xs not-italic mt-1 block">
            Escribe tus propias palabras o pulsa las sugerencias para ver cómo se ensambla el caligrama.
          </span>
        </p>
      </div>

      {/* CONTROLES PARA AÑADIR PALABRAS */}
      <div className="max-w-3xl mx-auto mb-8 bg-neutral-900/80 border border-amber-900/40 p-4 md:p-6 rounded-2xl">
        <form onSubmit={handleAddWord} className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="text"
            value={inputWord}
            onChange={(e) => setInputWord(e.target.value)}
            placeholder="Escribe una palabra onírica (ej. TIEMPO, GRAVEDAD, ILUSIÓN)..."
            className="flex-1 bg-black/80 border border-amber-900/70 focus:border-amber-400 rounded-xl px-4 py-3 text-amber-200 text-sm placeholder-gray-500 focus:outline-none transition-colors uppercase font-mono tracking-wider"
            maxLength={25}
          />
          <button
            type="submit"
            className="bg-amber-600 hover:bg-amber-500 text-black font-['Cinzel'] font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(217,119,6,0.3)] hover:shadow-[0_0_20px_rgba(217,119,6,0.5)] cursor-pointer shrink-0"
          >
            + Añadir al Elefante
          </button>
        </form>

        {/* Sugerencias rápidas dalinianas */}
        <div className="mb-4">
          <span className="text-[11px] font-['Cinzel'] text-amber-500/80 uppercase tracking-wider block mb-2 font-bold">
            Conceptos Dalinianos para Incorporar:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {SUGGESTED_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleAddSuggested(tag)}
                className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                  words.includes(tag.toUpperCase())
                    ? 'border-amber-500/50 bg-amber-500/20 text-amber-300'
                    : 'border-neutral-800 bg-neutral-950 text-gray-400 hover:border-amber-600 hover:text-amber-300'
                }`}
              >
                + {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Botones de acción y métricas */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-amber-900/30 text-xs">
          <div className="flex items-center gap-2 font-mono text-amber-400/90">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span>Palabras activas en el subconsciente: <strong>{words.length}</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShuffle}
              className="text-gray-300 hover:text-amber-400 border border-neutral-700 hover:border-amber-500/60 px-3 py-1.5 rounded-lg transition-colors cursor-pointer text-[11px] font-['Cinzel']"
              title="Remezcla las palabras entre las patas, cuerpo y obelisco"
            >
              🎲 Remezclar
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="text-gray-300 hover:text-amber-400 border border-neutral-700 hover:border-amber-500/60 px-3 py-1.5 rounded-lg transition-colors cursor-pointer text-[11px] font-['Cinzel']"
              title="Restaurar vocabulario original de Dalí"
            >
              ↺ Restaurar
            </button>
            <button
              type="button"
              onClick={() => setVisualMode(visualMode === 'calligram' ? 'silhouette' : 'calligram')}
              className="text-amber-400 bg-amber-500/10 border border-amber-500/40 hover:bg-amber-500/20 px-3 py-1.5 rounded-lg transition-colors cursor-pointer text-[11px] font-['Cinzel']"
            >
              {visualMode === 'calligram' ? '👁️ Modo Silueta Iluminada' : '🔤 Modo Caligrama Puro'}
            </button>
          </div>
        </div>
      </div>

      {/* ÁREA DE VISUALIZACIÓN: EL ELEFANTE TIPOGRÁFICO DE DALÍ */}
      <div className={`relative w-full rounded-2xl p-4 md:p-8 overflow-hidden transition-all duration-700 border ${
        visualMode === 'silhouette'
          ? 'bg-gradient-to-t from-red-950/40 via-amber-950/30 to-black/80 border-amber-600/40'
          : 'bg-black/60 border-amber-900/30'
      }`}>
        {/* Fondo atmosférico de "Los Elefantes" (crepúsculo rojo y horizonte desértico) */}
        <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/30 via-red-900/15 to-transparent"></div>

        {/* EL ELEFANTE COMPUESTO ÍNTEGRAMENTE DE PALABRAS (máscara de silueta real) */}
        <div className="relative z-10 mx-auto" style={{ maxWidth: 560, aspectRatio: '620 / 760' }}>
          {/* Capa de texto: se repiten las palabras activas hasta cubrir toda la silueta,
              y una máscara CSS con la forma del elefante recorta lo que sobra. */}
          <div
            className="absolute inset-0 flex flex-wrap content-start justify-center gap-x-1 gap-y-[3px] overflow-hidden px-1 py-1 select-none"
            style={{
              WebkitMaskImage: `url("${ELEPHANT_MASK_URI}")`,
              maskImage: `url("${ELEPHANT_MASK_URI}")`,
              WebkitMaskSize: '100% 100%',
              maskSize: '100% 100%',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskPosition: 'center',
            }}
          >
            {tiledWords.map((w, i) => (
              <span
                key={i}
                className={`text-[8px] md:text-[10px] leading-none font-mono font-bold uppercase tracking-tight whitespace-nowrap ${
                  i % 5 === 0 ? 'text-amber-100' : i % 3 === 0 ? 'text-amber-500' : 'text-amber-300'
                }`}
              >
                {w}
              </span>
            ))}
          </div>

          {/* Contorno decorativo (solo en modo Silueta Iluminada) para confirmar la forma */}
          {visualMode === 'silhouette' && (
            <svg
              viewBox={ELEPHANT_VIEWBOX}
              className="absolute inset-0 w-full h-full pointer-events-none"
              fill="none"
              stroke="#fbbf24"
              strokeOpacity="0.9"
              strokeWidth="3"
            >
              <rect x="365" y="50" width="32" height="95" />
              <polygon points="381,8 358,50 404,50" />
              <ellipse cx="380" cy="260" rx="140" ry="85" />
              <path d="M230,150 C300,128 322,212 280,262 C250,292 208,272 200,232 C195,192 200,162 230,150 Z" />
              <circle cx="190" cy="230" r="70" />
              <path d="M120,235 Q80,285 63,335 Q52,368 78,382" strokeWidth="4" />
              <path d="M140,278 Q118,302 92,296" strokeWidth="2.5" />
              <path d="M515,245 Q545,265 535,300" strokeWidth="2" />
              <path d="M270,340 L255,460 L268,460 L250,600 L266,600 L255,730" strokeWidth="2" strokeLinejoin="round" />
              <path d="M310,340 L322,465 L308,465 L326,605 L310,605 L322,730" strokeWidth="2" strokeLinejoin="round" />
              <path d="M430,340 L415,465 L428,465 L412,605 L426,605 L415,730" strokeWidth="2" strokeLinejoin="round" />
              <path d="M470,340 L485,460 L470,460 L488,600 L472,600 L485,730" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          )}
        </div>

        {/* LÍNEA DE SUELO / HORIZONTE SURREALISTA */}
        <div className="relative z-10 w-full max-w-xl mx-auto mt-4 pt-2 border-t border-amber-600/40 flex justify-between items-center text-[10px] font-mono text-amber-500/70">
          <span>◄ Desierto de Port Lligat</span>
          <span className="text-amber-400 tracking-widest text-[9px] uppercase font-['Cinzel']">
            — Plano Terrenal vs. Altura Onírica —
          </span>
          <span>Horizonte Infinito ►</span>
        </div>
      </div>

      {/* GESTIÓN DE PALABRAS ACTIVAS (Permite al usuario ver y eliminar palabras) */}
      <div className="mt-8 pt-6 border-t border-amber-900/40">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase font-['Cinzel'] text-amber-400 tracking-wider font-bold">
            Palabras Componiendo el Elefante ({words.length}):
          </span>
          <span className="text-[11px] text-gray-400 font-mono">
            Haz clic en ✕ para eliminar una palabra
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-2 rounded-xl bg-black/50 border border-amber-900/30">
          {words.map((w) => (
            <span
              key={w}
              className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded bg-neutral-900 border border-amber-600/30 text-amber-200"
            >
              <span>{w}</span>
              <button
                type="button"
                onClick={() => handleRemoveWord(w)}
                className="text-gray-400 hover:text-red-400 hover:bg-neutral-800 rounded-full w-4 h-4 flex items-center justify-center cursor-pointer transition-colors"
                title={`Eliminar "${w}"`}
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
