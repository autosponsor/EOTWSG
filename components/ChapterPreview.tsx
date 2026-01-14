
import React, { useState, useEffect, useRef } from 'react';

const ChapterPreview: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsTyping(false), 1500);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-slate-950 py-24 border-t border-slate-900 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className={`mb-12 space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-orange-500"></span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-orange-500">Protocol Preview</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-['Oswald'] uppercase tracking-tight text-white">
            Chapter 1: The <span className="text-orange-500">Survivor's</span> Mindset
          </h2>
        </div>

        <div className={`relative bg-slate-900/40 border border-slate-800 p-8 md:p-12 font-mono text-[10px] md:text-xs leading-relaxed text-gray-400 overflow-hidden group transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
          <div className="absolute top-4 right-4 text-[9px] text-gray-600 font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500/50 animate-pulse"></span>
            Reader_Active :: Ver_1.01
          </div>

          <div className="space-y-8 h-[500px] overflow-y-auto pr-4 custom-scrollbar-tactical">
            {isTyping ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4 animate-pulse">
                <div className="text-orange-500 font-bold tracking-[0.6em] uppercase">Decrypting Intelligence...</div>
                <div className="w-48 h-[2px] bg-slate-800 overflow-hidden">
                  <div className="w-full h-full bg-orange-500 origin-left animate-progress"></div>
                </div>
              </div>
            ) : (
              <article className="space-y-12 animate-in fade-in duration-1000">
                <div className="space-y-4">
                  <p className="text-gray-200 font-bold uppercase tracking-wider text-sm">
                    Survival starts in your head, not with your gear. Before any physical action, you must win the internal psychological battle.
                  </p>
                  <p className="uppercase tracking-widest leading-loose">
                    This chapter lays out the mental framework you need to operate under extreme pressure, turning you from a reactive victim into a proactive survivor.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-base font-bold font-['Oswald'] text-white uppercase tracking-widest border-b border-slate-800 pb-2">
                    1.1 The Psychological Arc of a Crisis
                  </h3>
                  <p className="uppercase tracking-widest leading-loose">
                    People often imagine a smooth, step-by-step emotional journey through a crisis. Research and real-world accounts show a much messier, more mentally disruptive reality. The first moments of a life-threatening event aren't mainly emotional; they're about a severe breakdown in your ability to think clearly.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-orange-950/10 border-l border-orange-500 p-8 space-y-6 backdrop-blur-sm">
                    <h4 className="font-bold text-orange-400 uppercase tracking-[0.3em] text-xs">Initial Response: Shock & Cognitive Impairment</h4>
                    <p className="uppercase tracking-widest leading-loose text-gray-300">
                      When your normal life is suddenly shattered by a life-threatening situation, your usual routines disappear. This is "extrinsic survival," where you must rapidly learn new behaviors under extreme pressure.
                    </p>
                    <p className="uppercase tracking-widest leading-loose text-gray-400">
                      Your biggest hurdle is your brain's own defense system. Your amygdala, the brain's danger sensor, triggers an immediate, overwhelming fear response, flooding your body with stress hormones like cortisol and adrenaline.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="font-bold text-white uppercase tracking-[0.2em]">Consequences of the Hijack:</h4>
                  <ul className="space-y-3 pl-4 uppercase tracking-[0.2em] text-gray-500 text-[10px]">
                    <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">::</span> Heart rate and blood pressure surge.</li>
                    <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">::</span> Blood vessels constrict / Peripheral vision narrows by up to 70%.</li>
                    <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">::</span> Cortisol interferes with prefrontal cortex / Complex thought hindered.</li>
                  </ul>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center pb-8">
                  <p className="text-gray-600 italic mb-8 uppercase tracking-widest text-[10px]">End of public briefing. Full manual access required for Section 1.2 and beyond.</p>
                  <a href="#hero" className="inline-block bg-orange-600 hover:bg-orange-500 text-white font-['Oswald'] px-12 py-4 text-[10px] font-bold uppercase tracking-[0.4em] transition-all shadow-xl shadow-orange-500/10 active:scale-95">
                    Secure Master Guide
                  </a>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar-tactical::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar-tactical::-webkit-scrollbar-track { background: #020617; }
        .custom-scrollbar-tactical::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 2px; }
        .custom-scrollbar-tactical::-webkit-scrollbar-thumb:hover { background: #f97316; }
        @keyframes progress { 0% { transform: scaleX(0); } 100% { transform: scaleX(1); } }
        .animate-progress { animation: progress 1.5s ease-in-out forwards; }
      `}</style>
    </section>
  );
};

export default ChapterPreview;
