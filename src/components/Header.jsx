import React from 'react'
import perfil from './../assets/perfil-3.png'

export default function Header() {
    return (
        <div className='container'>
            <div id="header">
                <div className='divFilho' id='divImg'>
                    <img src={perfil} alt="Perfil" />
                    <p>23 anos, Breu Branco-PA / Brasil</p>
                </div>
                <div className='divFilho' id='divName'>
                    <p style={{fontWeight: 'lighter'}}>Olá, eu sou o</p>
                    <p style={{fontWeight: 'bold', color:'#a15aba'}}>Jeremias Kalebe</p>
                    <p style={{fontWeight: 'lighter', color:'#bd93f9'}}>Android Developer | Computer Engineering</p>
                </div>
            </div>
        </div>
    )
}
