import React,{Component} from 'react'
import './carrousel.css'
import Movie from './../assets/AppMovieInfo.gif'
import MoveOn from './../assets/MoveOn.gif'
import Music from './../assets/AppMusic.gif'
import Quiz from './../assets/AppQuiz.gif'
import AppBookLivros from './../assets/AppBookLivros.gif'

export default class Portfolio extends Component {
  
  render() {
    return (
          <div className='mt-2' id='portfolio'>
            <h2 className='title'>Portfólio</h2>
            <section id="slideshow">
                <div className="entire-content">
                  <div className="content-carrousel">
                    <figure className="shadow"><img src={Movie}/></figure>
                    <figure className="shadow"><img src={MoveOn}/></figure>
                    <figure className="shadow"><img src={Music}/></figure>
                    <figure className="shadow"><img src={Quiz}/></figure>
                    <figure className="shadow"><img src={AppBookLivros}/></figure>
              </div>
            </div>
          </section>
        </div>
    )
  }
}

