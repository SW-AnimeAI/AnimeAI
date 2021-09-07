import logo from '../../logo.svg';
import './home.css';
import Login from '../login/login.js'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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

export default Home;
