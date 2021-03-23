import { logDOM } from '@testing-library/dom';
import React from 'react';
import './css/App.scss';

// import 'materialize-css/dist/css/materialize.min.css';​
// import { BrowserRouter, Route } from 'react-router-dom';​
// import NavBar from './components/navigation/NavBar.jsx';​
// import Home from './components/navigation/Home.jsx';​
// import Series from './components/navigation/Series.jsx';​
// import Films from './components/navigation/Films.jsx';​
// import NewAndPopular from './components/navigation/NewAndPopular.jsx';​
// import MyList from './components/navigation/MyList.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logDOM} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
