import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solution from './components/Solution'
import Power from './components/Power'
import Clients from './components/Clients'
import Building from './components/Building'
import Personalize from './components/Personalize'
import Testimonials from './components/Testimonials'
import Client from './components/Client'
import Experience from './components/Experience'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Solution />
      <Power />
      <Clients />
      <Building />
      <Personalize />
      <Testimonials />
      <Client />
      <Experience />
      <Footer />
    </div>
  );
}

export default App