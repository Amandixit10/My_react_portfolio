/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import HeroSection from './components/HeroSection';
import PText from './components/PText';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/about">
               <About />
          </Route>
          <Route path="/Projects">
          <Projects />
          </Route>
          <Route path="/Contact">
          <Contact />
          </Route>
          <Route path="/">
          <Home />
          </Route>
          </Switch>
       
         <HeroSection />
         <PText />
      </Router>
    </>
  );
}
