import React from 'react'

function Xperiencie() {
    return (
        <div className='container'>
            <div  id='xperiencia'>
                <div className='divTitle'>
                    <p>Experiência</p> 
                </div>
            <div   className='divXperiencia'>
                <div className='div'>
                    <p>Interno-Codificação desde o Ensino Médio</p>
                    <p>(2019-2020)</p>
                    <p>IFPA-Instituto Federal do Pará / campus Tucuruí</p>
                    <p className='conteudo'>Participou, como bolsista de um projeto do Edital Navega Saberes oferecido pela UFPA. 
                        Atuando como professor de algoritmos basicos. O objetivo do projeto foi influenciar alunos do ensino a utilizar
                        programação e possivelmente, ingressar em uma faculdade de computação.</p>
                    <ul className='conteudo' style={{color:'#fff'}}>
                        <li>Desenvolvi minha de apresentação em público</li>
                        <li>Desenvolvi minha metodologia de ensino</li>
                        
                        <li>Apresentei projetos práticos em python,
                        que foram jogo do Pacman, jogo da Snake e uma simples Calculadora com interface funcional!</li>
                    </ul>
                </div>
                <div className='div'>
                    <p>Interno-MoveOn</p>
                    <p>(2018-2019)</p>
                    <p>NDAE-Nucleo de desenvolvimento</p>
                    <p className='conteudo'>Participou como desenvolvedor no projeto MoveOn-Aplicativo móvel para mapeamento de setores que dispõe de acessibilidade na
                    cidade de Tucuruí-PA; Desenvolvido na linguagem Java; Uso do software Android Studio</p>
                    <ul className='conteudo' style={{color:'#fff'}}>
                        <li>Criação de Layouts em XML</li>
                        <li>Criação de uma api para armazenar os dados</li>
                        <li>Consumo da api de dados criada para o app</li>
                        <li>Consumo da api Google Sign-In</li>
                        <li>Criação de um Slide Screen para apresentação do aplicativo.</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Xperiencie
