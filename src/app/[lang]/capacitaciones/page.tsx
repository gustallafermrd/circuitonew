'use client';

import { use } from 'react';
import { redirect } from 'next/navigation';
import { useVideoModal } from '@/app/context/video-modal-context';

interface Module {
  number: number;
  title: string;
  description: string;
  professors: string[];
  vimeoId: string;
  hash: string;
}

const MODULES: Module[] = [
  {
    number: 1,
    title: 'El papel del Turismo ante los retos globales',
    description:
      'Aborda el papel del turismo en los retos globales, destacando la importancia de la economía circular en el sector turístico.',
    professors: ['Prof. Miguel Ángel Jara Santamera'],
    vimeoId: '1050597247',
    hash: '4d976fe7a1',
  },
  {
    number: 2,
    title: 'Gestionando los Impactos del turismo: Estrategias de Economía Circular',
    description:
      'Explora estrategias de economía circular aplicadas al sector turístico y empresarial. Analiza herramientas como el Análisis del Ciclo de Vida (ACV) y el ecodiseño, que permiten reducir el impacto ambiental y optimizar el uso de recursos.',
    professors: ['Prof. Jovita Moreno', 'Prof. Rocío González'],
    vimeoId: '1050597351',
    hash: '09120b0dce',
  },
  {
    number: 3,
    title: 'Gestión de Recursos y Residuos en alojamientos turísticos',
    description:
      'Destaca la importancia de implementar estrategias sostenibles para reducir el impacto ambiental. Se enfoca en la optimización del uso de agua, energía y materiales, promoviendo prácticas de economía circular.',
    professors: ['Prof. Ramón Blazquez'],
    vimeoId: '1050597305',
    hash: '9bc076e8d1',
  },
  {
    number: 4,
    title: 'Sostenibilidad y Conservación Ambiental: Estrategias para un Futuro Verde',
    description:
      'Aborda la sostenibilidad y su relación con la conservación ambiental, enfocándose en el sector turístico.',
    professors: ['Prof. Alejandro Rescia', 'Prof. Sara García'],
    vimeoId: '1062071017',
    hash: 'b123125276',
  },
  {
    number: 5,
    title: 'Huella de Carbono y eficiencia energética en alojamientos turísticos',
    description:
      'Habla sobre la huella de carbono y la eficiencia energética en alojamientos turísticos, destacando la importancia de reducir el impacto ambiental del sector.',
    professors: ['Prof. José Luís de la Cruz'],
    vimeoId: '1050603579',
    hash: '16a723eab9',
  },
  {
    number: 6,
    title: 'Comunicación y marketing de la economía circular en alojamientos turísticos',
    description:
      'Una estrategia que integra prácticas sostenibles en la promoción y comercialización de productos y servicios. Se enfoca en cómo las empresas pueden adoptar enfoques responsables con el medio ambiente para atraer consumidores conscientes.',
    professors: ['Prof. Pedro Turro'],
    vimeoId: '1050597292',
    hash: 'ced400beba',
  },
];

const PARTNERS = [
  { src: '/img/capacitacion/global.png', alt: 'Global Gateway' },
  { src: '/img/capacitacion/allinvest.png', alt: 'Al-Invest Verde' },
  { src: '/img/capacitacion/ue.png', alt: 'Unión Europea' },
  { src: '/img/capacitacion/banplus.png', alt: 'Banplus' },
];

export default function CapacitacionesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(params);
  if (lang !== 'es') {
    redirect('/es/capacitaciones');
  }

  const { openVideo } = useVideoModal();

  return (
    <main className="flex-1">
      <section className="relative w-full py-20 lg:py-28 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <span className="material-symbols-outlined !text-[220px] text-secondary">school</span>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-20 text-center flex flex-col gap-6">
          <h1 className="text-white text-4xl lg:text-6xl font-black leading-tight tracking-tight">
            Formación en Turismo Sostenible para Posadas Venezolanas
          </h1>
          <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
            El Circuito de la Excelencia, en colaboración con Al-Invest Verde, una iniciativa
            financiada por la Unión Europea, y Banplus, se complacen en anunciar el lanzamiento
            de un programa de formación técnica en implantación de medidas de economía circular
            en los alojamientos turísticos.
          </p>
          <p className="text-white/70 text-sm leading-relaxed max-w-2xl mx-auto italic">
            La Fundación Alternativas de España es un think-tank independiente del que el
            Laboratorio de Políticas Públicas forma parte como núcleo más longevo. Como Fundación
            llevamos a nuestras espaldas más de 25 años de experiencia y más de 1.000 informes
            publicados, con la colaboración de un millar de autores, sólo en los últimos 20 años.
            Y es la encargada de la capacitación en todas sus ediciones.
          </p>
          <div className="flex justify-center mt-2">
            <a
              href="https://forms.gle/PUsq8KiscE6geFdq5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-secondary hover:bg-[#e0b852] transition-all text-[#181834] text-lg font-bold shadow-lg shadow-black/20"
            >
              Inscríbete
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-8">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm">
            Aliados del programa
          </span>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {PARTNERS.map((partner) => (
              <img
                key={partner.alt}
                src={partner.src}
                alt={partner.alt}
                className="h-12 md:h-16 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-primary text-3xl md:text-4xl font-bold tracking-tight">
              Módulos de Capacitación
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Seis módulos formativos a cargo de especialistas en turismo sostenible y economía
              circular.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MODULES.map((module) => (
              <div
                key={module.number}
                className="flex flex-col gap-4 bg-white p-8 rounded-2xl border-t-4 border-secondary shadow-sm hover:shadow-xl transition-shadow"
              >
                <span className="text-secondary font-black text-4xl">
                  {String(module.number).padStart(2, '0')}
                </span>
                <h3 className="text-primary text-xl font-bold leading-tight">{module.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  {module.description}
                </p>
                <p className="text-slate-500 text-xs font-medium">
                  {module.professors.join(' · ')}
                </p>
                <button
                  onClick={() =>
                    openVideo({
                      vimeoId: module.vimeoId,
                      hash: module.hash,
                      title: `Módulo ${module.number}: ${module.title}`,
                    })
                  }
                  className="flex items-center justify-center gap-2 rounded-lg h-11 px-6 bg-primary hover:bg-[#25254a] transition-all text-white text-sm font-bold mt-2"
                >
                  <span className="material-symbols-outlined text-lg">play_circle</span>
                  Ver video
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
