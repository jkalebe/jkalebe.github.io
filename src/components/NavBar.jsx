import React, { Component, useState } from 'react'
import './navbar.css'



export default function NavBar() {
const [active, setActive] = useState('nav__menu');
const [toggleIcon, setToggleIcon] = useState("nav__toggler");

const navToggle = () =>{
    active === 'nav__menu' ? setActive('nav__menu nav__active'): setActive('nav__menu')
    // TogglerIcon

    toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler')
}

        return (
            <nav className='nav'>
                <a href="#" className='nav__brand'>Portfólio</a>
                <ul className={active}>
                <li className="nav__item"><a href='#' className='nav__link'>Home</a></li>
                <li className="nav__item"><a href='#formation' className='nav__link'>Formação</a></li>
                <li className="nav__item"><a href='#xperiencia' className='nav__link'>Experiência</a></li>           
                <li className="nav__item"><a href='#portfolio' className='nav__link'>Portfólio</a></li>
                <li className="nav__item"><a href='#contact' className='nav__link'>Contato</a></li>
                </ul>
                <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
                </div>
            </nav>
    )
}
