import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Employee />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about React
        </a>
      </header>
    </div>
  );
}

export default App;
