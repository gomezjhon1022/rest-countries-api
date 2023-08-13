import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Countries.css';
import { useEffect, useState } from 'react';

function Countries({themeIsLight, isCountryDetail, setCountryDetail}) {
  const handleDetail = () => {
    setCountryDetail(!isCountryDetail);
  }

  const API = "https://restcountries.com/v3.1/all"
  const [dataCountries,setDataCountries]=useState([]);
  useEffect(() => {
    getCountries();
  },[]);



  async function getCountries () {
    const res = await fetch(API)
    const data= await res.json();
    console.log(data);
      setDataCountries(data);
      console.log(dataCountries)
    }



  return (
    <>
      <div className={`search__container ${themeIsLight?'background-light-gray':'background-very-dark'}`}>
        <form className={`search ${themeIsLight?'background-very-gray':'background-very-dark'}`}>
          <a className={`search__icon ${themeIsLight?'background-white':'background-dark'}`}><FontAwesomeIcon icon={faMagnifyingGlass} className={`${themeIsLight?'color-gray':'color-white'}`}  /></a>
          <input className={`search__input ${themeIsLight?'background-white':'background-dark color-white'}`} placeholder="Search for a country..." style={{ '--placeholder-color':  themeIsLight ? 'gray' : 'white' }}></input>
        </form>
        <div className="options">
          <select defaultValue={"empty"} className={`options__container ${themeIsLight?'background-light color-dark':'background-dark color-white'}`}>
            <option value="empty" disabled className='option__placeholder'>Filter by Region</option>
            <option className='option' value="africa">Africa</option>
            <option className='option' value="america">America</option>
            <option className='option' value="asia">Asia</option>
            <option className='option' value="europe">Europe</option>
            <option className='option' value="oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="grid">
      {dataCountries.map((country, index) => (
        <div className="card" onClick={handleDetail} key={country.name.common}>
            <img src={country.flags.png} alt="flag" className='flag'/>
            <div className={`data ${themeIsLight?'background-white':'background-dark'}`}>
              <div className={`name ${themeIsLight ? 'color-dark' : 'color-white'}`} >{country.name.common}
              </div>
              <div className={`description ${themeIsLight?'color-dark':'color-white'}`}>
                <div className={`population ${themeIsLight?'color-dark':'color-white'}`}>Population: {country.population}</div>
                <div className={`region ${themeIsLight?'color-dark':'color-white'}`}>Region: {country.region}</div>
                <div className={`capital ${themeIsLight?'color-dark':'color-white'}`}>Capital: {country.capital}</div>
              </div>
            </div>
        </div>
      ))}
      </div>
    </>
  )
}

export { Countries };