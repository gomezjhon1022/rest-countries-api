import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Countries.css';
function Countries({themeIsLight}) {
  return (
    <>
      <div className={`search__container ${themeIsLight?'background-light-gray':'background-very-dark'}`}>
        <form className={`search ${themeIsLight?'background-very-gray':'background-very-dark'}`}>
          <a className={`search__icon ${themeIsLight?'background-white':'background-dark'}`}><FontAwesomeIcon icon={faMagnifyingGlass} className={`${themeIsLight?'color-gray':'color-white'}`}  /></a>
          <input className={`search__input ${themeIsLight?'background-white':'background-dark color-white'}`} placeholder="Search for a country..." style={{ '--placeholder-color':  themeIsLight ? 'gray' : 'white' }}></input>
        </form>
        <div className="options">
          <select  className={`options__container ${themeIsLight?'background-light color-dark':'background-dark color-white'}`}>
            <option disabled selected className='option__placeholder'>Filter by Region</option>
            <option className='option' defaultValue="africa">Africa</option>
            <option className='option' defaultValue="america">America</option>
            <option className='option' defaultValue="asia">Asia</option>
            <option className='option' defaultValue="europe">Europe</option>
            <option className='option' defaultValue="oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="grid">
        <div className="card" >
            <img src="https://images.pexels.com/photos/3800834/pexels-photo-3800834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="flag" className='flag'/>
            <div className={`data ${themeIsLight?'background-white':'background-dark'}`}>
              <div className={`name ${themeIsLight?'color-dark':'color-white'}`}>Germany</div>
              <div className={`description ${themeIsLight?'color-dark':'color-white'}`}>
                <div className={`population ${themeIsLight?'color-dark':'color-white'}`}>Population: 81.000.000</div>
                <div className={`region ${themeIsLight?'color-dark':'color-white'}`}>Region: Europe</div>
                <div className={`capital ${themeIsLight?'color-dark':'color-white'}`}>Capital: Berlin</div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export { Countries };