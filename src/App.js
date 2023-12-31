import { Header } from './components/Header';
import { Countries } from './components/Countries';
import { CountryDetail } from './components/CountryDetail/index'
import { useState } from 'react';
import './App.css';


function App() {

  const [themeIsLight,setThemeIsLight]=useState(false);
  const [isCountryDetail,setCountryDetail]=useState(false);
  const [selectedCountry,setSeletedCountry]=useState("");
  const [searchValue, setSearchValue]=useState("");
  const [dataCountries,setDataCountries]=useState([]);

  return (
    <div className="App">
      <Header themeIsLight={themeIsLight} setThemeIsLight={setThemeIsLight}/>
      <main className={`${themeIsLight?'background-light-gray':'background-very-dark'}`}>
        {!isCountryDetail&&<Countries themeIsLight={themeIsLight} isCountryDetail={isCountryDetail} setCountryDetail={setCountryDetail} setSeletedCountry={setSeletedCountry}
          searchValue={searchValue} setSearchValue={setSearchValue} dataCountries={dataCountries} setDataCountries={setDataCountries}
        />
        }
        {isCountryDetail&&<CountryDetail themeIsLight={themeIsLight} isCountryDetail={isCountryDetail} setCountryDetail={setCountryDetail} selectedCountry={selectedCountry} dataCountries={dataCountries} setDataCountries={setDataCountries}  setSeletedCountry={setSeletedCountry}/>
        }

      </main>
    </div>
  );
}

export default App;
