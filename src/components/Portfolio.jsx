import React,{Component} from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './../assets/AppMovieInfo.gif'
import MoveOn from './../assets/MoveOn.gif'
import Music from './../assets/AppMusic.gif'
import Quiz from './../assets/AppQuiz.gif'
import AppBookLivros from './../assets/AppBookLivros.gif'

// import appMoveOn from './../assets/app-moveon.gif'
import siteInstagran from './../assets/site-instagram.gif'


export default class Portfolio extends Component {
  
  render() {
    const size = '3em';
    return (
      
      <div className='container'>
        <div id='portfolio'>
            <div><p className='divTitle'>Portfólio</p></div>
            <Carousel >
            <Carousel.Item>
            <h5 style={{color:"#ffffff"}}>AppMusic</h5>
            <div style={{padding: '10px 0'}}>
              <a target='_blank' href='https://github.com/jkalebe/AppMusicPlayer'><img
                style={{height: '30rem'}}
                src={Music}
                alt="Third slide"
                /></a>
            </div>
            <p style={{color:"#ffffff", paddingBottom: '30px'}}>É um player de músicas. </p>        
              </Carousel.Item>
              <Carousel.Item>
              <h5 style={{color:"#ffffff"}}>App MoveOn</h5>
              <div style={{padding: '10px 0'}}>
                <a target='_blank' href='https://github.com/jkalebe/MoveOn'><img
              style={{height: '30rem'}}
              src={MoveOn}
              alt="Third slide"
              /></a>
              </div>
              <p style={{color:"#ffffff", paddingBottom: '30px'}}>Aplicativo que mostra pontos de acessibilidade na cidade de Tucuruí</p> 
              </Carousel.Item>
            <Carousel.Item>
              <h5 style={{color:"#ffffff"}}>AppMovieInfo</h5>
              <div style={{padding: '10px 0'}}>
                <a target='_blank' href='https://github.com/jkalebe/AppMovieInfo'><img
              style={{height: '30rem'}}
              src={Movie}
              alt="Third slide"
              /></a>
              </div>
              <p style={{color:"#ffffff", paddingBottom: '30px'}}>Aplicativo que mostra informações de filmes.</p>
              </Carousel.Item>
              <Carousel.Item>
              <h5 style={{color:"#ffffff"}}>AppBookLivros</h5>
              <div style={{padding: '10px 0'}}>
                <a target='_blank' href='https://github.com/jkalebe/AppGooglebooks'><img
              style={{height: '30rem'}}
              src={AppBookLivros}
              alt="Third slide"
              /></a>
              </div>
              <p style={{color:"#ffffff", paddingBottom: '30px'}}>App que exibe informações de livros.</p>
              </Carousel.Item>
              <Carousel.Item>
              <h5 style={{color:"#ffffff"}}>Quiz</h5>
              <div style={{padding: '10px 0'}}>
                <a target='_blank' href='https://github.com/EASY-CODES/AppQuiz'><img
              style={{height: '30rem'}}
              src={Quiz}
              alt="Third slide"
              /></a>
              </div>
              <p style={{color:"#ffffff", paddingBottom: '30px'}}>É um app com perguntas que possui alternativas de múltiplas escolhas.</p>
              </Carousel.Item>
              
          </Carousel>
        </div>
      </div>
    )
  }
}

