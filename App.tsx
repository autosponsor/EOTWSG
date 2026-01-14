
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CountdownBar from './components/CountdownBar';
import Library from './components/Library';
import ChapterPreview from './components/ChapterPreview';
import About from './components/About';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import LegalModals from './components/LegalModals';
import CookieConsent from './components/CookieConsent';
import { AuthProvider } from './context/AuthContext';

export type ModalType = 'privacy' | 'terms' | 'disclaimer' | 'contact' | null;

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <AuthProvider>
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col relative selection:bg-orange-500 selection:text-white">
          <Header />
          
          <main className="flex-grow">
            <Hero />
            <CountdownBar />
            <Library />
            <ChapterPreview />
            <About />
          </main>

          <Footer onOpenModal={(m) => setActiveModal(m)} />

          <LegalModals 
            active={activeModal} 
            onClose={() => setActiveModal(null)} 
          />
          <CookieConsent />
        </div>
      </ErrorBoundary>
    </AuthProvider>
  );
};

export default App;
