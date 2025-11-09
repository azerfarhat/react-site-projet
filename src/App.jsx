import React from 'react';
import './App.css';
import Header from './components/Header';
import Accueil from './pages/Accueil';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Accueil />
      </main>
    </div>
  );
}

export default App;