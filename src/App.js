import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Title } from './components/Title'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Codaisseur :)
          we ar bad
        </a>
      </header>
      <Title />
    </div>
  );
}

export default App;
