import { FiArrowUpRight, FiFolder, FiPlay } from 'react-icons/fi';

const projects = [
  {
    name: 'App Movie Info',
    repo: 'https://github.com/jkalebe/AppMovieInfo',
    demo: 'https://res.cloudinary.com/nenhum/image/upload/v1648673211/AppMovieInfo_yfojai.gif',
  },
  {
    name: 'MoveOn',
    repo: 'https://github.com/jkalebe/MoveOn',
    demo: 'https://res.cloudinary.com/nenhum/image/upload/v1648474613/moveOn_stuwxw.gif',
  },
  {
    name: 'App Music Player',
    repo: 'https://github.com/jkalebe/AppMusicPlayer',
    demo: 'https://res.cloudinary.com/nenhum/image/upload/v1648474615/AppMusic_tnrdvv.gif',
  },
  {
    name: 'App Quiz',
    repo: 'https://github.com/EASY-CODES/AppQuiz',
    demo: 'https://res.cloudinary.com/nenhum/image/upload/v1648474615/AppQuiz_taqlbi.gif',
  },
  {
    name: 'App Google Books',
    repo: 'https://github.com/jkalebe/AppGooglebooks',
    demo: 'https://res.cloudinary.com/nenhum/image/upload/v1648474614/AppBookLivros_ouhcl2.gif',
  },
  {
    name: 'Projeto MDT',
    repo: 'https://github.com/PROJECT-MDT/mobile',
    demo: 'https://res.cloudinary.com/nenhum/image/upload/v1648669695/show_mdt_uf6sdu.gif',
  },
  {
    name: 'Apenas Notícias',
    repo: 'https://github.com/jkalebe/ApenasNoticias',
    demo: 'https://res.cloudinary.com/nenhum/image/upload/v1648673905/ApenasNoticias_pwjjbl.gif',
  },
];

export default function Portfolio() {
  return (
    <article className="academic-panel" id="portfolio">
      <h3><FiFolder aria-hidden="true" /> Projetos pessoais e acadêmicos</h3>
      <ul className="academic-projects">
        {projects.map(({ name, repo, demo }) => (
          <li key={name}>
            <a className="academic-project-name" href={repo} target="_blank" rel="noopener noreferrer">
              {name} <FiArrowUpRight aria-hidden="true" />
            </a>
            <a className="academic-demo" href={demo} target="_blank" rel="noopener noreferrer" aria-label={`Demonstração de ${name}`}>
              <FiPlay aria-hidden="true" /> Demo
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
