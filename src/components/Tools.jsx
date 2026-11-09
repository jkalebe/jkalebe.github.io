import { useEffect, useRef } from 'react';
import { DiJava } from 'react-icons/di';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  SiAndroid,
  SiAndroidstudio,
  SiDart,
  SiFigma,
  SiFlutter,
  SiGithubactions,
  SiGradle,
  SiJetpackcompose,
  SiJira,
  SiKotlin,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skills = [
  'MVVM',
  'AI-First Engineering',
  'CI/CD com GitHub Actions',
  'Kotlin',
  'Kotlin Multiplatform (KMP)',
  'Jetpack Compose',
];

const tools = [
  { name: 'Figma', Icon: SiFigma },
  { name: 'Android Studio', Icon: SiAndroidstudio },
  { name: 'VS Code', Icon: VscVscode },
  { name: 'Jira', Icon: SiJira },
  { name: 'Android', Icon: SiAndroid },
  { name: 'Jetpack Compose', Icon: SiJetpackcompose },
  { name: 'Kotlin', Icon: SiKotlin },
  { name: 'Gradle', Icon: SiGradle },
  { name: 'Java', Icon: DiJava },
  { name: 'Flutter', Icon: SiFlutter },
  { name: 'Dart', Icon: SiDart },
  { name: 'GitHub Actions', Icon: SiGithubactions },
];

export default function Tools() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const motion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    let frame;
    let lastTime;
    let remainder = 0;

    function animate(time) {
      const elapsed = Math.min(time - (lastTime ?? time), 50);
      lastTime = time;

      if (!motion?.matches) {
        const loopWidth = track.children[tools.length].offsetLeft;
        const distance = remainder + elapsed * 0.022;
        const pixels = Math.floor(distance);
        remainder = distance - pixels;
        if (pixels && loopWidth) {
          track.scrollLeft = (track.scrollLeft + pixels) % loopWidth;
        }
      }

      frame = window.requestAnimationFrame(animate);
    }

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function scrollTools(direction) {
    const track = trackRef.current;
    const loopWidth = track.children[tools.length].offsetLeft;
    if (loopWidth) {
      track.scrollLeft = (track.scrollLeft + direction * track.clientWidth + loopWidth) % loopWidth;
    }
  }

  return (
    <section className="mt-2 mb-2" id="tools" aria-labelledby="stack-title">
      <h2 className="title" id="stack-title">Stack e ferramentas</h2>
      <ul className="stack-skills" aria-label="Competências">
        {skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
      <div className="tools-carousel" role="group" aria-label="Carrossel de ferramentas">
        <button type="button" aria-label="Ferramentas anteriores" aria-controls="tools-track" onClick={() => scrollTools(-1)}>
          <FiChevronLeft aria-hidden="true" />
        </button>
        <ul className="tools-track" id="tools-track" ref={trackRef} tabIndex={0} aria-label="Ferramentas">
          {[...tools, ...tools].map(({ name, Icon }, index) => (
            <li className="tool-card" key={index} aria-hidden={index >= tools.length || undefined}>
              <Icon aria-hidden="true" size="2.5rem" />
              <span>{name}</span>
            </li>
          ))}
        </ul>
        <button type="button" aria-label="Próximas ferramentas" aria-controls="tools-track" onClick={() => scrollTools(1)}>
          <FiChevronRight aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
