import { useState } from 'react';
import './index.css';
import ElephantWordArt from './components/ElephantWordArt';
import PaintingModal from './components/PaintingModal';
import { DALI_PORTRAITS, DALI_PAINTINGS } from './data/daliData';

export default function App() {
  const [selectedPainting, setSelectedPainting] = useState(null);
  const [activePortraitIndex, setActivePortraitIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const activePortrait = DALI_PORTRAITS[activePortraitIndex];

  const categories = ['Todas', 'Elefantes & Onírico', 'Relojes & Tiempo', 'Paranoico-Crítica'];

  const filteredPaintings = selectedCategory === 'Todas'
    ? DALI_PAINTINGS
    : DALI_PAINTINGS.filter(p => p.category === selectedCategory);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#0b090a] text-[#f5f3f4] font-['Playfair_Display',serif] min-h-screen">

      {/* NAVEGACIÓN FLOTANTE */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#0b090a]/85 backdrop-blur-md border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#inicio" className="font-['Cinzel'] text-xl md:text-2xl tracking-widest text-amber-400 font-bold flex items-center gap-2">
            <span className="text-2xl">✦</span>
            <span>SALVADOR DALÍ</span>
          </a>
          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-['Cinzel'] font-semibold">
            <a href="#inicio" className="text-gray-300 hover:text-amber-400 transition-colors">Inicio</a>
            <a href="#elefante" className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1">
              <span>🐘</span> Elefante de Palabras
            </a>
            <a href="#biografia" className="text-gray-300 hover:text-amber-400 transition-colors">Biografía</a>
            <a href="#pinturas" className="text-gray-300 hover:text-amber-400 transition-colors">Obras Maestras</a>
            <a href="#agenda" className="text-gray-300 hover:text-amber-400 transition-colors">Agenda</a>
            <a href="#contacto" className="text-gray-300 hover:text-amber-400 transition-colors">Contacto</a>
          </nav>
          <a 
            href="#elefante" 
            className="md:hidden text-xs font-['Cinzel'] border border-amber-500/50 text-amber-400 px-3 py-1.5 rounded"
          >
            🐘 Elefante
          </a>
        </div>
      </header>

      <main>
        {/* SECCIÓN 1: PORTADA PRINCIPAL */}
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
          {/* Fondo crepuscular surrealista */}
          <div className="absolute inset-0 z-0 opacity-25 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/40 via-red-950/30 to-[#0b090a]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b090a] via-transparent to-[#0b090a]/90 z-10 pointer-events-none"></div>

          <div className="relative z-20 text-center max-w-5xl px-6 w-full">
            <span className="text-amber-500 font-['Cinzel'] tracking-[0.35em] uppercase text-xs md:text-sm block mb-4 font-bold animate-pulse">
              — Archivo Oficial del Genio Surrealista —
            </span>
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 font-['Cinzel'] text-amber-100 drop-shadow-[0_0_25px_rgba(217,119,6,0.3)]">
              El Arte de lo Imposible
            </h1>
            <p className="text-lg md:text-2xl italic text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              "La única diferencia entre un loco y yo, es que yo no estoy loco."
            </p>
            <p className="text-xs md:text-sm text-gray-400 max-w-2xl mx-auto mb-10 font-sans tracking-wide">
              Bienvenido al universo onírico donde los relojes fluyen, los cisnes reflejan elefantes y las criaturas colosales se alzan sobre zancos infinitos desafiando las leyes de la física.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="#elefante" 
                className="bg-amber-600 hover:bg-amber-500 text-black font-['Cinzel'] font-bold tracking-widest uppercase text-xs md:text-sm px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:scale-105 cursor-pointer flex items-center gap-2"
              >
                <span>🐘</span> Crear Elefante con Palabras
              </a>
              <a 
                href="#pinturas" 
                className="border border-amber-500/60 text-amber-300 hover:bg-amber-500/10 font-['Cinzel'] tracking-widest uppercase text-xs md:text-sm px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer"
              >
                Explorar Pinturas
              </a>
            </div>
          </div>
        </section>

        {/* SECCIÓN INTERACTIVA DEL ELEFANTE DE PALABRAS (CENTRO DE LA EXPERIENCIA) */}
        <section id="elefante" className="py-20 px-4 md:px-6 max-w-7xl mx-auto scroll-mt-20">
          <ElephantWordArt />
        </section>

        {/* SECCIÓN 2: BIOGRAFÍA Y RETRATO AUTÉNTICO DE SALVADOR DALÍ */}
        <section id="biografia" className="py-24 px-6 max-w-7xl mx-auto border-t border-amber-900/30 scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Contenedor del retrato auténtico de Dalí */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-600 to-yellow-900 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              
              <div className="relative border-2 border-amber-600/60 bg-neutral-900 p-4 md:p-6 rounded-2xl shadow-2xl">
                <div className="overflow-hidden rounded-xl bg-black max-h-[500px] flex items-center justify-center">
                  <img
                    src={activePortrait.url}
                    alt={activePortrait.title}
                    onError={(e) => {
                      if (activePortrait.fallbackUrl && e.target.src !== activePortrait.fallbackUrl) {
                        e.target.src = activePortrait.fallbackUrl;
                      }
                    }}
                    className="w-full h-[450px] object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                </div>

                {/* Selector de retratos históricos */}
                <div className="mt-4 pt-3 border-t border-amber-900/40">
                  <span className="text-[10px] font-['Cinzel'] text-amber-400 uppercase tracking-widest block mb-2 font-bold">
                    Galería de Retratos Históricos:
                  </span>
                  <div className="flex gap-2">
                    {DALI_PORTRAITS.map((portrait, idx) => (
                      <button
                        key={portrait.id}
                        type="button"
                        onClick={() => setActivePortraitIndex(idx)}
                        className={`text-[11px] font-mono px-3 py-1.5 rounded-lg border transition-all cursor-pointer flex-1 text-center truncate ${
                          activePortraitIndex === idx
                            ? 'bg-amber-600 text-black border-amber-400 font-bold'
                            : 'bg-black/60 text-gray-300 border-amber-900/50 hover:border-amber-500'
                        }`}
                        title={portrait.title}
                      >
                        {portrait.year} - {portrait.id === 'portrait-atomicus' ? 'Atomicus' : portrait.year}
                      </button>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-gray-400 italic font-serif">
                    {activePortrait.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Texto Biográfico */}
            <div>
              <span className="text-amber-500 font-['Cinzel'] tracking-widest uppercase text-xs block mb-2 font-bold">
                Genio del Surrealismo (1904 – 1989)
              </span>
              <h2 className="text-4xl md:text-5xl font-['Cinzel'] font-bold mb-6 text-amber-100">
                Salvador Dalí i Domènech
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4 font-serif text-base md:text-lg">
                Nacido en Figueras, Cataluña, Dalí revolucionó el arte moderno con su audaz virtuosismo técnico influenciado por los maestros renacentistas y su revolucionario <strong>método paranoico-crítico</strong>, capaz de materializar las obsesiones, delirios y paisajes del subconsciente.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8 text-sm">
                Junto a su musa incondicional, Gala, concibió obras donde el tiempo se licúa, los elefantes caminan sobre zancos arácnidos de deseo infinito y los sueños se transforman en meticulosas realidades pictóricas.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-amber-900/40 pt-6 font-['Cinzel']">
                <div className="p-3 bg-neutral-900/60 rounded-xl border border-amber-900/30">
                  <h4 className="text-amber-400 font-bold text-2xl mb-1">+1,500</h4>
                  <p className="text-[11px] text-gray-400 font-sans">Obras maestras entre pinturas, esculturas y grabados.</p>
                </div>
                <div className="p-3 bg-neutral-900/60 rounded-xl border border-amber-900/30">
                  <h4 className="text-amber-400 font-bold text-2xl mb-1">Gala</h4>
                  <p className="text-[11px] text-gray-400 font-sans">Musa, co-creadora y epicentro de su mitología personal.</p>
                </div>
                <div className="p-3 bg-neutral-900/60 rounded-xl border border-amber-900/30 col-span-2 md:col-span-1">
                  <h4 className="text-amber-400 font-bold text-2xl mb-1">Figueras</h4>
                  <p className="text-[11px] text-gray-400 font-sans">Sede de su Teatro-Museo Dalí, el mayor objeto surrealista.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN 3: PINTURAS AUTÉNTICAS DE SALVADOR DALÍ */}
        <section id="pinturas" className="py-24 bg-neutral-950 border-t border-b border-amber-900/30 px-6 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-amber-500 font-['Cinzel'] tracking-widest uppercase text-xs block mb-2 font-bold">
                Obras Maestras Universales
              </span>
              <h2 className="text-4xl md:text-5xl font-['Cinzel'] font-bold text-amber-100 mb-4">
                Galería de Pinturas Auténticas
              </h2>
              <p className="text-gray-400 text-sm font-serif">
                Haz clic en cualquier cuadro para abrir la ficha técnica ampliada y explorar los secretos y simbolismos de cada lienzo.
              </p>
            </div>

            {/* Filtro por Categorías */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-['Cinzel'] text-xs px-4 py-2 rounded-full border transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-amber-600 text-black border-amber-400 font-bold shadow-[0_0_15px_rgba(217,119,6,0.4)]'
                      : 'bg-neutral-900/80 text-gray-300 border-amber-900/40 hover:border-amber-500 hover:text-amber-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Cuadrícula de Pinturas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPaintings.map((painting) => (
                <div
                  key={painting.id}
                  onClick={() => setSelectedPainting(painting)}
                  className="group relative overflow-hidden rounded-2xl bg-neutral-900/90 border border-amber-900/40 hover:border-amber-500/80 transition-all duration-500 hover:shadow-[0_0_30px_rgba(217,119,6,0.25)] flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Imagen de la pintura */}
                    <div className="h-64 sm:h-72 overflow-hidden bg-black flex items-center justify-center relative">
                      <img
                        src={painting.imageUrl}
                        alt={painting.title}
                        onError={(e) => {
                          if (painting.fallbackUrl && e.target.src !== painting.fallbackUrl) {
                            e.target.src = painting.fallbackUrl;
                          }
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3 bg-black/75 border border-amber-500/40 px-2.5 py-1 rounded-md text-[11px] font-['Cinzel'] text-amber-300 font-bold">
                        {painting.year}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60"></div>
                    </div>

                    {/* Contenido */}
                    <div className="p-6">
                      <span className="text-[10px] font-['Cinzel'] uppercase tracking-widest text-amber-500 font-bold block mb-1">
                        {painting.category}
                      </span>
                      <h3 className="font-['Cinzel'] text-xl font-bold text-amber-200 mb-2 group-hover:text-amber-400 transition-colors">
                        {painting.title}
                      </h3>
                      <p className="text-gray-400 text-xs font-serif leading-relaxed line-clamp-3">
                        {painting.description}
                      </p>
                    </div>
                  </div>

                  {/* Pie de tarjeta con botón modal */}
                  <div className="px-6 pb-6 pt-2 border-t border-amber-900/20 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-gray-400 truncate max-w-[180px]">
                      {painting.museum}
                    </span>
                    <span className="text-xs font-['Cinzel'] text-amber-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Examinar <span>→</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MODAL PARA CONTEMPLAR PINTURAS */}
        {selectedPainting && (
          <PaintingModal
            painting={selectedPainting}
            onClose={() => setSelectedPainting(null)}
          />
        )}

        {/* SECCIÓN 4: CRONOGRAMA Y AGENDA */}
        <section id="agenda" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-500 font-['Cinzel'] tracking-widest uppercase text-xs block mb-2 font-bold">
              Itinerario del Maestro
            </span>
            <h2 className="text-4xl md:text-5xl font-['Cinzel'] font-bold text-amber-100">
              Cronograma & Agenda
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-neutral-900/70 border border-amber-900/40 p-8 rounded-2xl backdrop-blur-md">
              <h3 className="font-['Cinzel'] text-2xl text-amber-400 mb-6 flex items-center gap-2">
                <span>✦</span> Próximos Eventos & Exposiciones Internacionales
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-amber-900/40 text-amber-500 font-['Cinzel'] text-sm">
                      <th className="py-4 px-4">Fecha</th>
                      <th className="py-4 px-4">Evento / Proyecto</th>
                      <th className="py-4 px-4">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300 text-sm divide-y divide-amber-900/20 font-serif">
                    <tr>
                      <td className="py-4 px-4 font-mono text-amber-300">14 Oct, 2026</td>
                      <td className="py-4 px-4">Instalación Onírica de Relojes Blandos en París</td>
                      <td className="py-4 px-4"><span className="bg-amber-500/20 text-amber-400 px-2.5 py-1 rounded text-xs font-mono">Confirmado</span></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-mono text-amber-300">02 Nov, 2026</td>
                      <td className="py-4 px-4">Conferencia sobre el Método Paranoico-Crítico</td>
                      <td className="py-4 px-4"><span className="bg-amber-500/20 text-amber-400 px-2.5 py-1 rounded text-xs font-mono">Disponible</span></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-mono text-amber-300">19 Dic, 2026</td>
                      <td className="py-4 px-4">Diseño escenográfico con Elefantes Espaciales</td>
                      <td className="py-4 px-4"><span className="bg-red-500/20 text-red-400 px-2.5 py-1 rounded text-xs font-mono">Reservado</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-neutral-900/70 border border-amber-900/40 p-8 rounded-2xl backdrop-blur-md flex flex-col justify-between">
              <div>
                <h3 className="font-['Cinzel'] text-xl text-amber-400 mb-4">Agenda Rápida</h3>
                <p className="text-gray-400 text-sm mb-6 font-serif">
                  Selecciona una fecha en el calendario de reservas para proponer comisiones de obras o conferencias con la fundación.
                </p>
                <input
                  type="date"
                  defaultValue="2026-10-15"
                  className="w-full bg-black border border-amber-900/60 rounded-xl p-3 text-amber-300 font-mono focus:outline-none focus:border-amber-500"
                />
              </div>
              <div className="mt-6 pt-4 border-t border-amber-900/30">
                <span className="text-xs text-amber-500 block uppercase font-['Cinzel'] tracking-wider mb-2">
                  Disponibilidad de Temporada
                </span>
                <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-3/4"></div>
                </div>
                <span className="text-[11px] text-gray-400 mt-2 block font-mono">
                  75% de cupos ocupados para este periodo
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 5: CONTRATACIÓN Y CONTACTO */}
        <section id="contacto" className="py-24 bg-neutral-950 border-t border-amber-900/20 px-6 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-amber-500 font-['Cinzel'] tracking-widest uppercase text-xs block mb-2 font-bold">
                Inicie una Colaboración
              </span>
              <h2 className="text-4xl md:text-5xl font-['Cinzel'] font-bold text-amber-100">
                Contratación & Contacto
              </h2>
            </div>

            {formSubmitted ? (
              <div className="bg-amber-900/30 border border-amber-500/60 p-8 rounded-2xl text-center space-y-3 animate-fadeIn">
                <span className="text-4xl">🕊️</span>
                <h3 className="text-2xl font-['Cinzel'] text-amber-300 font-bold">¡Mensaje Enviado al Subconsciente!</h3>
                <p className="text-gray-300 font-serif max-w-lg mx-auto text-sm">
                  Su propuesta ha cruzado el umbral onírico. El equipo curatorial responderá a la brevedad temporal.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="bg-neutral-900/90 border border-amber-900/50 p-8 md:p-12 rounded-3xl shadow-2xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-['Cinzel'] text-xs text-amber-400 mb-2 uppercase tracking-wider font-bold">
                      Su Nombre / Entidad
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Museo de Arte Reina Sofía"
                      className="w-full bg-black border border-amber-900/60 rounded-xl p-4 text-gray-200 focus:outline-none focus:border-amber-500 font-serif text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-['Cinzel'] text-xs text-amber-400 mb-2 uppercase tracking-wider font-bold">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      placeholder="contacto@institucion.org"
                      className="w-full bg-black border border-amber-900/60 rounded-xl p-4 text-gray-200 focus:outline-none focus:border-amber-500 font-serif text-sm"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-['Cinzel'] text-xs text-amber-400 mb-2 uppercase tracking-wider font-bold">
                    Propósito de Contratación
                  </label>
                  <select className="w-full bg-black border border-amber-900/60 rounded-xl p-4 text-gray-200 focus:outline-none focus:border-amber-500 font-serif text-sm">
                    <option>Préstamo para Exposición Internacional</option>
                    <option>Conferencia Magistral sobre Surrealismo</option>
                    <option>Diseño Escenográfico / Proyecto Editorial</option>
                    <option>Otro proyecto de inspiración daliniana</option>
                  </select>
                </div>
                <div>
                  <label className="block font-['Cinzel'] text-xs text-amber-400 mb-2 uppercase tracking-wider font-bold">
                    Mensaje o Propuesta Artística
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Describa su visión artística y detalles de la propuesta..."
                    className="w-full bg-black border border-amber-900/60 rounded-xl p-4 text-gray-200 focus:outline-none focus:border-amber-500 font-serif text-sm"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-500 text-black font-['Cinzel'] uppercase font-bold tracking-widest py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)] cursor-pointer text-sm"
                >
                  Enviar Propuesta a Dalí
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-amber-900/30 text-center text-sm text-gray-500 font-['Cinzel']">
        <p className="tracking-wider">&copy; {new Date().getFullYear()} Salvador Dalí. Todos los derechos reservados al subconsciente.</p>
        <p className="text-xs text-gray-600 mt-2 font-mono">Portafolio Surrealista Adaptable &bull; Homenaje a la Memoria y a 'Los Elefantes'</p>
      </footer>
    </div>
  );
}