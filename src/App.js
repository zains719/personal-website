import './App.scss';
import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import 'particles.js/particles';
import Hero from './components/hero'
import About from './components/about';
import Experience from './components/experience'
import Projects from './components/projects'
import Contact from './components/contact'

const { particlesJS } = window;

class App extends Component {
  // componentDidMount() {
  //   particlesJS.load('particles-js', '/particles.json', () => {
  //   })
  // }

  render() {
    return (
      <>
      <Helmet>
        <title>Zain Saleem</title>
      </Helmet>
      <div className="app">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
      </>
    );
  }
}

export default App;