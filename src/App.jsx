import './App.css';
import img from './assets/pc1.svg'

import NavBar from './components/NavBar.jsx'
import Header from './components/Header.jsx';
import Formation from './components/Formation.jsx';
import Xperiencie from './components/Xperiencie.jsx';
import Portfolio from './components/Portfolio.jsx';
import Tools from './components/Tools.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div >
      <NavBar />
      <div className='app'>
        <div className='container'>
          <Header/>
          <Xperiencie/>
          <Tools/>
          <Contact/>
          <section className="academic-section" id="academic" aria-labelledby="academic-title">
            <h2 id="academic-title" lang="en">Academic and Projects</h2>
            <p className="academic-intro">Minha formação e os projetos que marcaram o início da minha trajetória em desenvolvimento.</p>
            <div className="academic-grid">
              <Formation/>
              <Portfolio/>
            </div>
          </section>
          <div id='end'>
            <a href="#header"><img style={{maxWidth: '15rem'}} src={img} alt="Laptop" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
