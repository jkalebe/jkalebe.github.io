import { FiArrowDownRight, FiArrowUpRight, FiCode, FiMapPin, FiSmartphone } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="hero" id="header">
      <div className="hero-content">
        <p className="eyebrow">Desenvolvimento mobile</p>
        <h1>Jeremias <span>Kalebe</span></h1>
        <p className="hero-role">Android, Kotlin e Flutter</p>
        <p className="hero-description">
          Sou engenheiro da computação pela UFPA. Desenvolvo e mantenho aplicativos para mobilidade, delivery e outros produtos digitais.
        </p>
        <div className="hero-actions">
          <a className="action-primary" href="#xperiencia">Ver experiência <FiArrowDownRight aria-hidden="true" /></a>
          <a className="action-secondary" href="#contact">Fale comigo <FiArrowUpRight aria-hidden="true" /></a>
        </div>
        <p className="hero-location"><FiMapPin aria-hidden="true" /> Breu Branco, Pará · Brasil</p>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="hero-device">
          <div className="hero-device-top"><FiSmartphone /><span /></div>
          <div className="hero-device-code"><FiCode /></div>
          <div className="hero-device-lines"><i /><i /><i /></div>
          <div className="hero-device-home" />
        </div>
      </div>
    </header>
  );
}
