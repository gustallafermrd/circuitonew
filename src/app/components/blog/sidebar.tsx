export default function Sidebar() {
    return (
      <div className="relative flex flex-col max-w-[350px] pl-6">
        <div className="sticky top-28 w-full">
          <div className="rounded-xl border border-primary/10 dark:border-white/10 shadow-xl p-6 bg-white dark:bg-[#1e2a22]">
            <div className="mb-6 border-b border-primary/10 pb-4">
              <h3 className="text-2xl font-bold text-primary dark:text-white">Contáctanos</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Reserva directamente con la posada para obtener la mejor atención.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}