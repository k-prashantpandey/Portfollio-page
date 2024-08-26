import React from 'react'
import './intro.css'
import Hire from '../assets/hireme.png'
import reactLogo from '../assets/react.svg'
import { Link } from 'react-scroll'

function intro() {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello</span> <br />
            <span className='introtext'>
                I'm <span className='introName'>Prashant</span> 
            <br /> 
            Web Developer
            </span>
            <p className='introPara'>
                I am a skilled web developer with exprience in creating <br /> visually appealing and user friendly websites.
            </p>

            <Link>
                <button className='btn2'>
                    <img src= {Hire} alt='Img' className='btnImg2'/>
                    Hire Me
                </button>
            </Link>
        </div>

        <img src={reactLogo} alt='React Logo' className='logo2' />
    </section>
  )
}

export default intro