
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  user: any;
  login: () => void;
  logout: () => void;
  isLoaded: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // @ts-ignore
    const identity = window.netlifyIdentity;
    if (identity) {
      setUser(identity.currentUser());
      identity.on('login', (u: any) => setUser(u));
      identity.on('logout', () => setUser(null));
      identity.on('init', (u: any) => {
        setUser(u);
        setIsLoaded(true);
      });
    } else {
      setIsLoaded(true);
    }
  }, []);

  const login = () => {
    // @ts-ignore
    window.netlifyIdentity?.open();
  };

  const logout = () => {
    // @ts-ignore
    window.netlifyIdentity?.logout();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoaded }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
