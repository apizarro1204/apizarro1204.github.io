import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
        <h1>TU UNIVERSIDAD</h1>
        <p>Eres protagonista de tu aprendizaje</p>
        <button className='btn'>Conoce más <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero