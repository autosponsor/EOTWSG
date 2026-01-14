
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const logoUrl = "https://lh3.googleusercontent.com/sitesv/AAzXCkfJoerLprl_OFswe9vL5l5wtrVINhw38oSvhXqD3KrxDExeCBCd6EaRXhB6ZGgZ7HEgnUeUuYEynuIaoQWxK8wNbR9ixCEFbv0HoWjoFrvBcOJnxKJW0_c2PPRG5E1hTJgkqhbhHAqoNyeeJjUj8yAshxXXd8WBxUxCF3fxWlhj1gOyNXMq02tbcYZtKnIjK844W-Jeuestc676Th1bk5Hwq1CXIdPYBtj2Hls=w1280";
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // @ts-ignore
    const identity = window.netlifyIdentity;
    if (identity) {
      setUser(identity.currentUser());
      identity.on('login', (user: any) => setUser(user));
      identity.on('logout', () => setUser(null));
    }
  }, []);

  const handleAuth = () => {
    // @ts-ignore
    const identity = window.netlifyIdentity;
    if (identity) {
      if (user) {
        identity.logout();
      } else {
        identity.open();
      }
    }
  };

  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center max-w-6xl mx-auto z-50">
      <div className="flex items-center gap-3">
        <img src={logoUrl} alt="EOTWSG Logo" className="h-10 w-auto grayscale brightness-200" />
        <div className="font-['Oswald'] text-2xl font-bold tracking-wider uppercase">
          EOTW<span className="text-orange-500">SG</span>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <a href="#library" className="hidden md:block text-sm text-gray-400 hover:text-white transition uppercase tracking-widest">Library</a>
        <a href="#about" className="hidden md:block text-sm text-gray-400 hover:text-white transition uppercase tracking-widest">Author</a>
        <button 
          onClick={handleAuth}
          className="text-xs font-bold text-gray-400 hover:text-white transition border border-gray-700 px-4 py-2 rounded uppercase tracking-tighter"
        >
          {user ? 'Log Out' : 'Log In'}
        </button>
      </div>
    </nav>
  );
};

export default Header;
