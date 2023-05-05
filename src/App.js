import React from 'react';
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Mszana Dolna" />
        <footer>
          This project was created by Olena Kurilets and is{' '}
          <a
            href="https://github.com/Elene-tech/weather_react/tree/master"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          <p>
            <a
              href="https://soft-dango-ade2ea.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Link to the web-site
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
