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
                <h3 className="text-secondary text-5xl md:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
                  {dictionary.title2}
                </h3>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed max-w-lg font-light opacity-90">
                {dictionary.description}
              </p>
            </div>

            {/* Right Content - Card Mockup */}
            <div className="relative flex items-center justify-center">
              {/* Card Surface Glow */}
              <div className="absolute bg-secondary bg-opacity-[.1] rounded-full pointer-events-none"></div>
              
              {/* PVC Card */}
              <div
                className="relative w-full aspect-[1.58/1] rounded-[20px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] transform -rotate-2 hover:rotate-0 transition-all duration-700 overflow-hidden">
                
                {/* Surface Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-40 pointer-events-none"></div>
                
                <div className="relative h-full flex flex-col justify-between p-7 z-10">
                  {/* Card Header */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <span className="text-white font-bold text-[12px] uppercase opacity-70">{dictionary.brand}</span>
                    </div>
                    <span className="text-secondary font-black text-xl italic">{dictionary.cardType}</span>
                  </div>

                  {/* Interface Row */}
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-9 rounded-md bg-secondary/20 border border-secondary/30 relative flex items-center justify-center overflow-hidden">
                      <div className="grid grid-cols-2 grid-rows-3 w-full h-full gap-[1px] p-2 opacity-40">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="border-[0.5px] border-secondary/40 rounded-[1px]"></div>
                        ))}
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-white/40">wifi</span>
                  </div>

                  {/* Card Footer */}
                  <div className="flex flex-col gap-4">
                    <div className="text-secondary font-mono text-xl md:text-2xl font-medium drop-shadow-lg">
                      **** **** **** 8824
                    </div>
                    <div className="flex justify-between items-end border-t border-white/10 pt-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-[9px] text-white text-opacity-10 uppercase font-bold italic">
                          {dictionary.validUntil}
                        </span>
                        <span className="text-sm text-white font-medium tracking-widest">12/28</span>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-[9px] text-white opacity-[.1] uppercase font-bold italic">
                          {dictionary.memberLabel}
                        </span>
                        <span className="text-sm text-white font-bold uppercase ">{dictionary.memberType}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Indicator Floating Badge */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white px-6 py-5 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex items-center gap-5 z-20 min-w-[220px]">
                <div className="bg-green-100 text-green-600 w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                  <span className="material-symbols-outlined text-secondary text-2xl" >check</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.25em]">
                    {dictionary.deliveryStatus}
                  </p>
                  <p className="text-[15px] font-bold text-primary">
                    {dictionary.deliveryMethod}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



