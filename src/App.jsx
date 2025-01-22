import React, { Suspense, lazy } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load non-critical components
const ExploreServices = lazy(() => import('./components/ExploreServices'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const VideoIntroduction = lazy(() => import('./components/VideoIntroduction'));
const HappyClients = lazy(() => import('./components/HappyClients'));
const FooterProcess = lazy(() => import('./components/FooterProcess'));
const MobileAppSection = lazy(() => import('./components/MobileAppSection'));
const ExploreBlog = lazy(() => import('./components/ExploreBlog'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <Suspense fallback={<LoadingSpinner />}>
        <ExploreServices />
        <AboutSection />
        <WhyChooseUs />
        <VideoIntroduction />
        <HappyClients />
        <FooterProcess />
        
        <ExploreBlog />
        <Testimonials />
        <FAQ />
        <MobileAppSection />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;