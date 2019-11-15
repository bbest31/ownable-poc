import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import LandingScene from './LandingScene/LandingScene';
import ValueSection from './ValueSection/ValueSection';
import HowItWorks from './HowItWorksSection/HowItWorksSection';
import InvestmentExample from './InvestmentExample/InvestmentExample';
import Footer from './Footer/Footer';
import { configureAnchors } from 'react-scrollable-anchor';

class App extends React.Component {

  constructor(props) {
    super(props);
    // configure scrollable anchor speed
    configureAnchors({ offset: 0, scrollDuration: 900 });
  }

  render() {
    return (
      <div>
        <NavBar />
        <LandingScene />
        <ValueSection index="0" />
        <ValueSection index="1" />
        <ValueSection index="2" />
        <HowItWorks />
        <InvestmentExample />
        <Footer />
      </div>
    );
  }

}

export default App;
