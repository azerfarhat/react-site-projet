  GNU nano 8.6
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';  
import Contact from '../components/Contact';

function Accueil() {
    return (
    <>  {/* UN SEUL FRAGMENT */}
        <Hero />
        <Services />
        <WhyUs />
        <Contact />
    </>
    );
}
export default Accueil;
