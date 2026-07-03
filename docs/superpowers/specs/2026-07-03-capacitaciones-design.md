# Capacitaciones page — design

## Purpose

Recreate the training/courses content currently hosted at
`https://circuitodelaexcelencia.com/capacitaciones` as a native page inside
this Next.js site, styled consistently with existing pages (`quienes-somos`,
`sello-de-calidad`), and replace the footer's external link to
`capacitacion.circuitodelaexcelencia.com` with an internal link.

## Scope

- New route: `src/app/[lang]/capacitaciones/page.tsx`.
- Spanish-only content. Visiting `/en/capacitaciones` redirects to
  `/es/capacitaciones` (via `next/navigation` `redirect()`). Content is
  hardcoded in the page component — no `dictionaries` entries needed, since
  it doesn't vary by language (matches the existing footer behavior where
  the "Capacitaciones" link is only rendered when `lang === 'es'`).
- Reusable video modal (Vimeo), following the same context+global-component
  pattern already used for the Google Maps modal (`map-modal-context.tsx` /
  `map-modal.tsx`).
- Footer link update: `src/app/components/footer.tsx` — the "Capacitaciones"
  list item changes from the external subdomain URL to
  `href={`/${lang}/capacitaciones`}` (still only rendered when `lang === 'es'`,
  and can drop `target="_blank"` since it's now an internal route).

## Content (extracted from source page)

**Hero**
- Title: "Formación en Turismo Sostenible para Posadas Venezolanas"
- Description: "El Circuito de la Excelencia, en colaboración con Al-Invest
  Verde, una iniciativa financiada por la Unión Europea, y Banplus, se
  complacen en anunciar el lanzamiento de un programa de formación técnica
  en implantación de medidas de economía circular en los alojamientos
  turísticos."
- Note on the training provider: "La Fundación Alternativas de España es un
  think-tank independiente... Y es la encargada de la capacitación en todas
  sus ediciones."
- CTA button: "Inscríbete" → `https://forms.gle/PUsq8KiscE6geFdq5`
  (`target="_blank" rel="noopener noreferrer"`).

**Sponsor/partner logos** (already downloaded to
`public/img/capacitacion/{global,allinvest,ue,banplus}.png`):
Global Gateway, Al-Invest Verde, Unión Europea, Banplus.

**6 training modules** (title, description, professor(s), Vimeo id + hash):

1. Módulo 1: El papel del Turismo ante los retos globales — "Aborda el papel
   del turismo en los retos globales, destacando la importancia de la
   economía circular en el sector turístico." — Prof. Miguel Ángel Jara
   Santamera. Vimeo `1050597247` / h=`4d976fe7a1`.
2. Módulo 2: Gestionando los Impactos del turismo: Estrategias de Economía
   Circular — "Explora estrategias de economía circular aplicadas al sector
   turístico y empresarial. Analiza herramientas como el Análisis del Ciclo
   de Vida (ACV) y el ecodiseño..." — Prof. Jovita Moreno, Prof. Rocío
   González. Vimeo `1050597351` / h=`09120b0dce`.
3. Módulo 3: Gestión de Recursos y Residuos en alojamientos turísticos —
   "Destaca la importancia de implementar estrategias sostenibles para
   reducir el impacto ambiental. Se enfoca en la optimización del uso de
   agua, energía y materiales..." — Prof. Ramón Blazquez. Vimeo `1050597305`
   / h=`9bc076e8d1`.
4. Módulo 4: Sostenibilidad y Conservación Ambiental: Estrategias para un
   Futuro Verde — "Aborda la sostenibilidad y su relación con la
   conservación ambiental, enfocándose en el sector turístico." — Prof.
   Alejandro Rescia, Prof. Sara García. Vimeo `1062071017` / h=`b123125276`.
5. Módulo 5: Huella de Carbono y eficiencia energética en alojamientos
   turísticos — "Habla sobre la huella de carbono y la eficiencia energética
   en alojamientos turísticos, destacando la importancia de reducir el
   impacto ambiental del sector." — Prof. José Luís de la Cruz. Vimeo
   `1050603579` / h=`16a723eab9`.
6. Módulo 6: Comunicación y marketing de la economía circular en
   alojamientos turísticos — "Una estrategia que integra prácticas
   sostenibles en la promoción y comercialización de productos y servicios.
   Se enfoca en cómo las empresas pueden adoptar enfoques responsables con
   el medio ambiente para atraer consumidores conscientes." — Prof. Pedro
   Turro. Vimeo `1050597292` / h=`ced400beba`.

## Page structure

1. **Hero** — gradient banner in brand colors (primary/secondary), title,
   description, provider note, "Inscríbete" CTA button. Follows the visual
   language of `quienes-somos`'s hero section (dark overlay look, centered
   text) but without a background photo (none available for this topic) —
   uses a `bg-primary` gradient instead, similar to the CTA block style in
   `sello-de-calidad`.
2. **Partners row** — the 4 logos in a centered flex/grid row, grayscale or
   plain, under a small "Aliados del programa" label.
3. **Modules grid** — `grid md:grid-cols-2 lg:grid-cols-3 gap-8`, one card
   per module: number badge, title, description, professor(s), and a "Ver
   video" button (play icon) that calls `openModal(vimeoId, hash, title)`
   from the video modal context.
4. **Video modal** — fullscreen overlay matching `map-modal.tsx`'s
   look (close button, click-outside-to-close), with a Vimeo iframe
   `src="https://player.vimeo.com/video/{id}?h={hash}&title=0&byline=0&portrait=0"`.

## Implementation notes

- `src/app/context/video-modal-context.tsx`: `VideoModalProvider` /
  `useVideoModal()`, state holds `{ vimeoId, hash, title } | null` instead of
  a boolean, so the modal component knows which video to render.
- `src/app/components/video-modal.tsx`: global modal, mounted once in
  `src/app/[lang]/layout.tsx` next to `MapModal`, wrapped by the same
  `Providers` tree (add `VideoModalProvider` inside `providers.tsx` next to
  `MapModalProvider`).
- Module data lives as a local `const modules = [...]` array inside the
  capacitaciones page component (no need for a separate data file given the
  content is static and page-specific).
- No new dependencies required.

## Out of scope

- No changes to `dictionaries/es.json` or `dictionaries/en.json`.
- No navbar changes (only the footer link is updated, matching current
  `lang === 'es'`-gated behavior).
- No admin/CMS integration — content is static, matching how the source
  page's module content rarely changes.
