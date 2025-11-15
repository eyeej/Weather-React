import WeatherSearch from './weathersearch'
import './styles.css';

function App() {
  return (
      <div className="App">
      <header className="App-header">
        <WeatherSearch />
      </header>
      <h1>Weather App</h1>
      <footer>
        This Project was Coded by Emma Yee-Joy and is open-sourced on <a href="https://github.com/eyeej">Github</a>
      </footer>
    </div>
  );
}

export default App;
