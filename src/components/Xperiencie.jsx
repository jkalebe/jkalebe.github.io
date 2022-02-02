import React from 'react'

function Xperiencie() {
    return (
            <div className='mb-2' id='xperiencia'>
                <h2 className='title'>Experiência</h2> 
                <div className='flex flex-column flex-row'>
                    <div className='px-2 full-width'>
                        <p className='subtitle'>Interno-Codificação desde o Ensino Médio</p>
                        <p className='txt-p bold'>(2019-2020)</p>
                        <p className='conteudo bold txt-p'>IFPA-Instituto Federal do Pará / campus Tucuruí</p>
                        <p className='conteudo'>Participação como bolsista de um projeto do Edital Navega Saberes oferecido pela UFPA. 
                            Atuando como professor de algoritmos basicos. O objetivo do projeto foi influenciar alunos do ensino a utilizar
                            programação e possivelmente, ingressar em uma faculdade de computação.</p>
                        <div className='conteudo' style={{color:'#fff'}}>
                            <li>Desenvolvimento de apresentação em público</li>
                            <li>Desenvolvimento de metodologia de ensino</li>
                            
                            <li>Apresentação de projetos práticos em python: jogo do Pacman, jogo da Snake e Calculadora básica com interface funcional!</li>
                        </div>
                    </div>
                    <div className='px-2 full-width'>
                        <p className='subtitle'>Interno-MoveOn</p>
                        <p className='txt-p bold'>(2018-2019)</p>
                        <p className='conteudo txt-p bold '>NDAE-Nucleo de desenvolvimento</p>
                        <p className='conteudo'>Participação como desenvolvedor no projeto MoveOn-Aplicativo móvel para mapeamento de setores que dispõe de acessibilidade na
                        cidade de Tucuruí-PA; Desenvolvido na linguagem Java; Uso do software Android Studio</p>
                        <div className='conteudo' style={{color:'#fff'}}>
                            <li>Criação de Layouts em XML</li>
                            <li>Criação de uma api para armazenar os dados</li>
                            <li>Consumo da api de dados criada para o app</li>
                            <li>Consumo da api Google Sign-In</li>
                            <li>Criação de um Slide Screen para apresentação do aplicativo.</li>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Xperiencie
