
import React, { useEffect, useState, useRef } from 'react';

interface Checklist {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
}

const checklists: Checklist[] = [
  {
    id: '01',
    title: 'The S.T.O.P. Protocol',
    description: 'A learned cognitive discipline designed to interrupt the stress response and establish a clear path forward.',
    tags: ['Mindset', 'Immediate'],
    imageUrl: 'https://lh3.googleusercontent.com/sitesv/AAzXCkc03tk8I77bE6tz0H8irjCQzMC63cGZRrb2awYslI9ym1cXVmF1BRZVn9gKjLwbR953QQ6Kaur1Iq0eWAnzys0oQubEfg-A1tEq2dTtG6N5nUjKOt2H5BNbwy6Hwv_XipmUR_4LU16yuHlpiNQ-G-fXbjKs5RXMByvdPpvlB9Fu0EKL5eEXtwMIUro=w1280'
  },
  {
    id: '02',
    title: 'Cognitive Reset Matrix',
    description: 'Visualizing the psychological arc of a crisis to move from mental paralysis to decisive action.',
    tags: ['Psychology', 'Tactical'],
    imageUrl: 'https://lh3.googleusercontent.com/sitesv/AAzXCkfvSSIm4FOlkhyNvGoyChkqlaRJboXDGq1hzyh_-VMz2O_gbh8d8HKg9Em2PkUe3C7zzrvfw_oBsBa6ZTO9A3w_dmMso_cVjEY_lLectTM6tVoMlrogEbrvQ27V_L5Ta0vqyOLd8X6KMPhKFPMkITPtk0wwyq6KI3GM44EqmdfnTYRKe6DHEhs9x-YabO3Cf4drB7fKmyxrc9MbgwmM9SDxyTnEheOnooBx=w1280'
  },
  {
    id: '03',
    title: 'MARCH Algorithm',
    description: 'Advanced trauma treatment protocol for massive hemorrhage, airway, and circulation management.',
    tags: ['Medical', 'Skills'],
    imageUrl: 'https://lh3.googleusercontent.com/sitesv/AAzXCkc4Qp7ehUK2FyulYtXF2oDqi3Cm-pq9T0YoGCBG-uIS0KjJUsRnKPXtB_uRJGtAyD4gXdlFf_t9I5Ejmq1oz6dB3Lt6fZ_5EHQy6NDqRgNXcVXC5cKQmT6pKuCWq-0iMGwi_2x9nkSZvsfhE93Vq3wi1WUCFhgz_os9XnqitP6CJycTJRJFSNy3=w1280'
  }
];

const Library: React.FC = () => {
  const [user, setUser] = useState<any>(null);
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

  useEffect(() => {
    // @ts-ignore
    const identity = window.netlifyIdentity;
    if (identity) {
      setUser(identity.currentUser());
      identity.on('login', (u: any) => setUser(u));
      identity.on('logout', () => setUser(null));
    }
  }, []);

  const handleAccess = () => {
    // @ts-ignore
    const identity = window.netlifyIdentity;
    if (!user && identity) {
      identity.open();
    } else {
      console.log("Accessing terminal...");
    }
  };

  const handleShare = (platform: 'twitter' | 'facebook', itemTitle: string) => {
    const url = window.location.href;
    const text = encodeURIComponent(`Mastering ${itemTitle} from the End of the World Survival Guide. Secure your future.`);
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    };
    window.open(shareUrls[platform], '_blank');
  };

  return (
    <section ref={sectionRef} id="library" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-900 bg-slate-950/20">
      <div className={`mb-20 space-y-4 text-center md:text-left transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <span className="w-8 h-[1px] bg-orange-500"></span>
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-orange-500">Intelligence Briefings</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold font-['Oswald'] uppercase tracking-tight text-white">
          The <span className="text-orange-500">Survival</span> Library
        </h2>
        <p className="text-gray-500 max-w-xl text-sm leading-relaxed uppercase tracking-[0.1em]">
          Classified extractions from the primary guide. Verified protocols for immediate field implementation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {checklists.map((item, idx) => (
          <div 
            key={item.id} 
            className={`group relative bg-slate-900/30 border border-slate-800 rounded-sm overflow-hidden hover:border-orange-500/30 transition-all duration-700 flex flex-col backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            style={{ transitionDelay: `${idx * 200}ms` }}
          >
            {item.imageUrl && (
              <div className="w-full h-52 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 relative">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            )}
            
            <div className="p-8 space-y-6 flex-grow flex flex-col relative">
              <div className="absolute top-4 right-6 text-slate-800/20 font-['Oswald'] text-6xl font-bold select-none transition-colors group-hover:text-orange-500/5">
                {item.id}
              </div>
              
              <div className="relative z-10 space-y-5 flex-grow flex flex-col">
                <div className="flex gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold tracking-[0.2em] uppercase bg-slate-800/80 px-2.5 py-1 rounded-sm text-gray-400 border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold font-['Oswald'] uppercase tracking-wide text-white group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-500 leading-relaxed uppercase tracking-tight flex-grow opacity-80">
                  {item.description}
                </p>
                
                <div className="flex flex-col gap-4 mt-6">
                  <button 
                    onClick={handleAccess}
                    className="w-full border border-slate-700 bg-slate-800/30 hover:bg-orange-600 hover:border-orange-600 hover:text-white py-3 flex items-center justify-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-orange-500 transition-all"
                  >
                    {user ? 'OPEN TERMINAL' : 'AUTH REQUIRED'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" />
                    </svg>
                  </button>

                  <div className="flex items-center gap-3 border-t border-slate-800 pt-4">
                    <span className="text-[8px] font-bold tracking-widest text-gray-600 uppercase">Transmit Briefing:</span>
                    <button onClick={() => handleShare('twitter', item.title)} className="p-1.5 text-gray-500 hover:text-orange-400 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </button>
                    <button onClick={() => handleShare('facebook', item.title)} className="p-1.5 text-gray-500 hover:text-orange-400 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
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
