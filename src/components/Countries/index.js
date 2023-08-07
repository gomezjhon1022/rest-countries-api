function Countries() {
  return (
    <div>
      <div className="search__container">
        <form className="search">
          <a className="search__icon"></a>
          <input className="search__input"></input>
        </form>
        <div className="options">
          <select className="options__container">
            <option value="option1">Africa</option>
            <option value="option2">America</option>
            <option value="option3">Asia</option>
            <option value="option4">Europe</option>
            <option value="option5">Oceania</option>
          </select>
        </div>
      </div>
      <div className="grid">
        <div className="card">
            <img src="" alt="flag"/>
            <div className="data">
              <div className="name">Germany</div>
              <div className="description">
                <div className="population">Population:81.000.000</div>
                <div className="region">Region: Europe</div>
                <div className="capital">Capital: Berlin</div>
              </div>
            </div>
        </div>
      </div>
      <div className="detailCountry">
        <button>Back</button>
        <div className="card">
            <img src="" alt="flag"/>
            <div className="data">
              <div className="name">Germany</div>
              <div className="nativeName">Native Name: Belgie</div>
                <div className="population">Population:81.000.000</div>
                <div className="region">Region: Europe</div>
                <div className="subRegion">Sub Region:Western Europe</div>
                <div className="capital">Capital: Berlin</div>
                <div className="extraData">
                  <div className="domain">Top Level Domain: .be</div>
                  <div className="currencies">Currencies: Euro</div>
                  <div className="languages">Languages: Dutch, French, German</div>
                </div>
                <div>
                  <div className="border__countries">Border Countries</div>
                  <div className="border__container">
                    <div className="border">France</div>
                    <div className="border">German</div>
                    <div className="border">Netherlands</div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export { Countries };