
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { ASSETS } from '../constants/survivalData';

const Header: React.FC = () => {
  const { user, login, logout } = useAuth();

  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center max-w-6xl mx-auto z-50">
      <div className="flex items-center gap-3">
        <img 
          src={ASSETS.LOGO} 
          alt="EOTWSG Logo" 
          className="h-10 w-auto grayscale brightness-200 contrast-125 hover:brightness-100 transition-all duration-500 cursor-pointer" 
        />
        <div className="font-['Oswald'] text-2xl font-bold tracking-wider uppercase hidden sm:block">
          EOTW<span className="text-orange-500">SG</span>
        </div>
      </div>
      <div className="flex gap-4 sm:gap-6 items-center">
        <a href="#library" className="hidden lg:block text-[10px] font-bold text-gray-400 hover:text-white transition uppercase tracking-[0.3em]">Library</a>
        <a href="#about" className="hidden lg:block text-[10px] font-bold text-gray-400 hover:text-white transition uppercase tracking-[0.3em]">Author</a>
        <button 
          onClick={user ? logout : login}
          className="text-[10px] font-bold text-orange-500 border border-orange-500/30 px-5 py-2.5 hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all duration-300 uppercase tracking-[0.2em] shadow-lg shadow-orange-500/5 active:scale-95"
        >
          {user ? 'Terminate Session' : 'Initiate Session'}
        </button>
      </div>
    </nav>
  );
};

export default Header;
