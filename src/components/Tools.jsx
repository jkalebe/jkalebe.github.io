import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'

function Tools() {
const size = '5em'
    return (
        <div className='container'>
        <div id="tools">
            <div className='divTitle'><p>Ferramentas</p></div>
            <div className='container-tools'>
                <div className='tecnologias'>
                    <AiFillHtml5 className='iconesTools' color={'#fff'} size={size}/>
                    <p>HTML</p>
                </div>
                <div className='tecnologias'>
                    <DiCss3 className='iconesTools' color={'#fff'} size={size}/>
                    <p>Css</p>
                </div>
                <div className='tecnologias'>
                    <IoLogoJavascript className='iconesTools' color={'#fff'} size={size}/>
                    <p>JavaScript</p>
                </div>
                <div className='tecnologias'>
                    <FaReact className='iconesTools' color={'#fff'} size={size}/>
                    <p>React</p>
                </div>
                <div className='tecnologias'>
                    <FaNodeJs className='iconesTools' color={'#fff'} size={size}/>
                    <p>NodeJS</p>
                </div>
                <div className='tecnologias'>
                    <SiMysql className='iconesTools' color={'#fff'} size={size}/>
                    <p>MySQL</p>
                </div>
                <div className='tecnologias'>
                    <SiMongodb className='iconesTools' color={'#fff'} size={size}/>
                    <p>MongoDB</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Tools
