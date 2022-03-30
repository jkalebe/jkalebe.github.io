import React,{Component} from 'react'
import './carrousel.css'

const MDT = 'https://res.cloudinary.com/nenhum/image/upload/v1648669695/show_mdt_uf6sdu.gif'
const MoveOn = 'https://res.cloudinary.com/nenhum/image/upload/v1648474613/moveOn_stuwxw.gif'
const Movie = 'https://res.cloudinary.com/nenhum/image/upload/v1648673211/AppMovieInfo_yfojai.gif'
const Music = 'https://res.cloudinary.com/nenhum/image/upload/v1648474615/AppMusic_tnrdvv.gif'
const Quiz = 'https://res.cloudinary.com/nenhum/image/upload/v1648474615/AppQuiz_taqlbi.gif'
const AppBookLivros = 'https://res.cloudinary.com/nenhum/image/upload/v1648474614/AppBookLivros_ouhcl2.gif'  
const ApenasNoticias = 'https://res.cloudinary.com/nenhum/image/upload/v1648673905/ApenasNoticias_pwjjbl.gif'  
export default class Portfolio extends Component {
  
  render() {
    return (
          <div className='mt-2' id='portfolio'>
            <h2 className='title'>Portfólio</h2>
            <section id="slideshow">
                <div className="entire-content">
                  <div className="content-carrousel">
                    <figure className="shadow"><a target='_blank' href='https://github.com/jkalebe/AppMovieInfo'><img src={Movie}/></a></figure>
                    <figure className="shadow"><a target='_blank' href='https://github.com/jkalebe/MoveOn'><img src={MoveOn}/></a></figure>
                    <figure className="shadow"><a target='_blank' href='https://github.com/jkalebe/AppMusicPlayer'><img src={Music}/></a></figure>
                    <figure className="shadow"><a target='_blank' href='https://github.com/EASY-CODES/AppQuiz'><img src={Quiz}/></a></figure>
                    <figure className="shadow"><a target='_blank' href='https://github.com/jkalebe/AppGooglebooks'><img src={AppBookLivros}/></a></figure>
                    <figure className="shadow"><a target='_blank' href='https://github.com/PROJECT-MDT/mobile'><img src={MDT}/></a></figure>
                    <figure className="shadow"><a target='_blank' href='https://github.com/jkalebe/ApenasNoticias'><img src={ApenasNoticias}/></a></figure>
              </div>
            </div>
          </section>
        </div>
    )
  }
}

