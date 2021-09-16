import React from 'react'
import perfil from './../assets/perfil.jpg'

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
                    <p>Formando Engenharia da Computação</p>
                </div>
            </div>
        </div>
    )
}
