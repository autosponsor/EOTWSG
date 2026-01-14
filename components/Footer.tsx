import React from 'react';
import { ModalType } from '../App';

interface FooterProps {
  onOpenModal: (type: ModalType) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <div className="font-['Oswald'] text-xl font-bold tracking-wider uppercase">
            EOTW<span className="text-orange-500">SG</span>
          </div>
          <p className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase">
            Comprehensive Manual for Preparedness and Resilience
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <FooterLink onClick={() => onOpenModal('privacy')} label="Privacy Policy" />
          <FooterLink onClick={() => onOpenModal('terms')} label="Terms of Engagement" />
          <FooterLink onClick={() => onOpenModal('disclaimer')} label="Legal Disclaimer" />
          <FooterLink onClick={() => onOpenModal('contact')} label="Secure Contact" />
        </div>

        <div className="text-gray-600 text-[10px] font-bold tracking-widest uppercase text-center md:text-right">
          &copy; 2025 EOTWSG PROJECT.<br />
          Stay Prepared.
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ label: string; onClick: () => void }> = ({ label, onClick }) => (
  <button onClick={onClick} className="text-[10px] font-bold tracking-widest uppercase text-gray-500 hover:text-orange-500 transition-colors">
    {label}
  </button>
);

export default Footer;