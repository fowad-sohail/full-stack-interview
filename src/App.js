import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </Navbar>
    </div>
  );
}

export default App;
