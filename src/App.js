import './App.css';
import img from './assets/pc1.svg'

import Header from './components/Header';
import Formation from './components/Formation';
import Xperiencie from './components/Xperiencie';
import Portfolio from './components/Portfolio';
import Tools from './components/Tools'
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Formation/>
      <Xperiencie/>
      <Portfolio/>
      <Tools/>
      <Contact/>
      <div id='end'>
        <a href=""><img src={img} alt="Laptop" /></a>
      </div>
    </div>
  );
}

export default App;
