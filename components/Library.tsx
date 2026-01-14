
import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { CHECKLISTS } from '../constants/survivalData';

const Library: React.FC = () => {
  const { user, login } = useAuth();
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

  const handleAccess = (title: string) => {
    if (!user) {
      login();
    } else {
      // In a real production app, this would trigger a secure download or internal routing
      console.log(`Accessing encrypted intelligence: ${title}`);
      alert(`Accessing encrypted intelligence: ${title}`);
    }
  };

  const handleShare = (platform: 'twitter' | 'facebook', itemTitle: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Critical protocol: ${itemTitle}. Survival requires adaptation. #EOTWSG`);
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`
    };
    window.open(shareUrls[platform], '_blank');
  };

  return (
    <section ref={sectionRef} id="library" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-900 bg-slate-950/20 relative">
      <div className={`mb-20 space-y-4 text-center md:text-left transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <span className="w-8 h-[1px] bg-orange-500"></span>
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-orange-500">Intelligence Briefings</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white font-['Oswald']">
          The <span className="text-orange-500">Survival</span> Library
        </h2>
        <p className="text-gray-500 max-w-xl text-sm leading-relaxed uppercase tracking-[0.1em] font-light">
          Classified extractions from the primary guide. Verified protocols for immediate field implementation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CHECKLISTS.map((item, idx) => (
          <div 
            key={item.id} 
            className={`group relative bg-slate-900/30 border border-slate-800 rounded-sm overflow-hidden hover:border-orange-500/30 transition-all duration-700 flex flex-col backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <div className="w-full h-56 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 relative">
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            
            <div className="p-8 space-y-6 flex-grow flex flex-col relative">
              <div className="absolute top-4 right-6 text-slate-800/10 font-['Oswald'] text-7xl font-bold select-none transition-all group-hover:text-orange-500/5 group-hover:-translate-y-2">{item.id}</div>
              
              <div className="relative z-10 space-y-5 flex-grow flex flex-col">
                <div className="flex gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[8px] font-bold tracking-[0.2em] uppercase bg-slate-800/80 px-2.5 py-1 rounded-sm text-gray-400 border border-slate-700">{tag}</span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold uppercase tracking-wide text-white group-hover:text-orange-500 transition-colors font-['Oswald']">{item.title}</h3>
                
                <p className="text-[11px] text-gray-500 leading-relaxed uppercase tracking-widest flex-grow opacity-80 group-hover:opacity-100 transition-opacity">{item.description}</p>
                
                <div className="flex flex-col gap-4 mt-6">
                  <button 
                    onClick={() => handleAccess(item.title)}
                    className={`w-full border py-4 flex items-center justify-center gap-3 text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-500 ${user ? 'border-orange-600 bg-orange-600 text-white hover:bg-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]' : 'border-slate-700 bg-slate-800/30 text-orange-500 hover:bg-orange-600 hover:text-white'}`}
                  >
                    {user ? 'Acquire Protocol' : 'Log in to Access'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" /></svg>
                  </button>

                  <div className="flex items-center gap-4 border-t border-slate-800/50 pt-4 opacity-40 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-[7px] font-bold tracking-[0.4em] text-gray-600 uppercase">Transmission Channel:</span>
                    <button onClick={() => handleShare('twitter', item.title)} className="p-1 text-gray-500 hover:text-orange-500 transition-all hover:scale-110">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </button>
                    <button onClick={() => handleShare('facebook', item.title)} className="p-1 text-gray-500 hover:text-orange-500 transition-all hover:scale-110">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Library;
