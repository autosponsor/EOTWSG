
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CountdownBar from './components/CountdownBar';
import Library from './components/Library';
import About from './components/About';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          <CountdownBar />
          <Library />
          <About />
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
