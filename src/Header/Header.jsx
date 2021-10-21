// importing just "useState from the 'react' package"
import { useState } from 'react';
import logo from '../logo.svg';

function Header() {
    // const [name, setName] = useState( null );
    return(
        <header className="App-header">
        {/* {logo} is an example of an expression  - see import logo from './logo.svg' */}
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
    )
}

export default Header