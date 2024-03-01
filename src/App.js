import React from 'react';
import './App.css';
import { Navbars } from './components/Navbars';
import { Banner } from './components/Banner';
import { About } from './components/About';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <Navbars/>
      <Banner/>
      <About/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;