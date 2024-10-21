import React from 'react'
import './About.css'
import VideoPlayer from '../VideoPlayer/VideoPlayer.jsx'


function About() {
  return (
    <div className='about'>
        <div className="about-left">
            <VideoPlayer/>
        </div>
        <div className="about-right">
            <h3>SOBRE LA UNIVERSIDAD</h3>
            <h2>Educación contínua y de Postgrado. Apúntate con la acreditación</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate iusto placeat eius laborum eveniet eos, exercitationem dicta aliquam voluptatibus doloremque excepturi sequi dolores ipsa ex repellat impedit velit nam architecto.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate iusto placeat eius laborum eveniet eos, exercitationem dicta aliquam voluptatibus doloremque excepturi sequi dolores ipsa ex repellat impedit velit nam architecto.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate iusto placeat eius laborum eveniet eos, exercitationem dicta aliquam voluptatibus doloremque excepturi sequi dolores ipsa ex repellat impedit velit nam architecto.</p>


        </div>
    </div>
  )
}

export default About