import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Countries.css';
import { useEffect, useState } from 'react';

function Countries({themeIsLight,searchValue, setSearchValue, dataCountries, setDataCountries, setSeletedCountry, setCountryDetail, isCountryDetail}) {

  const all = "all";
  const region = "region/"
  const API = "https://restcountries.com/v3.1/"
  const [countriesFiltered, setCountriesFiltered]=useState([]);
  let searched = "";

  const handleDetail = (country) => {
    setSeletedCountry(country);
    setCountryDetail(!isCountryDetail);
  }

  useEffect(() => {
    getCountries(all, "");
  },[]);

  async function getCountries (world, pref) {
    let apiUrl =`${API}${pref}${world}`
    const res = await fetch(apiUrl);
    const data= await res.json();
      setDataCountries(data);
    }

    const handleRegion = (e) => {
      if (e.target.value ==="all") {
        getCountries(all, "");
      } else {
        getCountries(e.target.value, region)
      }
    }

    const handleInput = (e) => {
      setSearchValue(e.target.value.toLowerCase());
    }

    const handleSearch = (e) => {
      e.preventDefault();
      const paisesfiltrados = dataCountries.filter( (country1) => {
        return country1.name.common.toLowerCase()===searchValue;
      })
      setCountriesFiltered(paisesfiltrados);
    }

  return (
    <>
      <div className={`search__container ${themeIsLight?'background-light-gray':'background-very-dark'}`}>
        <form className={`search ${themeIsLight?'background-very-gray':'background-very-dark'}`} onSubmit={handleSearch}>
          <span  onClick={handleSearch} className={`search__icon ${themeIsLight?'background-white':'background-dark'}`}><FontAwesomeIcon icon={faMagnifyingGlass} className={`${themeIsLight?'color-gray':'color-white'}`}  /></span>
          <input onChange={handleInput} className={`search__input ${themeIsLight?'background-white':'background-dark color-white'}`} placeholder="Search for a country..." style={{ '--placeholder-color':  themeIsLight ? 'gray' : 'white' }}></input>
        </form>
        <div className="options">
          <select onChange={handleRegion} defaultValue={"empty"} className={`options__container ${themeIsLight?'background-light color-dark':'background-dark color-white'}`}>
              <option value="all" className='option__placeholder'>Filter by Region</option>
              <option className='option' value="africa">Africa</option>
              <option className='option' value="america">America</option>
              <option className='option' value="asia">Asia</option>
              <option className='option' value="europe">Europe</option>
              <option className='option' value="oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="grid">
        {countriesFiltered.length > 0 || searched!==""?(
          countriesFiltered.map((country) => (
          <div className="card" onClick={()=>handleDetail(country)} key={country.name.common}>
              <img src={country.flags.png} alt="flag" className='flag'/>
              <div className={`data ${themeIsLight?'background-white':'background-dark'}`}>
                <div className={`name ${themeIsLight ? 'color-dark' : 'color-white'}`} >{country.name.common}
                </div>
                <div className={`description ${themeIsLight?'color-dark':'color-white'}`}>
                  <div className={`population ${themeIsLight?'color-dark':'color-white'}`}>Population: {country.population.toLocaleString('en-US')}</div>
                  <div className={`region ${themeIsLight?'color-dark':'color-white'}`}>Region: {country.region}</div>
                  <div className={`capital ${themeIsLight?'color-dark':'color-white'}`}>Capital: {country.capital}</div>
                </div>
              </div>
          </div>
        ))):(
        dataCountries.map((country) => (
          <div className="card" onClick={()=>handleDetail(country)} key={country.name.common}>
              <img src={country.flags.png} alt="flag" className='flag'/>
              <div className={`data ${themeIsLight?'background-white':'background-dark'}`}>
                <div className={`name ${themeIsLight ? 'color-dark' : 'color-white'}`} >{country.name.common}
                </div>
                <div className={`description ${themeIsLight?'color-dark':'color-white'}`}>
                  <div className={`population ${themeIsLight?'color-dark':'color-white'}`}>Population: {country.population.toLocaleString('en-US')}</div>
                  <div className={`region ${themeIsLight?'color-dark':'color-white'}`}>Region: {country.region}</div>
                  <div className={`capital ${themeIsLight?'color-dark':'color-white'}`}>Capital: {country.capital}</div>
                </div>
              </div>
          </div>
        )))
        }
      </div>
    </>
  )
}

export { Countries };