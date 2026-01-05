
export default function Comentarios() {
  return (
    <div className="w-full bg-background-light dark:bg-background-dark py-16 flex justify-center">
        <div className="max-w-[1200px] w-full px-4 md:px-6 flex flex-col gap-12">
          <div className="text-center">
            <h2 className="text-text-main dark:text-white text-3xl font-bold mb-4">Experiencias de Huéspedes</h2>
            <p className="text-gray-600 dark:text-gray-400">Escucha a los viajeros que han descubierto la magia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="flex gap-1 text-secondary mb-4">
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-6">"El Circuito de la Excelencia me ofrece 29 razones para soñar"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden"
                  data-alt="Portrait of a smiling woman"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAIG9j8DYTJZQKPfyfMvA5XaMCDKDOjKqhZc1dYVoP1gNWBU7KaFSdkZ5Ke5kF2GBMZvDCENKIlofajvR777GEDZZGXj5EU0AczlduQKSz4-FC3pMXTJCcJtcAksa6IPiP3XsCrFy0g1HWH9KTz1sQ6uJZNd_iQF2ekrGChD2PebnCZX57F06ENRKiT72Y7XumN_qjuvXfVfZHgVY-KyngM67FNMgIPGNn3gJU7D4CBm7kt2-KwaJamud2HRvRvb5vQel1SWeqlqa0"); background-size: cover'}}>
                </div>
                <div>
                  <p className="text-sm font-bold text-text-main dark:text-white">Eyla Adrián</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="flex gap-1 text-secondary mb-4">
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-6">"El circuito de la Excelencia es una reunión de almas que creen y crean."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden"
                  data-alt="Portrait of a man with glasses"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBryUE5QicMCg2-PtU0Xns7TcRTWtJDkC83WK5M0gdsORcbejiKbnn8Lc-V44qYFGz58tGrjvwYfaM-iOa4ROgb2xCDerGpaAWVkiSDcICoR5UMmWrrnkr9Ltzrv8CVqb73GkAuBfnlSsqc3jh_OaxkZGrpvQTHPzTQ42ZTqKa_5RHug-Zb7H9BpL7ISxXR6iAMWdDCE5nRdlEImukjAgaqCdT8bOf03qwwgBkD778cqteBj1GN8bzLf3NNrj4cxAbcCmGv7cyOxBM"); background-size: cover'}}>
                </div>
                <div>
                  <p className="text-sm font-bold text-text-main dark:text-white">Mérida Motta</p>
                </div>
              </div>
            </div>
            <div
              className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hidden lg:block">
              <div className="flex gap-1 text-secondary mb-4">
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-6">"Las posadas del Circuito son excelencia, calidez, humanidad y hogar , sin duda es el destino de Rodando en Familia por Venezuela en cada uno de los estados que recorremos."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden"
                  data-alt="Portrait of a young woman hiking"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBMjP5yzVvn48F07WvvVaadHj7G6XwVzRRFmlCLsgzJhv8IaOqj71nM_SjNu5RIeyKiyXCGrGHUW_PxRafF51CwKwKe5fBVnltyoI_4o810svAeZYODVwKgRjnuNymX68xACCs6PemOKLA4IAijQBchn7oyJsyJLc0rxRQgpFCGDKKQZyws3Ti3PNcwsJfoVXCCQcrXqdFXEFaCLohfxm1WGCiu9z30odQF_xD3sa5Ksg7mMDL00X8Dx8_4CbiU1QsdfV0O4znQfrg"); background-size: cover'}}>
                </div>
                <div>
                  <p className="text-sm font-bold text-text-main dark:text-white">Anabella Guzmán</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}