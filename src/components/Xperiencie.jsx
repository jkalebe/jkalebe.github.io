const projects = [
  {
    name: '21Driver',
    date: 'Novembro de 2024',
    description: 'Atualização e manutenção dos aplicativos de motoristas e passageiros.',
  },
  {
    name: 'VO2 ProFitness',
    date: 'Setembro a outubro de 2024',
    description: 'Aplicativo para receber sinais do ventilômetro da CEFISE, acompanhar treinos aeróbios e exportar registros de frequência cardíaca.',
  },
  {
    name: 'Conesales',
    date: 'Fevereiro de 2024',
    description: 'Desenvolvimento e manutenção de aplicativos, incluindo integração com o ERP Coneplus e com pagamentos PayGo.',
  },
  {
    name: 'Weapp Delivery',
    date: 'Março de 2023',
    description: 'Desenvolvimento mobile para produtos voltados a operações de delivery.',
  },
];

export default function Xperiencie() {
  return (
    <section className="mb-2" id="xperiencia">
      <h2 className="title">Experiência em projetos</h2>
      <div className="experience-grid">
        {projects.map(({ name, date, description }) => (
          <article className="experience-card" key={name}>
            <h3 className="subtitle">{name}</h3>
            <p className="experience-date">{date}</p>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
