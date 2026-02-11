
import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";
import styles from "./timeline.module.css";

export default async function QuienesSomosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as 'en' | 'es');

  return (
    <>
    <div
      className="relative flex flex-col justify-center items-center min-h-[450px] w-full bg-cover bg-center bg-no-repeat p-8"
      style={{ backgroundImage: 'linear-gradient(rgba(24, 24, 52, 0.75) 0%, rgba(24, 24, 52, 0.6) 100%), url("/img/sobre-nosotros.png")' }}>
        
      <div className="flex flex-col gap-6 text-center max-w-[850px]">
        <h1 className="text-white text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          ¿Quiénes Somos?
        </h1>
        <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        <p className="text-white/90 text-lg font-medium leading-relaxed md:text-2xl max-w-[750px] mx-auto italic">
          "Unidos por la Pasión de Servir y el Compromiso con la Calidad,
        </p>
        <p className="text-white/90 text-lg font-medium leading-relaxed md:text-2xl max-w-[750px] mx-auto italic">Con Alma de Anfitriones."</p>
      </div>
    </div>
    <section className="flex flex-col items-center px-6 py-20 lg:px-40 bg-white">
      <div className="max-w-[1000px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <span className="text-secondary font-bold uppercase text-sm">Nuestra Historia</span>
          <h2 className="text-primary text-3xl font-bold md:text-4xl">
            Compromiso con la Hospitalidad Venezolana
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed text-justify">
            El <strong className="text-primary font-bold">Circuito de la Excelencia</strong> es una Asociación Civil sin fines de lucro que agrupa a un selecto grupo de posadas en Venezuela. Nacimos con el firme propósito de elevar los estándares de servicio y hospitalidad en el país, ofreciendo a los viajeros experiencias auténticas garantizadas por un riguroso sistema de gestión.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed text-justify">
            Nuestra red no solo representa alojamiento; representa una cultura de calidad que se vive en cada rincón de nuestras posadas asociadas, desde los Andes hasta las costas caribeñas.
          </p>
        </div>
        <div className="relative">
          <img alt="Fachada tradicional" className="rounded-2xl shadow-2xl z-10 relative object-cover h-[400px] w-full"
            src="/img/quienes-somos.webp" />
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-secondary rounded-2xl -z-0"></div>
        </div>
      </div>
    </section>
    <section className="flex flex-col px-6 py-20 lg:px-40 bg-slate-50">
      <div className="max-w-[1100px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="flex flex-col gap-6 rounded-2xl bg-white p-10 shadow-md border-t-4 border-secondary">
            <div className="size-16 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-outlined text-4xl">flag</span>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-primary text-2xl font-bold">Nuestra Misión</h3>
              <p className="text-slate-600 text-lg leading-relaxed italic">
                "Promover y fortalecer la hospitalidad de excelencia en Venezuela, a través de una red de posadas que
                operan bajo un sistema de gestión de calidad, impulsando el desarrollo sostenible y la valoración de
                nuestra cultura."
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-2xl bg-white p-10 shadow-md border-t-4 border-secondary">
            <div className="size-16 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-outlined text-4xl">auto_awesome</span>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-primary text-2xl font-bold">Nuestra Visión</h3>
              <p className="text-slate-600 text-lg leading-relaxed italic">
                "Ser el referente nacional e internacional de la hospitalidad venezolana de alta calidad, reconocidos
                por la calidez del servicio, la autenticidad de nuestras experiencias y el compromiso inquebrantable con
                la excelencia turística."
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-brand-navy text-3xl font-bold">Valores que nos Guían</h2>
          <div className="h-1 w-16 bg-secondary mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:translate-y-[-5px] transition-transform">
            <span className="material-symbols-outlined text-secondary text-4xl mb-4">verified</span>
            <h4 className="font-bold text-primary mb-2">Calidad</h4>
            <p className="text-slate-500 text-sm">Buscamos la perfección en cada detalle del servicio.</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:translate-y-[-5px] transition-transform">
            <span className="material-symbols-outlined text-secondary text-4xl mb-4">groups</span>
            <h4 className="font-bold text-primary mb-2">Unidad</h4>
            <p className="text-slate-500 text-sm">Fortaleza a través de la cooperación entre posaderos.</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:translate-y-[-5px] transition-transform">
            <span className="material-symbols-outlined text-secondary text-4xl mb-4">temple_buddhist</span>
            <h4 className="font-bold text-primary mb-2">Identidad</h4>
            <p className="text-slate-500 text-sm">Orgullo por nuestras raíces y cultura local.</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:translate-y-[-5px] transition-transform">
            <span className="material-symbols-outlined text-secondary text-4xl mb-4">eco</span>
            <h4 className="font-bold text-primary mb-2">Sostenibilidad</h4>
            <p className="text-slate-500 text-sm">Respeto por el entorno y desarrollo local.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="flex flex-col px-6 py-24 lg:px-40 bg-white">
      <div className="max-w-[1000px] mx-auto w-full">
        <div className="text-center mb-20">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm">Hitos Clave</span>
          <h2 className="text-primary text-4xl font-bold mt-2">Nuestra Trayectoria</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Un recorrido de esfuerzo y pasión por construir el mejor
            rostro del turismo en Venezuela.</p>
        </div>
        <div className={`relative ${styles.timelineLine} space-y-24`}>
          <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
            <div className="md:w-[42%] mb-8 md:mb-0">
              <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-secondary shadow-sm text-right">
                <span className="text-secondary font-extrabold text-3xl block mb-2">2004</span>
                <h3 className="text-primary text-xl font-bold mb-3">La Fundación</h3>
                <p className="text-slate-600 leading-relaxed">
                  El Circuito nace por la visión de <strong className="text-primary">5 posaderos pioneros</strong> decididos a unirse para profesionalizar el sector y ofrecer una propuesta de valor diferenciada.
                </p>
              </div>
            </div>
            <div
              className="absolute left-[-20px] md:left-1/2 md:ml-[-24px] z-10 size-12 rounded-full bg-secondary border-4 border-white shadow-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white">handshake</span>
            </div>
            <div className="md:w-[42%]"></div>
          </div>
          <div className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full">
            <div className="md:w-[42%] mb-8 md:mb-0">
              <div className="bg-primary p-8 rounded-2xl border-r-4 border-secondary shadow-sm text-left">
                <span className="text-secondary font-extrabold text-3xl block mb-2">Evolución</span>
                <h3 className="text-white text-xl font-bold mb-3">Modelo de Gestión de Calidad</h3>
                <p className="text-slate-300 leading-relaxed">
                  Desarrollamos e implementamos un <strong className="text-white">Sistema de Gestión de Calidad
                    (SGC)</strong> propio, único en el país, que garantiza estándares internacionales en todas nuestras
                  posadas asociadas.
                </p>
              </div>
            </div>
            <div
              className="absolute left-[-20px] md:left-1/2 md:ml-[-24px] z-10 size-12 rounded-full bg-primary border-4 border-white shadow-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary">analytics</span>
            </div>
            <div className="md:w-[42%]"></div>
          </div>
          <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
            <div className="md:w-[42%] mb-8 md:mb-0">
              <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-secondary shadow-sm text-right">
                <span className="text-secondary font-extrabold text-3xl block mb-2">Actualidad</span>
                <h3 className="text-primary text-xl font-bold mb-3">Consolidación y Referencia</h3>
                <p className="text-slate-600 leading-relaxed">
                  Hoy somos el <strong className="text-primary">referente indiscutible de hospitalidad en
                    Venezuela</strong>, conectando a viajeros con las experiencias más auténticas y exclusivas de
                  nuestra geografía.
                </p>
              </div>
            </div>
            <div
              className="absolute left-[-20px] md:left-1/2 md:ml-[-24px] z-10 size-12 rounded-full bg-secondary border-4 border-white shadow-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">star_rate</span>
            </div>
            <div className="md:w-[42%]"></div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-primary py-16 px-6 lg:px-40 overflow-hidden relative">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="md:w-1/3 flex justify-center">
          <div
            className="size-48 rounded-full border-4 border-dashed border-secondary flex flex-col items-center justify-center text-center p-4">
            <span className="material-symbols-outlined text-secondary text-6xl mb-2">verified_user</span>
            <span className="text-white font-bold text-sm">CALIDAD CERTIFICADA</span>
          </div>
        </div>
        <div className="md:w-2/3 text-white">
          <h2 className="text-3xl font-bold mb-6">¿Qué es un Asociado Junior?</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Un Asociado Junior es una posada que se ha incorporado recientemente a nuestro Circuito. Actualmente, se
            encuentra en proceso de adaptación a nuestra Norma Técnica. El estatus de Asociado Junior tiene una duración
            aproximada de un año.
          </p>
        </div>
      </div>
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
        <span className="material-symbols-outlined !text-[150px] text-white">hotel_class</span>
      </div>
    </section>
    <div className="w-full bg-white text-brand-navy px-6 py-20 lg:px-40">
      <div className="max-w-[960px] mx-auto flex flex-col items-center text-center gap-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Viviendo la Excelencia</h2>
        <p className="text-slate-600 max-w-2xl text-lg md:text-xl">
          Le invitamos a descubrir el encanto de Venezuela a través de nuestros ojos. Una experiencia que trasciende el
          alojamiento.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href={`/${lang}/posadas`}
            className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary hover:bg-[#25254a] text-white text-lg font-bold transition-all shadow-xl">
            Explorar Posadas
          </Link>
          <Link
            href={`/${lang}/contacto`}
            className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white text-lg font-bold transition-all">
            Contáctanos
          </Link>
        </div>
      </div>
    </div>
  </>
  );
}
