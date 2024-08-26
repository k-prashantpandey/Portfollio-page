import React from 'react'
import { useState } from 'react'
import './navbar.css'
import Logo from '../assets/zen-3.svg'
import {Link} from 'react-scroll'
import Contacting from '../assets/contact.png'
import Menu from '../assets/menu.png'


const Nevbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nev className='navbar'>
        <img src={Logo} alt='Logo' className='logo' />

    <div className='nav-links'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='nav-links-item' >Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='nav-links-item' >About</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} className='nav-links-item' >Project</Link>
        <Link activeClass='active' to='social' spy={true} smooth={true} offset={-100} duration={500} className='nav-links-item' >Socials</Link>
    </div>

<button className='btn' onClick={() => {
    document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'})
    }}><img src={Contacting} alt='Contact Me' className='btnImg' />Contact Me</button>


    <img src={Menu} alt='menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />

    <div className='navMenu' style={{display : showMenu? 'flex' : 'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className= 'Menu-item' onClick={() => setShowMenu(false)} >Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className= 'Menu-item' onClick={() => setShowMenu(false)} >About</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} className= 'Menu-item' onClick={() => setShowMenu(false)} >Project</Link>
        <Link activeClass='active' to='social' spy={true} smooth={true} offset={-100} duration={500} className= 'Menu-item' onClick={() => setShowMenu(false)} >Socials</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={500} className= 'Menu-item' onClick={() => setShowMenu(false)} >Contact</Link>

    </div>


    </nev>
  )
}



export default Nevbar