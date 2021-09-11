import Header from './components/Header';
import Formation from './components/Formation';
import Xperiencie from './components/Xperiencie';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import React from 'react';
import {Route} from 'react-router-dom'

export default function Rotas() {
    return (
        <div>
            <Route path="" render={props => <Header/>}/>
            <Route path="" render={props => <Formation/>}/>
            <Route path="" render={props => <Xperiencie/>}/>
            <Route path="" render={props => <Portfolio/>}/>
            <Route path="" render={props => <Contact/>}/>
        </div>
    )
}
