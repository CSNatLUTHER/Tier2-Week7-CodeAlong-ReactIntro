// imports make resources available to this component
import logo from './logo.svg';
import './App.css';
import Body from './Body/Body';
import Footer from './Footer/Footer';

// function name the same as file will be the component itself
function App() {
  // components return JSX ( similar to HTML ), which is what is shown on the DOM
  return (
    // use "className" instead of "class"
    <div className="App">
      <header className="App-header">
        {/* {logo} is an example of an express  - see import logo from './logo.svg' */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HELLO WORLD!
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
      <Body />
      <Footer />
    </div>
  );
}

// always be sure to export the component so it can be imported elsewhere
export default App;
