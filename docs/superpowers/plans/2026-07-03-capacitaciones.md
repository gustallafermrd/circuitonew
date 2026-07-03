# Capacitaciones Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Recreate the external `circuitodelaexcelencia.com/capacitaciones` page as a native, site-styled page at `/[lang]/capacitaciones`, with a reusable video modal for the 6 Vimeo module videos, and point the footer's "Capacitaciones" link at the new internal route.

**Architecture:** A new App Router page (`src/app/[lang]/capacitaciones/page.tsx`) renders hardcoded Spanish content (hero, partner logos, 6 module cards). A generic video-modal context/component pair — mirroring the existing `map-modal-context.tsx` / `map-modal.tsx` pattern — is mounted once in the `[lang]` layout so any page can trigger a Vimeo video overlay. The footer's courses link is updated to point internally.

**Tech Stack:** Next.js 15 App Router, React 19 (client components use `'use client'`), TypeScript, Tailwind CSS. No test runner is configured in this repo (`package.json` has no `test` script) — verification is done via `npx tsc --noEmit`, `npm run lint`, and manual checks against the running dev server (`npm run dev`).

## Global Constraints

- Spanish-only page: visiting `/en/capacitaciones` must redirect to `/es/capacitaciones` via `next/navigation`'s `redirect()`.
- No new npm dependencies.
- No changes to `dictionaries/es.json` or `dictionaries/en.json`.
- No navbar changes — only the footer link changes, and only for `lang === 'es'` (matches existing gating already in `footer.tsx`).
- Follow existing code style: functional components, Tailwind utility classes, `material-symbols-outlined` for icons, `bg-primary` / `text-secondary` brand colors (see `tailwind` usage in `src/app/[lang]/quienes-somos/page.tsx` and `src/app/[lang]/sello-de-calidad/page.tsx`).
- Partner logo images already exist at `public/img/capacitacion/{global,allinvest,ue,banplus}.png` (downloaded and committed in a prior step — do not re-download).

---

### Task 1: Generic video modal (context + component), wired into the app

**Files:**
- Create: `src/app/context/video-modal-context.tsx`
- Create: `src/app/components/video-modal.tsx`
- Modify: `src/app/providers.tsx`
- Modify: `src/app/[lang]/layout.tsx`

**Interfaces:**
- Consumes: nothing from other tasks.
- Produces:
  - `useVideoModal()` hook exporting `{ video: { vimeoId: string; hash: string; title: string } | null; openVideo: (video: { vimeoId: string; hash: string; title: string }) => void; closeVideo: () => void }`.
  - `<VideoModalProvider>` component (wraps children, same shape as `MapModalProvider`).
  - `<VideoModal />` component (default export), renders `null` when no video is open.
  - Task 2 will call `useVideoModal().openVideo({ vimeoId, hash, title })` from module card buttons.

- [ ] **Step 1: Create the video modal context**

Create `src/app/context/video-modal-context.tsx`:

```tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export interface VideoModalVideo {
  vimeoId: string;
  hash: string;
  title: string;
}

interface VideoModalContextValue {
  video: VideoModalVideo | null;
  openVideo: (video: VideoModalVideo) => void;
  closeVideo: () => void;
}

const VideoModalContext = createContext<VideoModalContextValue | undefined>(undefined);

export function VideoModalProvider({ children }: { children: ReactNode }) {
  const [video, setVideo] = useState<VideoModalVideo | null>(null);

  const openVideo = (nextVideo: VideoModalVideo) => setVideo(nextVideo);
  const closeVideo = () => setVideo(null);

  return (
    <VideoModalContext.Provider value={{ video, openVideo, closeVideo }}>
      {children}
    </VideoModalContext.Provider>
  );
}

export function useVideoModal() {
  const context = useContext(VideoModalContext);
  if (!context) {
    throw new Error('useVideoModal must be used within a VideoModalProvider');
  }
  return context;
}
```

- [ ] **Step 2: Create the video modal component**

Create `src/app/components/video-modal.tsx`:

```tsx
'use client';

import { useVideoModal } from '@/app/context/video-modal-context';

export default function VideoModal() {
  const { video, closeVideo } = useVideoModal();

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={closeVideo}
    >
      <div
        className="relative w-[90vw] max-w-4xl aspect-video bg-black rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeVideo}
          className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg transition-colors"
          aria-label="Cerrar video"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Vimeo Iframe */}
        <iframe
          src={`https://player.vimeo.com/video/${video.vimeoId}?h=${video.hash}&title=0&byline=0&portrait=0`}
          className="w-full h-full border-0"
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          title={video.title}
          allowFullScreen
        />
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Wrap the app in `VideoModalProvider`**

