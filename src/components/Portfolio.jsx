import React,{Component} from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import siteDesafio from './../assets/site-desafio.gif'
import siteEcommerce from './../assets/site-ecommerce.gif'
import siteLaws from './../assets/laws.gif'
import Movie from './../assets/Movie.gif'
import MoveOn from './../assets/MoveOn.gif'
import Music from './../assets/AppMusic.gif'
import MovieInfo from './../assets/MovieInfo.gif'
// import appMoveOn from './../assets/app-moveon.gif'
import siteInstagran from './../assets/site-instagram.gif'


export default class Portfolio extends Component {
  render() {
    return (
      <div className='container'>
        <div id='portfolio'>
            <div className='divTitle'><p>Portfólio</p></div>
            <Carousel >
            <Carousel.Item>
              <a target='_blank' href='https://github.com/jkalebe/AppMusicPlayer'><img
              style={{height: '20rem'}}
              src={Music}
              alt="Third slide"
              /></a>              
              </Carousel.Item>
              
              <Carousel.Item >
              <a target='_blank' href='https://github.com/marcosamaris/laws'><img
              style={{height: '20rem'}}
              src={siteLaws}
              alt="First slide"
              /></a>
              </Carousel.Item>
              
            <Carousel.Item>
              <a target='_blank' href=''><img
              style={{height: '20rem'}}
              src={Movie}
              alt="Third slide"
              /></a>
              </Carousel.Item>

              <Carousel.Item >
              <a target='_blank' href='https://github.com/jkalebe/Movie_info'><img
              style={{height: '20rem'}}
              src={MovieInfo}
              alt="First slide"
              /></a>
              </Carousel.Item>

              <Carousel.Item>              
              <a target='_blank' href='https://github.com/jkalebe/site-ecommerce'><img
              style={{height: '20rem'}}
              src={siteEcommerce}
              alt="First slide"
              /></a>
              </Carousel.Item>

              <Carousel.Item>
              <a target='_blank' href='https://github.com/jkalebe/servidor-local-node-pagina-web-react'><img
              style={{height: '20rem'}}
              src={siteDesafio}
              alt="Second slide"
              /></a>
              </Carousel.Item>

              <Carousel.Item>
              <a target='_blank' href=''><img
              style={{height: '20rem'}}
              src={siteInstagran}
              alt="Third slide"
              /></a>
              
              </Carousel.Item>

              <Carousel.Item>
              <a target='_blank' href='https://github.com/jkalebe/MoveOn'><img
              style={{height: '20rem'}}
              src={MoveOn}
              alt="Third slide"
              /></a>
              </Carousel.Item>

          </Carousel>
        </div>
      </div>
    )
  }
}

