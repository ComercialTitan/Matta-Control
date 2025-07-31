import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <About />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;

