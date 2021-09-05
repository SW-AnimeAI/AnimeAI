import logo from './logo.svg';
import './App.css';
import Jacobo from './views/home/home.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Jacobo/>
          Edit <code>src/App.js</code> ESCUCHO A UNA SEÑORA QUE DICE A.
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
