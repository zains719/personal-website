import './App.scss';
import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import 'particles.js/particles';
import Github from './images/Github';
import LinkedIn from './images/LinkedIn';
import Instagram from './images/Instagram';
import Resume from './images/Resume';

const { particlesJS } = window;

class App extends Component {
  componentDidMount() {
    particlesJS.load('particles-js', '/particles.json', () => {
      console.log('particles.json loaded');
    });
  }

  render() {
    return (
      <>
      <Helmet>
        <title>Zain Saleem</title>
      </Helmet>

      <div className="app">
        <div className="particles-js" id='particles-js'/>
        <div className="content">
          <div className="name">
            <h1>Zain Saleem</h1>
          </div>
          <div className="icons">
            <a href="https://github.com/zains719"><Github /></a>
            <a href="https://www.linkedin.com/in/zain-saleem-137603211/"><LinkedIn /></a>
            <a href="https://www.instagram.com/_zain719/"><Instagram /></a>
            <a href="/Zain-Saleem-CV.pdf" download>
              <Resume />
            </a>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default App;