
import { getDictionary } from "@/lib/get-dictionary";

export default async function QuieresSerMiembroPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as 'en' | 'es');

  return (
    <>
      <section className="relative h-[600px] flex items-center overflow-hidden">
      <img alt="Luxury Inn" className="absolute inset-0 w-full h-full object-cover"
        src="/img/miembro-1.png" />
      <div className="absolute inset-0 bg-primary/60"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Afiliación de Posadas</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">¿Quieres formar parte de la excelencia?
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">Únete a la red más exclusiva de posadas en Venezuela y
            eleva tu estándar de servicio al nivel de los mejores.</p>
          <div className="flex gap-4">
            <a className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl"
              href="#proceso">Iniciar Solicitud</a>
            <a className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition-all"
              href="#beneficios">Ver Beneficios</a>
          </div>
        </div>
      </div>
    </section>
    <section className="py-24 bg-white" id="beneficios">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Beneficios de ser miembro</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-secondary/70">Formar parte del Circuito de la Excelencia no es solo un sello, es una
            transformación integral para su negocio de hospitalidad.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="p-8 rounded-xl bg-background-light border-t-4 border-primary hover:shadow-2xl transition-shadow group">
            <div
              className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <span className="material-icons text-primary group-hover:text-white text-3xl">verified</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Sello de Calidad</h3>
            <p className="text-secondary/70 leading-relaxed">Reconocimiento nacional e internacional bajo estándares europeos
              de calidad turística.</p>
          </div>
          <div
            className="p-8 rounded-xl bg-background-light border-t-4 border-primary hover:shadow-2xl transition-shadow group">
            <div
              className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <span className="material-icons text-primary group-hover:text-white text-3xl">public</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Marketing Global</h3>
            <p className="text-secondary/70 leading-relaxed">Exposición en nuestra plataforma web, redes sociales y ferias de
              turismo nacionales.</p>
          </div>
          <div
            className="p-8 rounded-xl bg-background-light border-t-4 border-primary hover:shadow-2xl transition-shadow group">
            <div
              className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <span className="material-icons text-primary group-hover:text-white text-3xl">groups</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Networking Elite</h3>
            <p className="text-secondary/70 leading-relaxed">Conexión directa con los mejores posaderos del país para
              intercambio de experiencias.</p>
          </div>
          <div
            className="p-8 rounded-xl bg-background-light border-t-4 border-primary hover:shadow-2xl transition-shadow group">
            <div
              className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <span className="material-icons text-primary group-hover:text-white text-3xl">school</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Capacitación</h3>
            <p className="text-secondary/70 leading-relaxed">Acceso a talleres exclusivos de servicio, gastronomía y gestión
              hotelera de alto nivel.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-24 bg-secondary text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-md p-8 flex items-center justify-center">
              <img alt="Circuito de la Excelencia Logo" className="max-w-full h-auto drop-shadow-2xl"
                src="/img/logo-circuito.webp" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8">Requisitos de Ingreso</h2>
            <p className="text-white/80 mb-10 text-lg">Para mantener el prestigio de nuestra red, todas las posadas deben
              cumplir con criterios rigurosos antes de su certificación.</p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="material-icons text-primary bg-primary/10 p-1 rounded-full">check</span>
                <div>
                  <h4 className="font-bold text-lg">Infraestructura Excepcional</h4>
                  <p className="text-white/60">Arquitectura armónica con el entorno y mantenimiento impecable.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-icons text-primary bg-primary/10 p-1 rounded-full">check</span>
                <div>
                  <h4 className="font-bold text-lg">Servicio Personalizado</h4>
                  <p className="text-white/60">Atención directa de sus dueños o gerencia altamente capacitada.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-icons text-primary bg-primary/10 p-1 rounded-full">check</span>
                <div>
                  <h4 className="font-bold text-lg">Compromiso Ambiental</h4>
                  <p className="text-white/60">Prácticas sostenibles y respeto por la cultura local.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-icons text-primary bg-primary/10 p-1 rounded-full">check</span>
                <div>
                  <h4 className="font-bold text-lg">Gastronomía de Autor</h4>
                  <p className="text-white/60">Propuesta culinaria que resalte los sabores e ingredientes regionales.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="py-24 bg-background-light" id="proceso">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-4">Tu camino a la excelencia</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-primary/20 -translate-y-1/2 z-0"></div>
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            <div
              className="bg-white p-10 rounded-2xl shadow-lg border border-primary/10 text-center flex flex-col items-center">
              <div
                className="w-20 h-20 bg-primary text-white text-3xl font-bold rounded-full flex items-center justify-center mb-8 shadow-lg ring-8 ring-background-light">
                1</div>
              <h3 className="text-2xl font-bold mb-4">Postulación</h3>
              <p className="text-secondary/70">Completa el formulario inicial con los detalles de tu posada y fotografías de
                tus instalaciones.</p>
            </div>
            <div
              className="bg-white p-10 rounded-2xl shadow-lg border border-primary/10 text-center flex flex-col items-center">
              <div
                className="w-20 h-20 bg-primary text-white text-3xl font-bold rounded-full flex items-center justify-center mb-8 shadow-lg ring-8 ring-background-light">
                2</div>
              <h3 className="text-2xl font-bold mb-4">Evaluación</h3>
              <p className="text-secondary/70">Nuestro comité de expertos realizará una auditoría presencial bajo los 50
                parámetros de calidad.</p>
            </div>
            <div
              className="bg-white p-10 rounded-2xl shadow-lg border border-primary/10 text-center flex flex-col items-center">
              <div
                className="w-20 h-20 bg-primary text-white text-3xl font-bold rounded-full flex items-center justify-center mb-8 shadow-lg ring-8 ring-background-light">
                3</div>
              <h3 className="text-2xl font-bold mb-4">Certificación</h3>
              <p className="text-secondary/70">Una vez aprobada la auditoría, recibes tu placa oficial y eres incluido en todo
                el ecosistema del Circuito.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-secondary rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-2/5 p-12 flex flex-col justify-center border-r border-primary/20 bg-secondary">
            <h2 className="text-3xl font-bold mb-6 text-white">¿Listo para dar el paso?</h2>
            <p className="text-white/80 mb-8 text-lg">Déjanos tus datos y un asesor se pondrá en contacto contigo para guiarte
              en el proceso de pre-selección.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="material-icons text-primary">email</span>
                <span className="text-white font-medium">info@circuitodelaexcelencia.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-icons text-primary">phone</span>
                <span className="text-white font-medium">+58 (212) 000-0000</span>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 p-12 bg-white">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wide">Nombre
                    Completo</label>
                  <input className="w-full border-gray-200 rounded-lg p-3 focus:ring-primary focus:border-primary"
                    placeholder="Ej. Juan Pérez" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wide">Nombre de la
                    Posada</label>
                  <input className="w-full border-gray-200 rounded-lg p-3 focus:ring-primary focus:border-primary"
                    placeholder="Nombre comercial" type="text" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wide">Correo
                    Electrónico</label>
                  <input className="w-full border-gray-200 rounded-lg p-3 focus:ring-primary focus:border-primary"
                    placeholder="email@ejemplo.com" type="email" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wide">Ubicación
                    (Estado)</label>
                  <select
                    className="w-full border-gray-200 rounded-lg p-3 focus:ring-primary focus:border-primary text-secondary/60">
                    <option>Seleccionar estado</option>
                    <option>Mérida</option>
                    <option>Falcon</option>
                    <option>Miranda</option>
                    <option>Aragua</option>
                    <option>Otros</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wide">Breve descripción de la
                  propiedad</label>
                <textarea className="w-full border-gray-200 rounded-lg p-3 focus:ring-primary focus:border-primary"
                  placeholder="Cuéntanos un poco sobre tu posada..." rows={4}></textarea>
              </div>
              <button
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-lg transition-all text-lg"
                type="submit">ENVIAR SOLICITUD DE INFORMACIÓN</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}
