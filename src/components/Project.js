import React from 'react'
import './Project.css'
import Banner from '../assets/project.jpg'

function Project() {
  return (
    <section id='project'>

        <h2 className='projectTitle'>My Projects</h2>
        <span className='projectDesc'>Here are my Projects</span>

        <div className='project-item'>
        <div className='item-details'>
            <p className='p1'>Project-1</p>
            <p className='p2'>TechStack- HTML and CSS</p>
        </div>
        <a href='#'><img src={Banner} alt='banner' className='projectImg' /></a>
        </div>

        <div className='project-item'>
        <div className='item-details'>
            <p className='p1'>Project-2</p>
            <p className='p2'>TechStack- Html, CSS and Bootstrap</p>
        </div>
        <a href='#'><img src={Banner} alt='banner' className='projectImg' /></a>
        </div>

        <div className='project-item'>
        <div className='item-details'>
            <p className='p1'>Project-3</p>
            <p className='p2'>TechStack- Tailwind CSS</p>
        </div>
        <a href='#'><img src={Banner} alt='banner' className='projectImg' /></a>
        </div>

        <div className='project-item'>
        <div className='item-details'>
            <p className='p1'>Project-4</p>
            <p className='p2'>TechStack- React JS</p>
        </div>
        <a href='#'><img src={Banner} alt='banner' className='projectImg' /></a>
        </div>
        
    </section>
  )
}

export default Project