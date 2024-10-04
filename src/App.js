import React from 'react';
import HeroSection from './components/HeroSection';
import About from './components/About';
import HomeSection from './components/HomeSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <HomeSection />
      <About />
      <Footer />
    </div>
  );
}

export default App;
