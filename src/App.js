import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
// import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import { data } from './common/constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: { ...data },
    };

    ReactGA.initialize('UA-154366389-1');
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    const {
      resumeData: { main, resume, portfolio },
    } = this.state;
    return (
      <div className='App'>
        <Header data={main} />
        <About data={main} />
        <Resume data={resume} />
        <Portfolio data={portfolio} />
        <Footer data={main} />
      </div>
    );
  }
}

export default App;
