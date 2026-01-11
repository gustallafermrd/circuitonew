export default function Intro({ dictionary }: { dictionary: any }) {
  return (
    <div className="w-full max-w-[960px] px-4 py-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 text-center items-center">
        <h2 className="text-text-main dark:text-white text-3xl md:text-4xl font-bold leading-tight">
          {dictionary.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
          {dictionary.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div
            className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary dark:text-secondary">
            <span className="material-symbols-outlined text-[28px]">verified</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-text-main dark:text-white text-lg font-bold">{dictionary.quality.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {dictionary.quality.description}
            </p>
          </div>
        </div>
        <div
          className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div
            className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary dark:text-secondary">
            <span className="material-symbols-outlined text-[28px]">handshake</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-text-main dark:text-white text-lg font-bold">{dictionary.hospitality.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {dictionary.hospitality.description}
            </p>
          </div>
        </div>
        <div
          className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div
            className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary dark:text-secondary">
            <span className="material-symbols-outlined text-[28px]">location_on</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-text-main dark:text-white text-lg font-bold">{dictionary.locations.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {dictionary.locations.description}
            </p>
          </div>
        </div>
      </div>
</div>
  );
}