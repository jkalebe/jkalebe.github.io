import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import siteDesafio from './../assets/site-desafio.gif'
import siteLaws from './../assets/site-laws.gif'

function Portfolio() {
    return (
        <div id='portfolio'>
            <div><p>Portfólio</p></div>
            <AwesomeSlider 
            media={[
                {
                  source: siteDesafio,
                },
                {
                  source: siteLaws,
                }
              ]}
            />

        </div>
    )
}

export default Portfolio
