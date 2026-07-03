import { redirect } from 'next/navigation';
import Link from 'next/link';

interface Dimension {
  icon: string;
  title: string;
  description: string;
}

const DIMENSIONS: Dimension[] = [
  { icon: 'forest', title: 'Áreas Naturales', description: 'Gestión y conservación del entorno.' },
  { icon: 'pets', title: 'Protección de Flora y Fauna', description: 'Respeto y cumplimiento legal.' },
  { icon: 'water_drop', title: 'Gestión del Agua', description: 'Uso eficiente, reutilización y tratamiento.' },
  { icon: 'bolt', title: 'Gestión de Energía', description: 'Ahorro, eficiencia y energías renovables.' },
  { icon: 'delete_outline', title: 'Manejo de Residuos', description: 'Programas integrales de reducción y reciclaje.' },
  { icon: 'eco', title: 'Buenas Prácticas Ambientales', description: 'Infraestructura sostenible y educación.' },
  { icon: 'diversity_3', title: 'Entorno Cultural, Social y Gastronómico', description: 'Integración con la comunidad y promoción local.' },
  { icon: 'recycling', title: 'Manejo de Reciclaje', description: 'Prácticas operativas específicas.' },
];

interface Level {
  stars: number;
  name: string;
  range: string;
  description: string;
}

const LEVELS: Level[] = [
  {
    stars: 1,
    name: 'Iniciación',
    range: '50-70%',
    description: 'Establecimientos con conexión sólida a la naturaleza, pero con oportunidades de mejora en la gestión operativa técnica.',
  },
  {
    stars: 2,
    name: 'Desarrollo',
    range: '71-90%',
    description: 'Posadas con procesos estandarizados y conciencia ambiental consolidada.',
  },
  {
    stars: 3,
    name: 'Consolidación',
    range: '91-100%',
    description: 'Referentes de sostenibilidad que han logrado circularidad en gran parte de su operación.',
  },
];

interface Step {
  icon: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  { icon: 'description', title: 'Autoevaluación', description: 'Las posadas completan un formulario diagnóstico.' },
  { icon: 'fact_check', title: 'Verificación', description: 'Se lleva a cabo una auditoría basada en evidencia (fotografías, videos, documentos, análisis, visitas técnicas o entrevistas) que sustenta las respuestas proporcionadas.' },
  { icon: 'military_tech', title: 'Acreditación', description: 'Al finalizar, la posada recibe un diploma acreditativo, un acrílico de 25x25 cm para su exhibición y un informe detallado de resultados que destaca sus fortalezas y áreas de oportunidad.' },
  { icon: 'monitoring', title: 'Seguimiento', description: 'Una vez otorgado el distintivo en cualquiera de sus escalas, se realizará un seguimiento cada dos años con la intención de medir el progreso alcanzado y la sostenibilidad en el tiempo.' },
];

const PARTNERS = [
  { src: '/img/capacitacion/global.png', alt: 'Global Gateway' },
  { src: '/img/capacitacion/allinvest.png', alt: 'Al-Invest Verde' },
  { src: '/img/capacitacion/ue.png', alt: 'Unión Europea' },
  { src: '/img/capacitacion/banplus.png', alt: 'Banplus' },
];

