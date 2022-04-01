import React from 'react'
import ComputerWithCode from './ComputerWithCode.jsx'


const perfil = 'https://res.cloudinary.com/nenhum/image/upload/v1648678104/perfil-3_yxlqmy.png'

export default function Header() {
    return (
            <div className='mb-2 mt-2 align-items-center flex flex-column flex-row'>
                <div className='comp-relative'>
                    <ComputerWithCode/>
                </div>
                <div  className='px-2 divFilho esquerda text-center'>
                    <img className='content-media-image' src={perfil} style={{width: '20rem'}} alt="Perfil" />
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
