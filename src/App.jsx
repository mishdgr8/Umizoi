import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Loader from './components/Loader';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import MeetingChef from './components/MeetingChef';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Menu from './pages/Menu';
import Origin from './pages/Origin';
import History from './pages/History';
import ReservationPage from './pages/ReservationPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isChefDetailOpen, setIsChefDetailOpen] = useState(false);
  const [lenisInstance, setLenisInstance] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    setLenisInstance(lenis);

    // Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  useEffect(() => {
    if (lenisInstance) {
      if (isChefDetailOpen) {
        lenisInstance.stop();
      } else {
        lenisInstance.start();
      }
    }
  }, [isChefDetailOpen, lenisInstance]);

  useEffect(() => {
    if (lenisInstance && location) {
      lenisInstance.scrollTo(0, { immediate: true });
      // Small delay to ensure DOM is ready after route change
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [location.pathname, lenisInstance]);

  // Refresh ScrollTrigger when loading state changes
  useEffect(() => {
    if (!isLoading) {
      // Give a tiny bit of time for the unmount transition of Loader if any
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    }
  }, [isLoading]);

  const scrollToSection = (id) => {
    if (lenisInstance) {
      lenisInstance.scrollTo(id, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    }
  };

  return (
    <>
      <Cursor />
      <MeetingChef isOpen={isChefDetailOpen} onClose={() => setIsChefDetailOpen(false)} />

      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Routes>
            <Route path="/" element={<Home scrollToSection={scrollToSection} setIsChefDetailOpen={setIsChefDetailOpen} />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/origin" element={<Origin />} />
            <Route path="/history" element={<History />} />
            <Route path="/reservation" element={<ReservationPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
