import React from 'react'
import Pc from './../assets/computer-illustration.png'

export default function Formation() {
    return (
            <div className='mb-2' id='formation'>
                <h2 className='title'>Formação</h2>
                    <div className='align-items-zcenter flex flex-column flex-row align-items-center' id='divLi'>
                    <div className='px-2 full-width text'>
                        <p className='txt-p bold'>Engenharia da Computação · Universidade Federal do Pará (2016–2021)</p>
                        <p className='txt-p bold'>Projeto de conclusão de curso: <a target='_blank' style={{color: '#C8A2C8'}} href="https://marcosamaris.github.io/laws/#/">Laws, ferramenta para anotar gravações audiovisuais</a></p>
                        <h3 className='subtitle'>Certificações</h3>
                        <ul>
                            <li>Android Clean Architecture com MVVM, Jetpack e Kotlin · Udemy, setembro de 2022</li>
                            <li>Desenvolvimento Android Completo · Udemy, fevereiro de 2022</li>
                        </ul>
                    </div>
                    <div className='px-2 image2' id="divImg">
                        <img className='image' style={{width: '15rem'}} src={Pc} alt="PC" />
                    </div>
                </div>
            </div>
    )
}
