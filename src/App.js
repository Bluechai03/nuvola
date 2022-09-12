import React from 'react';
import {
  About,
  Benefits,
  Contact,
  Features,
  Footer,
  Form,
  Gallery,
  Hero,
  Testimonials,
} from './containers';
import { Navbar, BackToTop } from './components';

import './app.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Benefits />
      <Gallery />
      <Form />
      <Testimonials />
      <Contact />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default App;
