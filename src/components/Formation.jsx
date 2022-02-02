import React from 'react'
import Pc from './../assets/computer-illustration.png'

export default function Formation() {
    return (
            <div className='mb-2' id='formation'>
                <p className='title'>Formação</p>
                    <div className='align-items-zcenter flex flex-column flex-row align-items-center' id='divLi'>
                    <div className='px-2 full-width text' id="divLi">
                        <li><p className='txt-p bold'>Engenheiro da Computação, Universidade Federal do Pará(2016-2021).</p></li>
                        <li><p className='txt-p bold'>Projeto de conclusão de curso: <a target='_blank' style={{color: '#C8A2C8'}} href="https://marcosamaris.github.io/laws/#/">"Laws - Ferramenta de anotação para gravações de midias."</a></p></li>
                    </div>
                    <div className='px-2 image2' id="divImg">
                        <img className='image' style={{width: '15rem'}} src={Pc} alt="PC" />
                    </div>
                </div>
            </div>
    )
}
