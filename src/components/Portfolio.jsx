import React,{Component} from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import siteDesafio from './../assets/site-desafio.gif'
import siteEcommerce from './../assets/site-ecommerce.gif'
import siteLaws from './../assets/site-laws.gif'
// import appMoveOn from './../assets/app-moveon.gif'
import siteInstagran from './../assets/site-instagram.gif'


export default class Portfolio extends Component {
  render() {
    return (
      <div className='container'>
        <div id='portfolio'>
            <div className='divTitle'><p>Portfólio</p></div>
            <Carousel >
              <Carousel.Item >
              <img
              style={{height: '15rem'}}
              className="d-block w-100"
              src={siteLaws}
              alt="First slide"
              />
              </Carousel.Item>
              <Carousel.Item>              
              <img
              style={{height: '15rem'}}
              className="d-block w-100"
              src={siteEcommerce}
              alt="First slide"
              />

              </Carousel.Item>
              <Carousel.Item>
              <img
              style={{height: '15rem'}}
              className="d-block w-100"
              src={siteDesafio}
              alt="Second slide"
              />
              
              </Carousel.Item>
              <Carousel.Item>
              <img
              style={{height: '15rem'}}
              className="d-block w-100"
              src={siteInstagran}
              alt="Third slide"
              />
              
              </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}

