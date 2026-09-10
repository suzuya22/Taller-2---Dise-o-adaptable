import { useEffect } from 'react';
import './index.css'
export default function App() {
  useEffect(() => {
    const words = [
      "SURREALISMO", "RELOJES BLANDOS", "FIGUERAS", "ELEFANTE ESPACIAL", 
      "GALA", "ONÍRICO", "PERSISTENCIA", "INCONSCIENTE", "MELANCOLÍA", 
      "ESPEJISMO", "METAMORFOSIS", "PINTURA", "GENIO", "ABSURDO", 
      "VANGUARDIA", "MISTICISMO", "PARANOIA-CRÍTICA", "MUSTACHE"
    ];

    const mosaicContainer = document.getElementById('elephant-mosaic');
    if (mosaicContainer) {
      let contentHTML = '';
      for (let i = 0; i < 40; i++) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        const opacityClass = Math.random() > 0.5 ? 'text-amber-400 font-bold' : 'text-amber-600/60';
        contentHTML += `<span class="${opacityClass} hover:text-white transition-colors duration-300 cursor-default">[ ${randomWord} ]</span> `;
      }
      mosaicContainer.innerHTML = contentHTML;
    }
  }, []);

  return (
    <div className="bg-[#0b090a] text-[#f5f3f4] font-['Playfair_Display',serif] selection:bg-amber-600 selection:text-white min-h-screen">

      {/* NAVEGACIÓN FLOTANTE */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0b090a]/80 backdrop-blur-md border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#inicio" className="font-['Cinzel'] text-2xl tracking-widest text-amber-500 font-bold">SALVADOR DALÍ</a>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-['Cinzel']">
            <a href="#biografia" className="hover:text-amber-500 transition-colors">Biografía</a>
            <a href="#pinturas" className="hover:text-amber-500 transition-colors">Pinturas</a>
            <a href="#agenda" className="hover:text-amber-500 transition-colors">Cronograma & Agenda</a>
            <a href="#contacto" className="hover:text-amber-500 transition-colors">Contratación</a>
          </nav>
        </div>
      </header>

      <main>
        {/* SECCIÓN 1: PORTADA PRINCIPAL */}
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1920')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b090a] via-transparent to-[#0b090a]/80 z-10"></div>
          
          <div className="relative z-20 text-center max-w-4xl px-6">
            <span className="text-amber-500 font-['Cinzel'] tracking-[0.3em] uppercase text-sm block mb-4">Portafolio Oficial del Genio</span>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 font-['Cinzel'] text-amber-100">
              El Arte de lo Imposible
            </h1>
            <p className="text-xl md:text-2xl italic text-gray-300 mb-10 max-w-2xl mx-auto">
              "La única diferencia entre un loco y yo, es que yo no estoy loco." Contráteme para desafiar la lógica del espacio y el tiempo.
            </p>

            <div className="my-8 p-8 border border-amber-500/30 bg-black/60 backdrop-blur-md rounded-2xl relative shadow-[0_0_30px_rgba(217,119,6,0.15)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-black text-xs font-['Cinzel'] px-4 py-1 rounded uppercase tracking-wider font-bold">
                Metamorfosis Visual
              </div>
              <div id="elephant-mosaic" className="flex flex-wrap justify-center gap-2 text-xs md:text-sm text-amber-300/80 font-['Cinzel'] tracking-widest leading-relaxed select-none"></div>
            </div>

            <a href="#contacto" className="inline-block border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-['Cinzel'] tracking-widest uppercase text-sm px-8 py-4 transition-all duration-300">
              Solicitar Contratación
            </a>
          </div>
        </section>

        {/* SECCIÓN 2: BIOGRAFÍA Y RETRATO */}
        <section id="biografia" className="py-28 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-600 to-yellow-900 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative border-4 border-amber-800/80 bg-neutral-900 p-4 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800" alt="Retrato de Salvador Dalí" className="w-full h-[450px] object-cover grayscale contrast-125 filter group-hover:grayscale-0 transition-all duration-700" />
                <div className="mt-4 text-center font-['Cinzel'] text-amber-400 text-sm tracking-widest">
                  — Salvador Dalí i Domènech, 1904-1989 —
                </div>
              </div>
            </div>

            <div>
              <span className="text-amber-500 font-['Cinzel'] tracking-widest uppercase text-xs block mb-2">Genio del Surrealismo</span>
              <h2 className="text-4xl md:text-5xl font-['Cinzel'] font-bold mb-6 text-amber-100">Biografía & Legado</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Nacido en Figueras, España, Salvador Dalí destacó por sus impactantes y bizarras imágenes surrealistas. Sus habilidades pictóricas se atribuían a menudo a la influencia de los maestros del Renacimiento.
              </p>
              <div className="grid grid-cols-2 gap-6 border-t border-amber-900/40 pt-6">
                <div>
                  <h4 className="text-amber-400 font-['Cinzel'] font-bold text-xl mb-1">+250</h4>
                  <p className="text-sm text-gray-400">Obras maestras reconocidas a nivel mundial.</p>
                </div>
                <div>
                  <h4 className="text-amber-400 font-['Cinzel'] font-bold text-xl mb-1">Siglo XX</h4>
                  <p className="text-sm text-gray-400">Máximo exponente del movimiento onírico.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: PINTURAS */}
        <section id="pinturas" className="py-28 bg-neutral-950 border-t border-b border-amber-900/20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-amber-500 font-['Cinzel'] tracking-widest uppercase text-xs block mb-2">Exhibición de Trabajos</span>
              <h2 className="text-4xl md:text-5xl font-['Cinzel'] font-bold text-amber-100">Galería de Pinturas</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-lg bg-neutral-900 border border-amber-900/30">
                <div className="h-80 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800" alt="Obra 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-['Cinzel'] text-xl text-amber-300 mb-2">La Persistencia de la Memoria</h3>
                  <p className="text-gray-400 text-sm">Estudio sobre la relatividad del tiempo y los relojes blandos.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg bg-neutral-900 border border-amber-900/30">
                <div className="h-80 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1582561234725-b51f084a44f2?q=80&w=800" alt="Obra 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-['Cinzel'] text-xl text-amber-300 mb-2">El Elefante Espacial</h3>
                  <p className="text-gray-400 text-sm">Criaturas de patas largas y delgadas cargando obeliscos de peso infinito.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg bg-neutral-900 border border-amber-900/30">
                <div className="h-80 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800" alt="Obra 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-['Cinzel'] text-xl text-amber-300 mb-2">Sueño Causado por el Vuelo</h3>
                  <p className="text-gray-400 text-sm">Exploración profunda del subconsciente y el realismo mágico.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 4: CRONOGRAMA Y AGENDA */}
        <section id="agenda" className="py-28 px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-500 font-['Cinzel'] tracking-widest uppercase text-xs block mb-2">Disponibilidad del Artista</span>
            <h2 className="text-4xl md:text-5xl font-['Cinzel'] font-bold text-amber-100">Cronograma & Agenda</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-neutral-900/60 border border-amber-900/40 p-8 rounded-xl backdrop-blur-md">
              <h3 className="font-['Cinzel'] text-2xl text-amber-400 mb-6">Próximos Eventos & Exposiciones</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-amber-900/40 text-amber-500 font-['Cinzel'] text-sm">
                      <th className="py-4 px-4">Fecha</th>
                      <th className="py-4 px-4">Evento / Proyecto</th>
                      <th className="py-4 px-4">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300 text-sm divide-y divide-amber-900/20">
                    <tr>
                      <td className="py-4 px-4 font-mono text-amber-300">14 Oct, 2026</td>
                      <td className="py-4 px-4">Instalación Onírica en París</td>
                      <td className="py-4 px-4"><span className="bg-amber-500/20 text-amber-400 px-2 py-1 rounded text-xs">Confirmado</span></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-mono text-amber-300">02 Nov, 2026</td>
                      <td className="py-4 px-4">Conferencia sobre Relojes Blandos</td>
                      <td className="py-4 px-4"><span className="bg-amber-500/20 text-amber-400 px-2 py-1 rounded text-xs">Disponible</span></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-mono text-amber-300">19 Dic, 2026</td>
                      <td className="py-4 px-4">Diseño escenográfico para Ópera</td>
                      <td className="py-4 px-4"><span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs">Reservado</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-neutral-900/60 border border-amber-900/40 p-8 rounded-xl backdrop-blur-md flex flex-col justify-between">
              <div>
                <h3 className="font-['Cinzel'] text-xl text-amber-400 mb-4">Agenda Rápida</h3>
                <p className="text-gray-400 text-sm mb-6">Selecciona una fecha en el calendario de reservas para evaluar contratos privados de obras o conferencias.</p>
                <input type="date" className="w-full bg-black border border-amber-900/60 rounded p-3 text-amber-300 font-mono focus:outline-none focus:border-amber-500" />
              </div>
              <div className="mt-6">
                <span className="text-xs text-amber-500 block uppercase font-['Cinzel'] tracking-wider mb-2">Estado del Canal</span>
                <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-3/4"></div>
                </div>
                <span className="text-[10px] text-gray-400 mt-1 block">75% de cupos ocupados para este periodo</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 5: CONTRATACIÓN Y CONTACTO */}
        <section id="contacto" className="py-28 bg-neutral-950 border-t border-amber-900/20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-amber-500 font-['Cinzel'] tracking-widest uppercase text-xs block mb-2">Inicie una Colaboración</span>
              <h2 className="text-4xl md:text-5xl font-['Cinzel'] font-bold text-amber-100">Contratación & Contacto</h2>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert("¡Propuesta enviada al subconsciente de Dalí!"); }} className="bg-neutral-900/80 border border-amber-900/40 p-8 md:p-12 rounded-2xl shadow-2xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-['Cinzel'] text-sm text-amber-400 mb-2 uppercase tracking-wider">Su Nombre / Entidad</label>
                  <input type="text" placeholder="Ej. Museo del Louvre" className="w-full bg-black border border-amber-900/60 rounded p-4 text-gray-200 focus:outline-none focus:border-amber-500" required />
                </div>
                <div>
                  <label className="block font-['Cinzel'] text-sm text-amber-400 mb-2 uppercase tracking-wider">Correo Electrónico</label>
                  <input type="email" placeholder="contacto@arte.com" className="w-full bg-black border border-amber-900/60 rounded p-4 text-gray-200 focus:outline-none focus:border-amber-500" required />
                </div>
              </div>
              <div>
                <label className="block font-['Cinzel'] text-sm text-amber-400 mb-2 uppercase tracking-wider">Propósito de Contratación</label>
                <select className="w-full bg-black border border-amber-900/60 rounded p-4 text-gray-200 focus:outline-none focus:border-amber-500">
                  <option>Exposición de Pinturas</option>
                  <option>Conferencia Magistral</option>
                  <option>Diseño Escenográfico / Publicidad</option>
                  <option>Otro proyecto surrealista</option>
                </select>
              </div>
              <div>
                <label className="block font-['Cinzel'] text-sm text-amber-400 mb-2 uppercase tracking-wider">Mensaje o Propuesta</label>
                <textarea rows="4" placeholder="Describa su visión artística aquí..." className="w-full bg-black border border-amber-900/60 rounded p-4 text-gray-200 focus:outline-none focus:border-amber-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-500 text-black font-['Cinzel'] uppercase font-bold tracking-widest py-4 rounded transition-colors cursor-pointer">
                Enviar Propuesta a Dalí
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-amber-900/30 text-center text-sm text-gray-500 font-['Cinzel']">
        <p>&copy; 2026 Salvador Dalí. Todos los derechos reservados al subconsciente.</p>
      </footer>
    </div>
  );
}