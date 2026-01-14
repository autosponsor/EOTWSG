import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('eotwsg-consent');
    if (!consent) {
      setTimeout(() => setShow(true), 2000);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('eotwsg-consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[110] p-4 md:p-8 animate-in slide-in-from-bottom duration-700">
      <div className="max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-xl border border-orange-500/20 p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-orange-500/10 rounded flex items-center justify-center flex-shrink-0 text-orange-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3a10.003 10.003 0 00-6.912 2.738l-.022.022m6.847 14.242L12.5 21l-1.5 1 1.5-1z" /></svg>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-gray-400 leading-loose">
            <span className="text-white font-bold">Trace Recognition:</span> This terminal uses encrypted tracking tokens to maintain protocol integrity. Use implies acceptance of session monitoring.
          </p>
        </div>
        <button onClick={accept} className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-2 text-[10px] font-bold tracking-[0.3em] uppercase transition-all whitespace-nowrap">Acknowledge</button>
      </div>
    </div>
  );
};

export default CookieConsent;