import './App.css';
import Header from './components/Header';
import Formation from './components/Formation';
import Xperiencie from './components/Xperiencie';
import Portfolio from './components/Portfolio';
import Tools from './components/Tools'
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header/>
      <Formation/>
      <Xperiencie/>
      <Portfolio/>
      <Tools/>
      <Contact/>
      <div>
        <a href=""><img src="../../assets/laptop.png" alt="Laptop" /></a>
      </div>
    </div>
  );
}

export default App;
