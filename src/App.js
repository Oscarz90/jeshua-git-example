import logo from './logo.svg';
import './App.css';

const SayHello = (props) => <h1>{`Hola ${props.message}`}</h1>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <SayHello message="Jeshua" />
        <SayHello message="Oscar" />
      </header>
    </div>
  );
}

export default App;
