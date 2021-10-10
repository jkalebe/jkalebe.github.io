import React from 'react'
import Pc from './../assets/pc1.svg'

export default function Formation() {
    return (
        <div className='container'>
            <div id='formation'>
                <p className='divTitle'>Formação</p>
                    <div id='divLiandImg'>
                    <div id="divLi">
                        <li><p>Engenheiro da Computação, Universidade Federal do Pará(2016-2021)</p></li>
                        <li><p>Projeto de conclusão de curso: <a target='_blank' href="https://marcosamaris.github.io/laws/#/">"Laws - Ferramenta de anotação para gravações de midias!"</a></p></li>
                    </div>
                    <div id="divImg">
                        <img style={{width: '15rem'}} src={Pc} alt="PC" />
                    </div>
                </div>
            </div>
        </div>
    )
}
