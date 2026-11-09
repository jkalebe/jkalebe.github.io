import { FiArrowUpRight } from 'react-icons/fi';
import { LuGraduationCap } from 'react-icons/lu';

export default function Formation() {
  return (
    <article className="academic-panel" id="formation">
      <h3><LuGraduationCap aria-hidden="true" /> Formação e certificações</h3>
      <div className="academic-degree">
        <span>2016–2021</span>
        <h4>Engenharia da Computação</h4>
        <p>Universidade Federal do Pará</p>
      </div>
      <p className="academic-thesis">
        Trabalho de conclusão de curso
        <a href="https://marcosamaris.github.io/laws/#/" target="_blank" rel="noopener noreferrer">
          Laws <FiArrowUpRight aria-hidden="true" />
        </a>
        <span>Ferramenta para anotar gravações audiovisuais.</span>
      </p>
      <h4 className="academic-certificate-title">Certificações</h4>
      <ul className="academic-certificates">
        <li>
          Android Clean Architecture com MVVM, Jetpack e Kotlin
          <small>Udemy · setembro de 2022</small>
        </li>
        <li>
          Desenvolvimento Android Completo
          <small>Udemy · fevereiro de 2022</small>
        </li>
      </ul>
    </article>
  );
}
