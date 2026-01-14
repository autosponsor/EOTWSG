import React from 'react';
import { ModalType } from '../App';

interface LegalModalsProps {
  active: ModalType;
  onClose: () => void;
}

const LegalModals: React.FC<LegalModalsProps> = ({ active, onClose }) => {
  if (!active) return null;

  const renderContent = () => {
    switch (active) {
      case 'privacy':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold uppercase text-orange-500 tracking-widest">Privacy Protocol</h2>
            <p className="text-gray-400 text-sm leading-loose uppercase tracking-widest">Your data is treated as critical intelligence. We do not transmit or sell identifying markers to non-secure third parties. All subscription data is encrypted and used solely for broadcast delivery.</p>
          </div>
        );
      case 'terms':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold uppercase text-orange-500 tracking-widest">Terms of Engagement</h2>
            <p className="text-gray-400 text-sm leading-loose uppercase tracking-widest">Accessing this manual implies your commitment to personal responsibility. You agree to use the provided protocols only for ethical resilience and preparedness. We are not responsible for field-testing outcomes.</p>
          </div>
        );
      case 'disclaimer':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold uppercase text-orange-500 tracking-widest">Legal Disclaimer</h2>
            <p className="text-gray-400 text-sm leading-loose uppercase tracking-widest">The information in EOTWSG is for educational purposes only. Survival involves inherent risks. Matthew Danielson and the EOTWSG Project provide no warranties, express or implied, regarding survival outcomes.</p>
          </div>
        );
      case 'contact':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold uppercase text-orange-500 tracking-widest">Secure Contact</h2>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Transmission Received.'); onClose(); }}>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">Secure ID (Email)</label>
                <input type="email" required className="w-full bg-slate-950 border border-slate-800 p-4 text-xs text-white uppercase focus:border-orange-500 focus:outline-none" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">Briefing Content</label>
                <textarea rows={4} required className="w-full bg-slate-950 border border-slate-800 p-4 text-xs text-white uppercase focus:border-orange-500 focus:outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-orange-600 py-4 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-orange-500 transition-all">Transmit Message</button>
            </form>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-slate-950/80 animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 p-8 shadow-2xl animate-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors uppercase text-[10px] font-bold tracking-widest">[Close]</button>
        {renderContent()}
      </div>
    </div>
  );
};

export default LegalModals;