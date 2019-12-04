import React, { Component } from 'react';
import Header from './Header';
import '../styles/index.scss';
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <h1>Sorry I'm late</h1>
      </div>
    );
  }
}

export default App;
