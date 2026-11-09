import ComputerWithCode from './ComputerWithCode.jsx';

export default function Header() {
  return (
    <div id="header" className="mb-2 mt-2 align-items-center flex flex-column">
      <div className="comp-relative">
        <ComputerWithCode />
      </div>
      <div className="px-2 full-width direita">
        <p className="txt-p">Olá, eu sou o</p>
        <h1 className="title">Jeremias Kalebe</h1>
        <p className="txt-p" style={{ color: '#bd93f9' }}>Desenvolvedor mobile · Android e Flutter</p>
        <p className="txt-p">Sou engenheiro da computação pela UFPA e desenvolvo e mantenho aplicativos para mobilidade, delivery e outros produtos digitais.</p>
        <p className="txt-p">Breu Branco, Pará · Brasil</p>
      </div>
    </div>
  );
}
