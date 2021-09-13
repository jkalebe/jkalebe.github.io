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
        <div id="tools">
            <div><p>Ferramentas</p></div>
            <AiFillHtml5 className='iconesTools' color={'#fff'} size={size}/>
            <DiCss3 className='iconesTools' color={'#fff'} size={size}/>
            <IoLogoJavascript className='iconesTools' color={'#fff'} size={size}/>
            <FaReact className='iconesTools' color={'#fff'} size={size}/>
            <FaNodeJs className='iconesTools' color={'#fff'} size={size}/>
            <SiMysql className='iconesTools' color={'#fff'} size={size}/>
            <SiMongodb className='iconesTools' color={'#fff'} size={size}/>

        </div>
    )
}

export default Tools
