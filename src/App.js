import { Header } from './components/Header';
import { Countries } from './components/Countries';
import { CountryDetail } from './components/CountryDetail/index'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Countries/>
        <CountryDetail/>
      </main>
    </div>
  );
}

export default App;
