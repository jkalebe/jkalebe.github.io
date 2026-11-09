import './App.css';
import { FiArrowUp } from 'react-icons/fi';

import NavBar from './components/NavBar.jsx'
import Header from './components/Header.jsx';
import Formation from './components/Formation.jsx';
import Xperiencie from './components/Xperiencie.jsx';
import Portfolio from './components/Portfolio.jsx';
import Tools from './components/Tools.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Header />
        <Xperiencie />
        <Tools />
        <Contact />
        <section className="academic-section" id="academic" aria-labelledby="academic-title">
          <h2 id="academic-title" lang="en">Academic and Projects</h2>
          <p className="academic-intro">Minha formação e os projetos que marcaram o início da minha trajetória em desenvolvimento.</p>
          <div className="academic-grid">
            <Formation />
            <Portfolio />
          </div>
        </section>
      </main>
      <footer className="container site-footer">
        <span>Jeremias Kalebe</span>
        <a href="#header">Voltar ao topo <FiArrowUp aria-hidden="true" /></a>
      </footer>
    </>
  );
}

export default App;
