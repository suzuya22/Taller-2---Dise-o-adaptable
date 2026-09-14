import { useState, useMemo } from 'react';
import { INITIAL_ELEPHANT_WORDS, SUGGESTED_TAGS } from '../data/daliData';

export default function ElephantWordArt() {
  const [words, setWords] = useState(INITIAL_ELEPHANT_WORDS);
  const [inputWord, setInputWord] = useState('');
  const [hoveredPart, setHoveredPart] = useState(null);
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

  // Distribuir las palabras en las diferentes regiones anatómicas del elefante
  const distributedParts = useMemo(() => {
    const list = [...words];
    // Asegurar que siempre haya suficientes palabras repitiendo cíclicamente si es necesario
    const getWord = (index) => list[index % list.length];

    return {
      // 1. Cúspide del obelisco (ápice y pirámide superior)
      obeliskApex: getWord(0),
      obeliskMid: [getWord(1), getWord(2)],
      obeliskBase: [getWord(3), getWord(4), getWord(5)],
      
      // 2. Manta ceremonial y montura
      saddle: [getWord(6), getWord(7)],

      // 3. Cabeza, colmillos y trompa alzada
      trunkTip: getWord(8),
      trunkMid: getWord(9),
      head: [getWord(10), getWord(11)],
      tusks: getWord(12),
      ears: [getWord(13), getWord(14)],

      // 4. Lomo y masa corporal
      torsoUpper: [getWord(15), getWord(16), getWord(17)],
      torsoLower: [getWord(18), getWord(19), getWord(20)],

      // 5. Las cuatro patas zancudas imposibles (hiper-alargadas)
      // Pata delantera 1 (frontal extendida)
      legFront1: [getWord(21), getWord(22), getWord(23), getWord(24), getWord(25)],
      // Pata delantera 2 (frontal interior)
      legFront2: [getWord(26), getWord(27), getWord(28), getWord(29), getWord(30)],
      // Pata trasera 1 (trasera interior)
      legBack1: [getWord(31), getWord(32), getWord(33), getWord(34), getWord(35)],
      // Pata trasera 2 (trasera extendida)
      legBack2: [getWord(36), getWord(37), getWord(38), getWord(39), getWord(40)]
    };
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

        {/* Silueta vectorial de fondo en modo ilustración */}
        {visualMode === 'silhouette' && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <svg viewBox="0 0 600 800" className="w-full h-full max-h-[750px] stroke-amber-400 fill-amber-500/10" strokeWidth="1.5">
              {/* Obelisco */}
              <polygon points="300,40 280,240 320,240" />
              {/* Cuerpo del elefante */}
              <ellipse cx="300" cy="300" rx="90" ry="55" />
              {/* Cabeza y oreja */}
              <circle cx="210" cy="290" r="45" />
              {/* Trompa alzada */}
              <path d="M 185,310 Q 140,320 135,270 T 150,220" fill="none" strokeWidth="6" />
              {/* Colmillos */}
              <path d="M 180,315 Q 160,340 130,335" fill="none" strokeWidth="3" />
              {/* 4 Patas zancudas infinitas */}
              <line x1="240" y1="350" x2="210" y2="780" strokeWidth="2.5" />
              <line x1="265" y1="350" x2="250" y2="780" strokeWidth="2" />
              <line x1="335" y1="350" x2="350" y2="780" strokeWidth="2" />
              <line x1="365" y1="350" x2="390" y2="780" strokeWidth="2.5" />
              {/* Nodos articulares de las patas (estilo insecto daliniano) */}
              <circle cx="225" cy="565" r="4" />
              <circle cx="257" cy="565" r="3.5" />
              <circle cx="342" cy="565" r="3.5" />
              <circle cx="377" cy="565" r="4" />
            </svg>
          </div>
        )}

        {/* ESTRUCTURA DEL CALIGRAMA DEL ELEFANTE */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center select-none font-['Cinzel']">

          {/* PARTE 1: EL OBELISCO CELESTE DE BERNINI */}
          <div 
            onMouseEnter={() => setHoveredPart('obelisk')}
            onMouseLeave={() => setHoveredPart(null)}
            className={`flex flex-col items-center gap-1.5 transition-all duration-300 pb-2 ${
              hoveredPart === 'obelisk' ? 'scale-105 drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]' : ''
            }`}
          >
            <div className="text-amber-400 text-sm md:text-base animate-bounce">▲</div>
            
            {/* Cúspide piramidal */}
            <span className="text-[10px] md:text-xs font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/40 hover:bg-amber-400 hover:text-black transition-colors cursor-default tracking-widest">
              [ {distributedParts.obeliskApex} ]
            </span>

            {/* Fuste medio del obelisco */}
            <div className="flex gap-2 text-[10px] md:text-xs text-amber-300/90 tracking-wider">
              {distributedParts.obeliskMid.map((w, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-neutral-900/80 border border-amber-600/30 hover:border-amber-400 hover:text-white transition-colors">
                  [ {w} ]
                </span>
              ))}
            </div>

            {/* Base ancha del obelisco */}
            <div className="flex gap-1.5 text-[9px] md:text-[11px] text-amber-200 tracking-wider">
              {distributedParts.obeliskBase.map((w, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-neutral-950 border border-amber-500/30 hover:border-amber-400 hover:text-amber-100 transition-colors">
                  [ {w} ]
                </span>
              ))}
            </div>

            <div className="w-48 md:w-64 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent my-1"></div>
            
            {/* Montura y manta ceremonial sobre el lomo */}
            <div className="flex gap-2 text-[10px] md:text-xs font-semibold text-amber-400 tracking-widest">
              {distributedParts.saddle.map((w, i) => (
                <span key={i} className="px-3 py-1 rounded bg-amber-600/30 border border-amber-500/50 hover:bg-amber-500 hover:text-black transition-colors">
                  ❖ {w} ❖
                </span>
              ))}
            </div>
          </div>

          {/* PARTE 2: CABEZA, TROMPA, COLMILLOS Y LOMO SUPERIOR */}
          <div 
            onMouseEnter={() => setHoveredPart('body')}
            onMouseLeave={() => setHoveredPart(null)}
            className={`w-full max-w-xl transition-all duration-300 py-3 ${
              hoveredPart === 'body' ? 'scale-[1.02] drop-shadow-[0_0_20px_rgba(217,119,6,0.6)]' : ''
            }`}
          >
            {/* Fila superior: Trompa alzada a la izquierda y grupa del elefante a la derecha */}
            <div className="flex items-center justify-between text-[10px] md:text-xs mb-2">
              {/* Trompa erguida apuntando al cielo */}
              <div className="flex flex-col items-start gap-1">
                <span className="text-amber-400 text-xs font-bold pl-2">╭─── [ {distributedParts.trunkTip} ] ⤴</span>
                <span className="text-amber-500/80 text-[10px] pl-6">│ [ {distributedParts.trunkMid} ]</span>
              </div>
              
              {/* Lomo y grupa del lomo posterior */}
              <div className="flex gap-1.5 text-[10px] md:text-xs">
                {distributedParts.torsoUpper.map((w, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-neutral-900/90 border border-amber-600/40 text-amber-300 font-bold hover:bg-amber-600 hover:text-black transition-colors">
                    [ {w} ]
                  </span>
                ))}
              </div>
            </div>

            {/* Fila central: Cabeza, grandes orejas, colmillos y torso denso */}
            <div className="flex items-center justify-between gap-2 text-[9px] md:text-[11px] mb-2">
              {/* Colmillos curvados y cabeza */}
              <div className="flex items-center gap-1.5">
                <span className="text-amber-100 font-serif italic text-xs">« {distributedParts.tusks} »</span>
                {distributedParts.head.map((w, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">
                    [ {w} ]
                  </span>
                ))}
              </div>

              {/* Orejas y vientre inferior */}
              <div className="flex gap-1.5">
                {distributedParts.ears.map((w, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-neutral-900 border border-amber-700/50 text-amber-400/90">
                    [ {w} ]
                  </span>
                ))}
              </div>
            </div>

            {/* Fila inferior del cuerpo / masa abdominal */}
            <div className="flex justify-center gap-2 text-[9px] md:text-xs">
              {distributedParts.torsoLower.map((w, i) => (
                <span key={i} className="px-3 py-1 rounded bg-black/80 border border-amber-600/30 text-amber-200 tracking-wider hover:border-amber-400 hover:text-white transition-colors">
                  [ {w} ]
                </span>
              ))}
            </div>
          </div>

          {/* LÍNEA GUÍA DE ANCLAJE ANTES DE LAS PATAS */}
          <div className="w-3/4 max-w-md h-[1px] bg-gradient-to-r from-transparent via-amber-600/60 to-transparent my-1"></div>

          {/* PARTE 3: LAS 4 PATAS ZANCUDAS INFINITAS (CARACTERÍSTICA CULMINANTE DE DALÍ) */}
          <div 
            onMouseEnter={() => setHoveredPart('legs')}
            onMouseLeave={() => setHoveredPart(null)}
            className={`w-full max-w-xl grid grid-cols-4 gap-2 md:gap-4 pt-2 transition-all duration-300 ${
              hoveredPart === 'legs' ? 'drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]' : ''
            }`}
          >
            {/* PATA 1: Delantera Izquierda (Extendida hacia adelante) */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-[9px] text-amber-500 font-mono tracking-tighter uppercase font-bold">Pata I</span>
              <div className="w-[1px] h-3 bg-amber-600/50"></div>
              {distributedParts.legFront1.map((w, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-[8px] md:text-[10px] writing-mode-vertical text-amber-300/90 hover:text-white hover:bg-amber-600 px-1 py-1 rounded border border-amber-900/40 bg-black/60 transition-colors tracking-widest cursor-default max-w-[80px] truncate text-center">
                    {w}
                  </span>
                  {idx < distributedParts.legFront1.length - 1 && (
                    <div className="my-1 text-[8px] text-amber-400">✦</div>
                  )}
                </div>
              ))}
              <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,1)]"></div>
              <span className="text-[8px] text-gray-500 font-mono">⏊</span>
            </div>

            {/* PATA 2: Delantera Derecha (Interior) */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-[9px] text-amber-500 font-mono tracking-tighter uppercase font-bold">Pata II</span>
              <div className="w-[1px] h-3 bg-amber-600/50"></div>
              {distributedParts.legFront2.map((w, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-[8px] md:text-[10px] writing-mode-vertical text-amber-400/90 hover:text-white hover:bg-amber-600 px-1 py-1 rounded border border-amber-900/40 bg-black/60 transition-colors tracking-widest cursor-default max-w-[80px] truncate text-center">
                    {w}
                  </span>
                  {idx < distributedParts.legFront2.length - 1 && (
                    <div className="my-1 text-[8px] text-amber-500">⬦</div>
                  )}
                </div>
              ))}
              <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,1)]"></div>
              <span className="text-[8px] text-gray-500 font-mono">⏊</span>
            </div>

            {/* PATA 3: Trasera Izquierda (Interior) */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-[9px] text-amber-500 font-mono tracking-tighter uppercase font-bold">Pata III</span>
              <div className="w-[1px] h-3 bg-amber-600/50"></div>
              {distributedParts.legBack1.map((w, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-[8px] md:text-[10px] writing-mode-vertical text-amber-400/90 hover:text-white hover:bg-amber-600 px-1 py-1 rounded border border-amber-900/40 bg-black/60 transition-colors tracking-widest cursor-default max-w-[80px] truncate text-center">
                    {w}
                  </span>
                  {idx < distributedParts.legBack1.length - 1 && (
                    <div className="my-1 text-[8px] text-amber-500">⬦</div>
                  )}
                </div>
              ))}
              <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,1)]"></div>
              <span className="text-[8px] text-gray-500 font-mono">⏊</span>
            </div>

            {/* PATA 4: Trasera Derecha (Extendida hacia atrás) */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-[9px] text-amber-500 font-mono tracking-tighter uppercase font-bold">Pata IV</span>
              <div className="w-[1px] h-3 bg-amber-600/50"></div>
              {distributedParts.legBack2.map((w, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-[8px] md:text-[10px] writing-mode-vertical text-amber-300/90 hover:text-white hover:bg-amber-600 px-1 py-1 rounded border border-amber-900/40 bg-black/60 transition-colors tracking-widest cursor-default max-w-[80px] truncate text-center">
                    {w}
                  </span>
                  {idx < distributedParts.legBack2.length - 1 && (
                    <div className="my-1 text-[8px] text-amber-400">✦</div>
                  )}
                </div>
              ))}
              <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,1)]"></div>
              <span className="text-[8px] text-gray-500 font-mono">⏊</span>
            </div>
          </div>

          {/* LÍNEA DE SUELO / HORIZONTE SURREALISTA */}
          <div className="w-full mt-4 pt-2 border-t border-amber-600/40 flex justify-between items-center text-[10px] font-mono text-amber-500/70">
            <span>◄ Desierto de Port Lligat</span>
            <span className="text-amber-400 tracking-widest text-[9px] uppercase font-['Cinzel']">
              — Plano Terrenal vs. Altura Onírica —
            </span>
            <span>Horizonte Infinito ►</span>
          </div>
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
