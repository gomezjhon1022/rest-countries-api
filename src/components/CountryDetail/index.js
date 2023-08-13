import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './CountryDetail.css';

function CountryDetail({themeIsLight,isCountryDetail, setCountryDetail}) {
  const handleDetail = () => {
    setCountryDetail(!isCountryDetail);
  }
  return (
    <div className={`detailCountry ${themeIsLight?'color-dark background-light-gray':'color-white'}`}>
      <button className={`btnBack ${themeIsLight?'color-dark background-white':'color-white'}`} onClick={handleDetail}><span className={`arrow ${themeIsLight?'color-dark':'color-white'}`}><FontAwesomeIcon icon={faArrowLeft} /></span>Back</button>
      <div className="card__detail">
            <img className='flag__detail' src="https://images.pexels.com/photos/3800834/pexels-photo-3800834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="flag"/>
            <div className="data__detail">
              <div className="name__detail">Germany</div>
              <div className="nativeName__detail"><span className='negrita'>Native Name:</span> Belgie</div>
              <div className="population__detail"><span className='negrita'>Population:</span> 81.000.000</div>
              <div className="region__detail"><span className='negrita'>Region:</span> Europe</div>
              <div className="subRegion__detail"><span className='negrita'>Sub Region:</span> Western Europe</div>
              <div className="capital__detail"><span className='negrita'>Capital:</span> Berlin</div>
              <div className="extraData">
                <div className="domain__detail"><span className='negrita'>Top Level Domain:</span> .be</div>
                <div className="currencies__detail"><span className='negrita'>Currencies:</span> Euro</div>
                <div className="languages__detail"><span className='negrita'>Languages:</span> Dutch, French, German</div>
              </div>
              <div>
                <div className="border__countries"><span className='negrita'>Border Countries</span></div>
                <div className="border__container">
                  <div className={`border ${themeIsLight?'color-dark background-white':'color-white'}`}>France</div>
                  <div className="border">German</div>
                  <div className="border">Netherlands</div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export { CountryDetail };