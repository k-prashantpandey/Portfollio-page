import React from 'react'
import Html from '../assets/HTML5_Badge.svg'
import Css from '../assets/css-3.svg'
import Bootstrap from '../assets/bootstrap.png'
import JS from '../assets/javascript.svg'
import React1 from '../assets/react.svg'
import Tailwind from '../assets/tailwindcss.svg'
import './About.css'

function About() {
  return (
    <section id='about'>
        <span className='aboutTitle'>
            What I Know
        </span>

        <span className='aboutDesc'>
            I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly<br /> websites. I have a strong understanding of design and a keen eye for datail. I am proficient in HTML,CSS, <br />JAVASCRIPT.
        </span>
        <br />
        <br />
        <div className='aboutBars'>
            <div className='aboutBar'>
            <img src={Html} alt='html' className='aboutBarImg' />
            <div className='aaboutBarText'>
                <h2>HTML</h2>
                <p>HyperText Markup Language</p>
            </div>
            </div>
        </div>

        <div className='aboutCss1'>
            <div className='aboutCss'>
            <img src={Css} alt='css' className='aboutCssImg' />
            <div className='aaboutCssText'>
                <h2>CSS</h2>
                <p>Cascading Style Sheet</p>
            </div>
            </div>
        </div>

        <div className='aboutBoots'>
            <div className='aboutBootstrap'>
            <img src={Bootstrap} alt='bootstrap' className='aboutBootstrapImg' />
            <div className='aaboutBootstrapText'>
                <h2>Bootstrap</h2>
                <p>Bootstrap</p>
            </div>
            </div>
        </div>

        <div className='aboutJs'>
            <div className='aboutJavascript'>
            <img src={JS} alt='javascript' className='aboutJavascriptImg' />
            <div className='aaboutJavascriptText'>
                <h2>Javascript</h2>
                <p>Programming Language</p>
            </div>
            </div>
        </div>

        <div className='aboutReact'>
            <div className='aboutReactJs'>
            <img src={React1} alt='react' className='aboutReactJsImg' />
            <div className='aaboutReactJsText'>
                <h2>React</h2>
                <p>Web Designing</p>
            </div>
            </div>
        </div>

        <div className='aboutTailwinds'>
            <div className='aboutTailwind'>
            <img src={Tailwind} alt='tailwind' className='aboutTailwindImg' />
            <div className='aaboutTailwindText'>
                <h2>Tailwind</h2>
                <p>Tailwind CSS</p>
            </div>
            </div>
        </div>

    </section>
  )
}

export default About