In `src/app/providers.tsx`, add `VideoModalProvider` alongside the existing `MapModalProvider`:

```tsx
'use client';

import { ThemeProvider } from 'next-themes';
import { MapModalProvider } from './context/map-modal-context';
import { VideoModalProvider } from './context/video-modal-context';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MapModalProvider>
        <VideoModalProvider>{children}</VideoModalProvider>
      </MapModalProvider>
    </ThemeProvider>
  );
}
```

- [ ] **Step 4: Mount `<VideoModal />` in the layout**

In `src/app/[lang]/layout.tsx`, import and render `VideoModal` next to `MapModal`:

```tsx
import MapModal from "../components/map-modal";
import VideoModal from "../components/video-modal";
```

```tsx
        <Providers>
          <Navbar lang={lang} />
          {children}
          <Footer lang={lang} dictionary={dictionary} />
          <MapModal />
          <VideoModal />
        </Providers>
```

- [ ] **Step 5: Type-check**

Run: `npx tsc --noEmit`
Expected: no output (no errors).

- [ ] **Step 6: Commit**

```bash
git add src/app/context/video-modal-context.tsx src/app/components/video-modal.tsx src/app/providers.tsx "src/app/[lang]/layout.tsx"
git commit -m "$(cat <<'EOF'
Add reusable video modal for Vimeo embeds

Mirrors the existing map-modal context/component pattern so any page
can trigger a Vimeo video overlay via useVideoModal().openVideo().

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 2: Capacitaciones page

**Files:**
- Create: `src/app/[lang]/capacitaciones/page.tsx`

**Interfaces:**
- Consumes: `useVideoModal` from `@/app/context/video-modal-context` (Task 1) — calls `openVideo({ vimeoId, hash, title })`.
- Produces: the `/[lang]/capacitaciones` route. Task 3 links to `` `/${lang}/capacitaciones` ``.

- [ ] **Step 1: Create the page component**

Create `src/app/[lang]/capacitaciones/page.tsx`:

```tsx
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
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no output (no errors).

- [ ] **Step 3: Lint**

Run: `npm run lint`
Expected: no errors (warnings for `<img>` vs `next/image` are acceptable — the rest of the codebase already uses raw `<img>` tags for content images, e.g. `quienes-somos/page.tsx`).

- [ ] **Step 4: Manual verification against the dev server**

Run: `npm run dev` (if not already running), then:
- Visit `http://localhost:3000/es/capacitaciones` — confirm hero, partner logos, and 6 module cards render.
- Click "Ver video" on any module card — confirm the video modal opens with the correct Vimeo embed and closes via the X button or clicking outside.
- Visit `http://localhost:3000/en/capacitaciones` — confirm it redirects to `/es/capacitaciones`.

- [ ] **Step 5: Commit**

```bash
git add "src/app/[lang]/capacitaciones/page.tsx"
git commit -m "$(cat <<'EOF'
Add native capacitaciones page

Recreates the training program content and 6 module videos from the
external capacitaciones page, styled to match quienes-somos and
sello-de-calidad. Spanish-only; /en/capacitaciones redirects to /es.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 3: Update footer link

**Files:**
- Modify: `src/app/components/footer.tsx:45`

**Interfaces:**
- Consumes: the `/[lang]/capacitaciones` route from Task 2.
- Produces: nothing consumed by later tasks (final task in this plan).

- [ ] **Step 1: Change the footer link to point internally**

In `src/app/components/footer.tsx`, replace line 45:

```tsx
                <li><Link className="hover:text-white transition-colors" href="https://capacitacion.circuitodelaexcelencia.com/" target="_blank" rel="noopener noreferrer">{t.navigation.courses}</Link></li>
```

with:

```tsx
                <li><Link className="hover:text-white transition-colors" href={`/${lang}/capacitaciones`}>{t.navigation.courses}</Link></li>
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no output (no errors).

- [ ] **Step 3: Manual verification**

With `npm run dev` running, visit `http://localhost:3000/es` and click "Capacitaciones" in the footer — confirm it navigates to `/es/capacitaciones` in the same tab (no longer opens a new tab to the external subdomain).

- [ ] **Step 4: Commit**

```bash
git add src/app/components/footer.tsx
git commit -m "$(cat <<'EOF'
Point footer Capacitaciones link at the new internal page

Replaces the external capacitacion.circuitodelaexcelencia.com link
now that the content is served natively at /es/capacitaciones.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```
