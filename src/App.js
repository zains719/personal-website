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
            <a href="https://s3.amazonaws.com/attachments.angel.co/5899015-77290018c104b5f57cf427c7b44cbfac.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJS6W3HGZGRJIRBTA%2F20210527%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210527T111720Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=5e48e582afd3c694b2122e347690090818413421179f0b9f87352c50cfd5109a">
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