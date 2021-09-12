import React from 'react'
import perfil from './../assets/perfil.jpg'

export default function Header() {
    return (
        <div id="header">
            <p>Jeremias Kalebe Cunha Estumano</p>
            <p>Formando Engenharia da Computação</p>
            <img src={perfil} alt="Perfil" />
            <p>23 anos, Breu Branco-PA / Brasil</p>
        </div>
    )
}
