import React from 'react'
import perfil from './../assets/perfil-3.png'

export default function Header() {
    return (
            <div className='mb-2 mt-2 align-items-center flex flex-column flex-row content-media-image'>
                <div  className='px-2 divFilho esquerda text-center'>
                    <img src={perfil} style={{width: '20rem'}} alt="Perfil" />
                    <p>24 anos, Breu Branco-PA / Brasil</p>
                </div>
                <div  className='px-2 full-width divFilho direita'>
                    <p className='txt-p'>Olá, eu sou o</p>
                    <p className='title'>Jeremias Kalebe</p>
                    <p className='txt-p' style={{color:'#bd93f9'}}>Android Developer | Computer Engineering</p>
                </div>
            </div>
    )
}
