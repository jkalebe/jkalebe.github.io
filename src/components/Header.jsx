import React from 'react'
import perfil from './../assets/perfil-2.png'

export default function Header() {
    return (
        <div className='container'>
            <div id="header">
                <div className='divFilho' id='divImg'>
                    <img src={perfil} alt="Perfil" />
                    <p>23 anos, Breu Branco-PA / Brasil</p>
                </div>
                <div className='divFilho' id='divName'>
                    <p>Jeremias Kalebe Cunha Estumano</p>
                    <p>Engenheiro da Computação</p>
                </div>
            </div>
        </div>
    )
}
