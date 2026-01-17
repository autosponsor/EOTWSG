import React, { useState, useEffect, useRef } from 'react';
import Book3D from './Book3D';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Updated to point to your public image folder
  const heroBaseUrl = "/images/background.png";

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBaseUrl} 
          alt="Tactical Background" 
          className="w-full h-full object-cover grayscale opacity-20 pointer-events-none"
        />
      </div>
      
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
      <div className="scanline"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className={`space-y-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="inline-block bg-orange-950/30 text-orange-400 px-3 py-1 rounded text-[10px] font-bold tracking-[0.2em] uppercase border border-orange-500/20">
              Broadcasting :: Encryption Protocol Active
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-bold leading-[0.9] font-['Oswald'] uppercase tracking-tight">
            DON'T JUST<br />
            <span className="text-orange-500">SURVIVE.</span>
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed max-w-md font-light">
            "The end of the world as we know it isn't necessarily the end of the world." Stop relying on fragile systems. Reclaim control.
          </p>

          <div className="max-w-md pt-4">
            <form 
              name="email-signup"
              method="POST"
              data-netlify="true"
              className="flex flex-col sm:flex-row gap-0 group"
            >
              <input type="hidden" name="form-name" value="email-signup" />
              <input
                type="email"
                name="email"
                required
                placeholder="IDENTITY@PROTOCOL.SECURE"
                className="flex-grow bg-slate-900/50 border border-slate-700 border-r-0 px-5 py-4 text-xs focus:outline-none focus:border-orange-500 focus:bg-slate-900 transition-all uppercase tracking-widest text-white placeholder:text-gray-600 backdrop-blur-md"
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-500 text-white font-['Oswald'] px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all hover:scale-x-105 active:scale-95"
              >
                INITIATE
              </button>
            </form>
            <div className="flex items-center gap-2 mt-4 opacity-40">
              <span className="w-8 h-[1px] bg-gray-600"></span>
              <p className="text-[9px] text-gray-500 uppercase tracking-[0.3em]">
                Secure Subscription Layer V4.0
              </p>
            </div>
          </div>
        </div>

        <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <Book3D />
        </div>
      </div>
    </section>
  );
};

export default Hero;
