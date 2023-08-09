import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


function Header({themeIsLight, setThemeIsLight}) {
  const handleTheme = () => {
    setThemeIsLight(!themeIsLight);
  }
  return (
  <div className={`header ${themeIsLight?'background-white':'background-dark'}`}>
    <div className={`header__left ${themeIsLight?'color-dark':'color-white'}`}>
      Where in the world?
    </div>
    <div className="header__right">
      <span className='image' onClick={handleTheme}><FontAwesomeIcon icon={faMoon} className={`${themeIsLight?'color-dark':'color-white'}`} /></span>
      <p className={`${themeIsLight?'color-dark':'color-white'}`} >Dark Mode</p>
    </div>
  </div>
  )
}

export { Header };