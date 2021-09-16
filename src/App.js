import './App.css';
import img from './assets/pc1.svg'

import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar.jsx'
import Header from './components/Header.jsx';
import Formation from './components/Formation.jsx';
import Xperiencie from './components/Xperiencie.jsx';
import Portfolio from './components/Portfolio.jsx';
import Tools from './components/Tools.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <div className='App'>
        <Header/>
        <Formation/>
        <Xperiencie/>
        <Portfolio/>
        <Tools/>
        <Contact/>
        <div id='end'>
          <a href="#header"><img src={img} alt="Laptop" /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
