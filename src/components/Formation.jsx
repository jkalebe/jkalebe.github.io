import React from 'react'
import Pc from './../assets/pc1.svg'

export default function Formation() {
    return (
        <div id='formation'>
            <p id='divP'>Formação</p>
            <div id='divLiandImg'>
                <div id="divLi">
                    <li><p>Formando Engenharia da Computação, Universidade Federal do Pará(2016-2021)</p></li>
                    <li><p>Proposta de conclusão de curso: <a href="https://marcosamaris.github.io/laws/#/">"Laws - Ferramenta de anotação para gravações de midias!"</a></p></li>
                </div>
                <div id="divImg">
                    <img src={Pc} alt="PC" />
                </div>
            </div>
        </div>
    )
}