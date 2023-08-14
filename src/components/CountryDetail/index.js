import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './CountryDetail.css';

function CountryDetail({themeIsLight,isCountryDetail, setCountryDetail, selectedCountry}) {
  const handleDetail = () => {
    setCountryDetail(!isCountryDetail);
  }
  const firstLanguage = Object.keys(selectedCountry.languages)[0];
  const firstCurrencie = Object.keys(selectedCountry.currencies)[0];
  const languageNames = Object.entries(selectedCountry.languages).map(([code, name]) => name);
  const languagesList = languageNames.join(", ");
  const borderCountries =selectedCountry.borders;
  const tld = selectedCountry.tld[0];
  console.log(borderCountries);
  return (
    <div className={`detailCountry ${themeIsLight?'color-dark background-light-gray':'color-white'}`}>
      <button className={`btnBack ${themeIsLight?'color-dark background-white':'color-white'}`} onClick={handleDetail}><span className={`arrow ${themeIsLight?'color-dark':'color-white'}`}><FontAwesomeIcon icon={faArrowLeft} /></span>Back</button>
      <div className="card__detail">
            <img className='flag__detail' src={selectedCountry.flags.png} alt="flag"/>
            <div className="data__detail">
              <div className="name__detail">{selectedCountry.name.common}</div>
              <div className="nativeName__detail"><span className='negrita'>Native Name:</span> {selectedCountry.name.nativeName[firstLanguage]?.common}</div>
              <div className="population__detail"><span className='negrita'>Population:</span> {selectedCountry.population}</div>
              <div className="region__detail"><span className='negrita'>Region:</span> {selectedCountry.region}</div>
              <div className="subRegion__detail"><span className='negrita'>Sub Region:</span> {selectedCountry.subregion}</div>
              <div className="capital__detail"><span className='negrita'>Capital:</span> {selectedCountry.capital}</div>
              <div className="extraData">
                <div className="domain__detail"><span className='negrita'>Top Level Domain:</span> {tld}</div>
                <div className="currencies__detail"><span className='negrita'>Currencies:</span> {selectedCountry.currencies[firstCurrencie]?.name}</div>
                <div className="languages__detail"><span className='negrita'>Languages:</span> {languagesList}</div>
              </div>
              <div>
                <div className="border__countries"><span className='negrita'>Border Countries</span></div>
                <div className="border__container">
                  {borderCountries?.map((border)=>(
                  <div className={`border ${themeIsLight?'color-dark background-white':'color-white'}`} key={border}>{border}</div>
                  ))
                  }
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export { CountryDetail };