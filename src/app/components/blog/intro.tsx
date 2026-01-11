export default function BlogIntro() {
  return (
    <div className="w-full max-w-[1440px] px-4 md:px-6 py-6 @container">
      <div className="relative overflow-hidden rounded-2xl flex flex-col items-center justify-center text-center min-h-[400px] md:min-h-[500px] bg-cover bg-center p-8 gap-8" data-alt="Impresionante vista aérea de los tepuyes venezolanos al amanecer" style={{ backgroundImage: 'linear-gradient(rgba(24, 24, 52, 0.3) 0%, rgba(24, 24, 52, 0.7) 100%), url("/img/roraima.png")' }}>
        <div className="max-w-3xl flex flex-col gap-4 animate-fade-in-up">
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-6xl drop-shadow-lg">
            Blog del Circuito Excelencia
          </h1>
          <h2 className="text-white/90 text-lg font-medium leading-relaxed md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Encontrarás aquí las últimas noticias, articulos y contenido relacionado con el Circuito Excelencia.
          </h2>
        </div>
      </div>
    </div>
    )
};