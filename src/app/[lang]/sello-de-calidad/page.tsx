import { getDictionary } from "@/lib/get-dictionary";
import Image from "next/image";

export default async function SelloCalidadPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main className="flex-1">
      <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-background-soft">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
          <Image className="w-full h-full object-cover opacity-20" data-alt="Luxury tropical inn building at sunset"
            src="/img/sello-de-calidad.png" alt="Sello de Calidad" width={1920} height={1080} />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-brand-navy text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              Garantía de <br /><span className="text-secondary">Excelencia</span> Turística
            </h1>
            <p className="text-text-muted text-lg lg:text-xl max-w-xl leading-relaxed">
              El Sello de Calidad es la máxima distinción otorgada a las posadas que cumplen con los más rigurosos
              estándares de servicio y hospitalidad en Venezuela.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div
                className="absolute -inset-4 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-700">
              </div>
              <div className="relative w-64 h-64 lg:w-96 lg:h-96 flex items-center justify-center">
                <div className="absolute inset-0 border-[12px] border-secondary/10 rounded-full"></div>
                <div className="absolute inset-4 border-2 border-secondary/20 rounded-full border-dashed"></div>
                <div
                  className="bg-gradient-to-br from-secondary via-[#e9c46a] to-secondary p-12 rounded-full shadow-2xl flex flex-col items-center justify-center text-center">
                  <span className="material-symbols-outlined text-brand-navy text-6xl lg:text-8xl mb-2">verified_user</span>
                  <span
                    className="text-brand-navy font-black text-xl lg:text-2xl uppercase leading-tight tracking-tighter">Sello
                    de<br />Calidad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center mb-16">
          <h2 className="text-brand-navy text-4xl font-bold mb-4 tracking-tight">Nuestro Modelo de Gestión</h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Evaluamos rigurosamente cuatro dimensiones fundamentales para asegurar que cada detalle de su estadía sea
            excepcional.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="group bg-white border border-gray-300 p-8 rounded-3xl hover:border-secondary/50 transition-all duration-300 shadow-soft hover:shadow-xl">
            <div
              className="size-16 mb-6 rounded-2xl bg-primary flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">business_center</span>
            </div>
            <h3 className="text-primary text-xl font-bold mb-3">Gestión del Negocio</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Aseguramos una base empresarial sólida, visión estratégica y sostenibilidad para garantizar la permanencia
              del servicio.
            </p>
          </div>
          <div
            className="group bg-white border border-gray-300 p-8 rounded-3xl hover:border-secondary/50 transition-all duration-300 shadow-soft hover:shadow-xl">
            <div
              className="size-16 mb-6 rounded-2xl bg-primary flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">volunteer_activism</span>
            </div>
            <h3 className="text-primary text-xl font-bold mb-3">Gestión del Servicio</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Atención personalizada, calidez humana y procesos eficientes diseñados para superar las expectativas del
              huésped.
            </p>
          </div>
          <div
            className="group bg-white border border-gray-300 p-8 rounded-3xl hover:border-secondary/50 transition-all duration-300 shadow-soft hover:shadow-xl">
            <div
              className="size-16 mb-6 rounded-2xl bg-primary flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">home_work</span>
            </div>
            <h3 className="text-primary text-xl font-bold mb-3">Gestión de la Instalación</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Mantenimiento impecable, estética de alto nivel y confort en cada espacio físico de nuestras posadas
              asociadas.
            </p>
          </div>
          <div
            className="group bg-white border border-gray-300 p-8 rounded-3xl hover:border-secondary/50 transition-all duration-300 shadow-soft hover:shadow-xl">
            <div
              className="size-16 mb-6 rounded-2xl bg-primary flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">eco</span>
            </div>
            <h3 className="text-primary text-xl font-bold mb-3">Gestión Ambiental</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Compromiso firme con la preservación del entorno natural y el desarrollo social de las comunidades
              locales.
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 relative bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img className="w-full h-full object-cover" data-alt="Detail of a luxury bed with high-quality linens"
              src="/img/por-que.png" />
            <div
              className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-lg">
              <p className="text-brand-navy font-bold italic">"La calidad no es un accidente, es siempre el resultado de un
                esfuerzo de la inteligencia."</p>
              <p className="text-text-muted text-sm mt-2 font-medium">— Estándar del Circuito</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-brand-navy text-4xl font-bold tracking-tight">¿Por qué elegir una posada con Sello de
              Calidad?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-secondary text-3xl shrink-0">check_circle</span>
                <div>
                  <h4 className="text-brand-navy font-bold text-lg">Confianza Garantizada</h4>
                  <p className="text-text-muted">Sabes exactamente qué esperar: estándares internacionales aplicados
                    localmente.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-secondary text-3xl shrink-0">check_circle</span>
                <div>
                  <h4 className="text-brand-navy font-bold text-lg">Seguridad y Respaldo</h4>
                  <p className="text-text-muted">Posadas que operan legalmente y cumplen con todas las normativas de
                    seguridad y salud.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-secondary text-3xl shrink-0">check_circle</span>
                <div>
                  <h4 className="text-brand-navy font-bold text-lg">Turismo Sostenible</h4>
                  <p className="text-text-muted">Tu visita contribuye positivamente al ambiente y a la economía local.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-secondary text-3xl shrink-0">check_circle</span>
                <div>
                  <h4 className="text-primary font-bold text-lg">Experiencias Únicas</h4>
                  <p className="text-text-muted">Cada posada es singular, pero todas comparten el mismo nivel de excelencia
                    en el trato.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-white">
        <div
          className="max-w-4xl mx-auto bg-primary p-12 lg:p-16 rounded-[2.5rem] text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <span className="material-symbols-outlined !text-[150px] text-secondary">verified</span>
          </div>
          <div className="relative z-10">
            <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">¿Tu posada tiene lo necesario?</h2>
            <p className="text-gray-300 mb-10 max-w-xl mx-auto text-lg">Únete al grupo élite de la hospitalidad venezolana. Solicita hoy mismo la información para iniciar tu proceso de certificación.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-primary sm:w-80"
                placeholder="Tu correo electrónico" type="email" />
              <button
                className="bg-secondary text-white font-black px-8 py-4 rounded-xl hover:bg-secondary/90 transition-all shadow-lg shadow-primary/20">Solicitar
                Información</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
