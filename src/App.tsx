import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  const [isPWA, setIsPWA] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the app is running in standalone mode (PWA)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                         (window.navigator as any).standalone || // For iOS
                         document.referrer.includes('android-app://'); // For Android
    setIsPWA(isStandalone);

    // Simule un chargement initial fluide
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ 
      paddingTop: 'env(safe-area-inset-top, 0px)',
      paddingBottom: 'calc(64px + env(safe-area-inset-bottom, 0px))'
    }}>
      {isLoading && <LoadingScreen />}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <BottomNav />
      <BackToTop />
      {!isPWA && <Footer />}
    </div>
  );
}

export default App;
