import { Header } from './components/Header';
import { Countries } from './components/Countries';
import { CountryDetail } from './components/CountryDetail/index'
import { useState } from 'react';
import './App.css';


function App() {

  const [themeIsLight,setThemeIsLight]=useState(false);


  return (
    <div className="App">
      <Header themeIsLight={themeIsLight} setThemeIsLight={setThemeIsLight}/>
      <main className={`${themeIsLight?'background-very-gray':'background-very-dark'}`}>
        <Countries/>
        <CountryDetail/>
      </main>
    </div>
  );
}

export default App;
