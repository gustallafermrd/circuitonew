export default function GiftCard({ dictionary }: { dictionary: any }) {
  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16 md:py-24 flex justify-center border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-[1200px] w-full px-4 md:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary shadow-2xl isolate min-h-[500px] flex items-center">
          {/* Background Ambient Glow */}
          <div className="blur-blob bg-secondary opacity-[.1] pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center p-8 md:p-14 lg:p-20">
            {/* Left Content */}
            <div className="flex flex-col gap-8 text-left">
              <div
                className="mx-auto flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10">
                <span className="material-symbols-outlined text-secondary">redeem</span>
                <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.2em]">{dictionary.badge}</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                  {dictionary.title1}
                </h2>
                <h3 className="text-secondary text-4xl md:text-4xl lg:text-6xl font-black leading-[0.9] tracking-tighter">
                  {dictionary.title2}
                </h3>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed max-w-lg font-light opacity-90">
                {dictionary.description}
              </p>
            </div>

            {/* Right Content - Card Mockup */}
            <div className="relative flex items-center justify-center">
              <img 
                src="/img/cheque-1.png" 
                alt="Gift Card" 
                className="w-full h-auto rounded-[20px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] transform -rotate-2 hover:rotate-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