export default async function DistintivoVerdePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== 'es') {
    redirect('/es/distintivo-verde');
  }

  return (
    <main className="flex-1">
      <section className="relative w-full py-20 lg:py-28 bg-[#1b4332] overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <span className="material-symbols-outlined !text-[220px] text-secondary">eco</span>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-20 flex flex-col items-center text-center gap-8">
          <img
            src="/img/logo.png"
            alt="Distintivo Verde"
            className="w-40 md:w-52 drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          />
          <h1 className="text-white text-4xl lg:text-6xl font-black leading-tight tracking-tight">
            Distintivo Verde
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed max-w-3xl">
            El Distintivo Verde es una herramienta técnica y un instrumento de confianza
            desarrollado por la A.C. Circuito de la Excelencia, diseñado para promover,
            categorizar y diferenciar a las posadas que integran prácticas de sostenibilidad
            ambiental en su operación diaria.
          </p>
          <p className="text-gray-300 text-base leading-relaxed max-w-3xl">
            Este distintivo nació como parte del proyecto &ldquo;Turismo rural sostenible en
            Venezuela: Hacia un nuevo modelo de negocio basado en la economía verde y el
            desarrollo local&rdquo; (2024-2026), contando con el patrocinio de la Unión Europea a
            través de Al-Invest Verde y el apoyo de Banplus Banco Internacional.
          </p>
          <p className="text-gray-300 text-base leading-relaxed max-w-3xl">
            Busca garantizar que las posadas cumplan con estándares rigurosos de gestión
            ambiental, mejorando su desempeño, fortaleciendo su sostenibilidad y elevando su
            competitividad en el mercado turístico responsable. Es un proceso que trasciende la
            calidad hotelera tradicional para centrarse en un compromiso regenerativo con el
            entorno.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-8">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm">
            Aliados del programa
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {PARTNERS.map((partner) => (
              <div key={partner.alt} className="bg-white rounded-xl px-6 py-4 shadow-sm">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">
              Modelo de sostenibilidad
            </span>
            <h2 className="text-primary dark:text-white text-3xl md:text-4xl font-bold tracking-tight mt-2">
              8 Dimensiones Evaluadas
            </h2>
            <p className="text-slate-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              El distintivo se fundamenta en un modelo que evalúa 74 criterios técnicos
              agrupados en 8 dimensiones clave.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIMENSIONS.map((dimension) => (
              <div
                key={dimension.title}
                className="flex flex-col gap-4 bg-white dark:bg-gray-900 p-6 rounded-2xl border-t-4 border-[#1b4332] shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="size-12 rounded-xl bg-[#1b4332] flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-2xl">{dimension.icon}</span>
                </div>
                <h3 className="text-primary dark:text-white font-bold leading-tight">{dimension.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{dimension.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">
              Categorización
            </span>
            <h2 className="text-primary dark:text-white text-3xl md:text-4xl font-bold tracking-tight mt-2">
              Niveles de Reconocimiento
            </h2>
            <p className="text-slate-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Las posadas son categorizadas según su grado de aproximación al modelo de
              sostenibilidad, permitiendo un camino de mejora continua.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEVELS.map((level) => (
              <div
                key={level.stars}
                className="flex flex-col gap-4 bg-slate-50 dark:bg-gray-950 p-8 rounded-2xl border border-slate-200 dark:border-gray-800 text-center"
              >
                <div className="flex justify-center gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      key={i}
                      className={`material-symbols-outlined text-3xl ${i < level.stars ? 'text-secondary' : 'text-slate-300 dark:text-gray-700'}`}
                    >
                      star
                    </span>
                  ))}
                </div>
                <h3 className="text-primary dark:text-white text-xl font-bold">
                  Escala {level.stars} — {level.name}
                </h3>
                <span className="text-secondary font-black text-2xl">{level.range}</span>
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">
              Cómo se obtiene
            </span>
            <h2 className="text-primary dark:text-white text-3xl md:text-4xl font-bold tracking-tight mt-2">
              Proceso de Certificación
            </h2>
            <p className="text-slate-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              La obtención del Distintivo Verde es un proceso riguroso que garantiza la
              seriedad y credibilidad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, index) => (
              <div key={step.title} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-[#1b4332] text-white flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>
                  <span className="material-symbols-outlined text-secondary text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-primary dark:text-white text-lg font-bold">{step.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto bg-[#1b4332] p-12 lg:p-16 rounded-[2.5rem] text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <span className="material-symbols-outlined !text-[150px] text-secondary">eco</span>
          </div>
          <div className="relative z-10">
            <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
              ¿Tienes una posada?
            </h2>
            <p className="text-gray-200 mb-10 max-w-xl mx-auto text-lg">
              Si deseas entrar en este proceso, comunícate con nosotros.
            </p>
            <Link
              href="/es/contacto"
              className="inline-flex items-center gap-3 bg-secondary hover:bg-[#e0b852] text-[#181834] font-black px-8 py-4 rounded-xl transition-all shadow-lg"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
