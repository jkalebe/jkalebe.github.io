import './navbar.css';

export default function NavBar() {
  return (
    <nav className="site-nav" aria-label="Navegação principal">
      <div className="container site-nav-inner">
        <a className="site-brand" href="#header"><span aria-hidden="true">JK</span> Jeremias Kalebe</a>
        <ul className="site-nav-links">
          <li><a href="#xperiencia">Experiência</a></li>
          <li><a href="#tools">Stack</a></li>
          <li><a href="#contact">Contato</a></li>
          <li><a href="#academic">Formação e projetos</a></li>
        </ul>
      </div>
    </nav>
  );
}
