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
            Protocol: <span className="text-orange-500">Grid Collapse</span> Analysis
          </h2>
        </div>

        <div className={`relative bg-slate-900/40 border border-slate-800 p-8 md:p-12 font-mono text-[10px] md:text-xs leading-relaxed text-gray-400 overflow-hidden group transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
          <div className="absolute top-4 right-4 text-[9px] text-gray-600 font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 animate-pulse"></span>
            Scenario :: LDPO_Active
          </div>

          <div className="space-y-8 h-[600px] overflow-y-auto pr-4 custom-scrollbar-tactical">
            {isTyping ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4 animate-pulse">
                <div className="text-orange-500 font-bold tracking-[0.6em] uppercase">Decrypting Casualty Data...</div>
                <div className="w-48 h-[2px] bg-slate-800 overflow-hidden">
                  <div className="w-full h-full bg-orange-500 origin-left animate-progress"></div>
                </div>
              </div>
            ) : (
              <article className="space-y-12 animate-in fade-in duration-1000">
                
                {/* Introduction */}
                <div className="space-y-4">
                  <h3 className="text-base font-bold font-['Oswald'] text-white uppercase tracking-widest border-b border-slate-800 pb-2">
                    1. The Fragility of Interdependence
                  </h3>
                  <p className="uppercase tracking-widest leading-loose text-gray-300">
                    The premise of modern industrial civilization is the continuous, uninterrupted flow of electrical energy. This is not merely a utility; it is the foundational substrate upon which all other critical infrastructures—water, sanitation, food distribution, healthcare, finance, and governance—are built.
                  </p>
                  <p className="uppercase tracking-widest leading-loose">
                    Based on an exhaustive review of federal commissions, academic studies, and infrastructure stress tests, the data indicates that the United States is fundamentally unprepared for a Long-Duration Power Outage (LDPO). The resultant collapse would not be a temporary emergency but a catastrophic "de-complexification" of society.
                  </p>
                  <div className="bg-red-950/20 border-l-2 border-red-500 p-4 my-6">
                    <p className="text-red-400 font-bold uppercase tracking-wider">
                      Critical Data: The Commission to Assess the Threat to the United States from Electromagnetic Pulse (EMP) Attack estimated that within one year of a nationwide blackout, up to 90% of the U.S. population could perish.
                    </p>
                  </div>
                </div>

                {/* Methodology */}
                <div className="space-y-6">
                  <h3 className="text-base font-bold font-['Oswald'] text-white uppercase tracking-widest border-b border-slate-800 pb-2">
                    Realistic Methodology for Prolonged Self-Reliance
                  </h3>
                  
                  {/* Water */}
                  <div className="space-y-2">
                    <h4 className="text-orange-400 font-bold uppercase tracking-wider">I. Water Security: The 3-Day Ultimatum</h4>
                    <p className="uppercase tracking-widest leading-loose">
                      <span className="text-white">Objective:</span> Establish a minimum capacity of 1 gallon/person/day indefinitely.
                    </p>
                    <p className="uppercase tracking-widest leading-loose">
                      <span className="text-white">Actionable Step:</span> Immediately acquire and stage a two-stage filtration and sterilization system. Do not rely solely on stored water. Stored water is finite; a functioning filtration system is not.
                    </p>
                    <p className="text-gray-500 italic uppercase tracking-widest">
                      Intellectual Honesty: Municipal water pressure will cease quickly. Pumping raw water requires human or mechanical power. Factor this power deficit into your planning.
                    </p>
                  </div>

                  {/* Sanitation */}
                  <div className="space-y-2">
                    <h4 className="text-orange-400 font-bold uppercase tracking-wider">II. Sanitation and Pathogen Control (Day 3-10)</h4>
                    <p className="uppercase tracking-widest leading-loose">
                      <span className="text-white">Objective:</span> Prevent waterborne and airborne disease, which historically accounts for the majority of post-disaster deaths.
                    </p>
                    <p className="uppercase tracking-widest leading-loose">
                      <span className="text-white">Actionable Step:</span> Implement a non-flush composting toilet system. Dig deep, distant trenches for solid waste disposal.
                    </p>
                    <p className="text-gray-500 italic uppercase tracking-widest">
                      Intellectual Honesty: The waste-disposal infrastructure is the first critical system to fail catastrophically. Uncontrolled human waste will contaminate local water sources and spread cholera, typhoid, and dysentery within days.
                    </p>
                  </div>

                   {/* Caloric */}
                   <div className="space-y-2">
                    <h4 className="text-orange-400 font-bold uppercase tracking-wider">III. Caloric and Nutritional Sustainability</h4>
                    <p className="uppercase tracking-widest leading-loose">
                      <span className="text-white">Objective:</span> Transition from reliance on stored calories to reproducible calories.
                    </p>
                    <p className="uppercase tracking-widest leading-loose">
                      <span className="text-white">Actionable Step:</span> Your immediate storage must be high-density, long-shelf-life staples. Simultaneously, the focus must shift entirely to high-yield gardening and local sourcing.
                    </p>
                  </div>

                   {/* Security */}
                   <div className="space-y-2">
                    <h4 className="text-orange-400 font-bold uppercase tracking-wider">IV. Security and Collective Stability</h4>
                    <p className="uppercase tracking-widest leading-loose">
                      <span className="text-white">Objective:</span> Protection of resources from predation and the establishment of credible deterrents.
                    </p>
                    <p className="uppercase tracking-widest leading-loose">
                      <span className="text-white">Actionable Step:</span> Form small, decentralized groups (5-10 trusted individuals/families). Effective self-reliance is mutual reliance.
                    </p>
                  </div>
                </div>

                {/* Phase I */}
                <div className="space-y-6">
                  <h3 className="text-base font-bold font-['Oswald'] text-white uppercase tracking-widest border-b border-slate-800 pb-2">
                    Phase I: The Immediate Decoupling (0 to 72 Hours)
                  </h3>
                  <p className="uppercase tracking-widest leading-loose">
                    The initial phase is defined by the rapid decoupling of the population from the systems of information and hydration. The "Internet Kill Switch" is flipped; data centers become islands of data with no bridges to the end-user.
                  </p>
                  
                  <div className="bg-orange-950/10 border-l border-orange-500 p-6 space-y-4">
                    <h4 className="font-bold text-orange-400 uppercase tracking-[0.3em] text-xs">The Hydraulic Shock: Vertical Water Failure</h4>
                    <p className="uppercase tracking-widest leading-loose text-gray-400">
                      Residents in high-rise apartments will lose water pressure within minutes of the blackout. There is no "grace period." The water in the vertical risers will drain to the lowest point or be consumed by the first users to open their taps.
                    </p>
                    <p className="uppercase tracking-widest leading-loose text-gray-400">
                      The immediate consequence is not just thirst, but sanitation. A toilet that cannot flush becomes a biohazard bucket within hours.
                    </p>
                  </div>

                  <div className="space-y-2">
                     <h4 className="text-white font-bold uppercase tracking-wider">The Healthcare "Golden Hour" Expiration</h4>
                     <p className="uppercase tracking-widest leading-loose text-gray-400">
                       Hospitals are prepared for interruption, not cessation. As the 72-hour window closes, hospital administrators face the grim calculus of triage. Ventilators and neonatal incubators shut down. The "Golden Hour" for trauma care vanishes.
                     </p>
                  </div>
                </div>

                {/* Phase II */}
                <div className="space-y-6">
                  <h3 className="text-base font-bold font-['Oswald'] text-white uppercase tracking-widest border-b border-slate-800 pb-2">
                    Phase II: The Biological and Industrial Crash (3 Days to 3 Weeks)
                  </h3>
                  <p className="uppercase tracking-widest leading-loose">
                    As the crisis moves beyond the first few days, the collapse shifts from an acute shock to a systemic biological failure.
                  </p>
                  <ul className="space-y-3 pl-4 uppercase tracking-[0.2em] text-gray-500 text-[10px]">
                    <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">::</span> <span className="text-gray-300">Sanitation Collapse:</span> Municipal water pipes lose pressure; biofilm collapses. Cholera and Dysentery return.</li>
                    <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">::</span> <span className="text-gray-300">Just-in-Time Food Collapse:</span> Grocery inventory evaporates in hours. The "Cold Chain" fails, spoiling massive stocks of meat and dairy.</li>
                    <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">::</span> <span className="text-gray-300">Industrial Killers:</span> Chemical plants suffer thermal runaway without cooling, venting toxic gases.</li>
                  </ul>
                </div>

                {/* Phase III */}
                <div className="space-y-6">
                  <h3 className="text-base font-bold font-['Oswald'] text-white uppercase tracking-widest border-b border-slate-800 pb-2">
                    Phase III: The Radiological Legacy (2 Weeks to Months)
                  </h3>
                  <p className="uppercase tracking-widest leading-loose">
                    Perhaps the most existential threat is the vulnerability of spent nuclear fuel pools. Without active water circulation (powered by grid or finite diesel), the water boils off, exposing fuel rods.
                  </p>
                  <div className="bg-slate-800/50 p-6 border border-slate-700">
                    <h4 className="font-bold text-white uppercase tracking-[0.2em] mb-2">The Zirconium Fire Scenario</h4>
                    <p className="uppercase tracking-widest leading-loose text-gray-400">
                      At high temperatures, zirconium cladding reacts with air to ignite. A single pool fire could release a plume of Cesium-137 that dwarfs the Chernobyl release, rendering an area the size of Pennsylvania uninhabitable for decades.
                    </p>
                  </div>
                </div>

                 {/* Phase IV */}
                 <div className="space-y-6">
                  <h3 className="text-base font-bold font-['Oswald'] text-white uppercase tracking-widest border-b border-slate-800 pb-2">
                    Phase IV: Societal Decomposition
                  </h3>
                  <p className="uppercase tracking-widest leading-loose">
                    This is the period where the "90% casualty" estimate becomes reality.
                  </p>
                  <div className="space-y-4">
                     <div>
                        <span className="text-orange-500 font-bold uppercase tracking-wider block mb-1">The Starvation Algorithm</span>
                        <p className="uppercase tracking-widest leading-loose text-gray-400">
                          The U.S. population is 83% urbanized. Without industrial agriculture (which requires fuel and electricity), the land can support perhaps 10-20% of the current population. The remaining 80-90% represents a caloric deficit resolved through starvation.
                        </p>
                     </div>
                     <div>
                        <span className="text-orange-500 font-bold uppercase tracking-wider block mb-1">Prisons and Security</span>
                        <p className="uppercase tracking-widest leading-loose text-gray-400">
                          Prisons rely on electric locks. When staff abandon posts, inmates face mass death in cells or violent breakouts, releasing hundreds of thousands of desperate individuals into a collapsing society.
                        </p>
                     </div>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="border-t border-slate-800 pt-8 pb-8">
                  <h3 className="text-center text-xl font-bold font-['Oswald'] text-white uppercase tracking-widest mb-6">
                    Conclusion: The Arithmetic of Collapse
                  </h3>
                  <p className="uppercase tracking-widest leading-loose text-center text-gray-400 mb-8">
                    There is no "sugar coating" the data. A long-duration grid failure is a state change for human civilization in North America. It represents the sudden, forced reversion of a 21st-century population to a pre-industrial carrying capacity. The grim reality is that the vast majority of the population cannot survive the transition.
                  </p>
                  <div className="text-center">
                    <a href="#hero" className="inline-block bg-orange-600 hover:bg-orange-500 text-white font-['Oswald'] px-12 py-4 text-[10px] font-bold uppercase tracking-[0.4em] transition-all shadow-xl shadow-orange-500/10 active:scale-95">
                      Access Survival Protocols
                    </a>
                  </div>
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
