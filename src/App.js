import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Title  from './components/Title'
import UserBoard from './components/UserBoard'

function App() {
  return (
    <div className="App">
      <Title content="Some Simple Title" />
      <UserBoard />
    </div>
  );
}

export default App;
