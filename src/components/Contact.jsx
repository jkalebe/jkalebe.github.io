import React from 'react'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoWhatsapp} from 'react-icons/io'
import {SiGmail} from 'react-icons/si'
import {FaLinkedin} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'



function Contact() {
    const size='3em'
    return (
        <div id='contact'>
            <div><p className='divTitle'>Contato</p></div>
                <a target="_blank" href="https://www.instagram.com/kalebe317/"><FiInstagram className='iconesTools' color={'#fff'} size={size}/></a>
                <a target="_blank" href="https://www.linkedin.com/in/jeremias-kalebe-cunha-estumano-5990b621b/"><FaLinkedin className='iconesTools' color={'#fff'} size={size}/></a>
                <a target="_blank" href="https://api.whatsapp.com/send/?phone=5594992727306&text&app_absent=0"><IoLogoWhatsapp className='iconesTools' color={'#fff'} size={size}/></a>
                <a target="_blank" href="https://mail.google.com/mail/u/0/?fs=1&to=jeremiaskalebe@gmail.com&tf=cm"><SiGmail className='iconesTools' color={'#fff'} size={size}/></a>
                <a target="_blank" href="https://github.com/jkalebe"><AiFillGithub className='iconesTools' color={'#fff'} size={size}/></a>
        </div>
    )
}

export default Contact
