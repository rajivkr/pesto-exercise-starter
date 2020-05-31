import React from 'react';
import './App.css';
import Header from './components/header';
import GroceryContainer from './components/grocery';

function App() {
  return (
    <div className="App">
      <Header />
      <GroceryContainer />
    </div>
  );
}

export default App;
