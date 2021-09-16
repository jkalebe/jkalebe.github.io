import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import siteDesafio from './../assets/site-desafio.gif'
import siteLaws from './../assets/site-laws.gif'
import appMoveOn from './../assets/app-moveon.gif'

function Portfolio() {
    return (
      <div className='container'>
        <div id='portfolio'>
            <div className='divTitle'><p>Portfólio</p></div>
            <AwesomeSlider 
            media={[
                {
                  source: appMoveOn,
                },
                {
                  source: siteLaws,
                },
                {
                  source: siteDesafio,
                }
              ]}
            />
        </div>
      </div>
    )
}

export default Portfolio
