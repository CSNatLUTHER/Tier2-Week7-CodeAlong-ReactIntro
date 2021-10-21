// imports make resources available to this component

import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

// function name the same as file will be the component itself
function App() {
  // components return JSX ( similar to HTML ), which is what is shown on the DOM
  return (
    // use "className" instead of "class"
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

// always be sure to export the component so it can be imported elsewhere
export default App;
