import React from 'react';
import Intro from './components/Intro/intro';
import './app.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Intro />
      </div>
    );
  }
}

export default App;
