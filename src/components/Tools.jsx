import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {DiJava} from 'react-icons/di'
import {SiAndroidstudio} from 'react-icons/si'
import {SiKotlin} from 'react-icons/si'
import {GiJetpack} from 'react-icons/gi'
import {AiFillGithub} from 'react-icons/ai'

function Tools() {
const size = '5em'
const color = '#fff'
    return (
        <div className='mt-2 mb-2' id="tools">
            <p className='title'>Ferramentas</p>
            <div className='container-tools'>
                {/* <div className='tecnologias'>
                    <AiFillHtml5 className='iconesTools' color={color} size={size}/>
                    <p>HTML</p>
                </div>
                <div className='tecnologias'>
                    <DiCss3 className='iconesTools' color={color} size={size}/>
                    <p>Css</p>
                </div>
                <div className='tecnologias'>
                    <IoLogoJavascript className='iconesTools' color={color} size={size}/>
                    <p>JavaScript</p>
                </div>
                <div className='tecnologias'>
                    <FaReact className='iconesTools' color={color} size={size}/>
                    <p>React</p>
                </div>
                <div className='tecnologias'>
                    <FaNodeJs className='iconesTools' color={color} size={size}/>
                    <p>NodeJS</p>
                </div> */}
                <div className='tecnologias'>
                    <SiMysql className='iconesTools' color={color} size={size}/>
                    <p>MySQL</p>
                </div>
                <div className='tecnologias'>
                    <SiMongodb className='iconesTools' color={color} size={size}/>
                    <p>MongoDB</p>
                </div>
                <div className='tecnologias'>
                    <DiJava className='iconesTools' color={color} size={size}/>
                    <p>Java</p>
                </div>
                <div className='tecnologias'>
                    <SiAndroidstudio className='iconesTools' color={color} size={size}/>
                    <p>Android Studio</p>
                </div>
                <div className='tecnologias'>
                    <GiJetpack className='iconesTools' color={color} size={size}/>
                    <p>Jetpack</p>
                </div>
                <div className='tecnologias'>
                    <SiKotlin className='iconesTools' color={color} size={size}/>
                    <p>Kotlin</p>
                </div>
                <div className='tecnologias'>
                    <AiFillGithub className='iconesTools' color={'#fff'} size={size}/>
                    <p>Github</p>
                </div>


            </div>
        </div>
    )
}

export default Tools
