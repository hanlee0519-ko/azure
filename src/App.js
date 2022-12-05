import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Demo SAS Han</p>
        <a
          className="App-link"
          href="https://www.denave.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Denave
        </a>
        <a
          className="App-link"
          href="https://www.microsoft.com/ko-kr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MS
        </a>
        <a
          className="App-link"
          href="https://www.naver.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Naver
        </a>
      </header>
    </div>
  );
}

export default App;
