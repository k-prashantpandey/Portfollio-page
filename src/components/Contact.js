import React from 'react'
import { useRef } from 'react'
import './Contact.css'
import Github from '../assets/github.svg'
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'
import LinkdIn from '../assets/linkedin-original.svg'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tu2ty77', 'template_d1owket', form.current, {
        publicKey: 'VnBTZHOQMdvDJiK8B',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contact'>

        <div id='social'>
            <h1 className='socialTitle'>Social</h1>
            <p className='socialDesc'>Here you can connect with me on my social media. </p>

            <div className='socialImgs'>
            <a href= '#'><img src= {LinkdIn} alt='linkedin' className='socialImg' /> </a>
            <a href= '#'><img src= {Github} alt='Github' className='socialImg' /> </a>
            <a href= '#'><img src= {Instagram} alt='Instagram' className='socialImg' /> </a>
            <a href= '#'><img src= {Facebook} alt='Facebook' className='socialImg' /> </a>
            </div>
        </div>

        <div id='contactPage'>
            <h1 className='contactTitle'>Contact</h1>
            <span className='contactDesc'>Feel free to contact me</span>

            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='from_name' name="user_name" required />
                <input type='email' className='email' placeholder='your_email' name="user_email" required />
                <textarea className='msg' rows="5" placeholder='Your Message' name="message"  required></textarea>
                <button type='submit' value="send" className='submitBtn' onClick= {() => {alert("Your email is submitted")}} >Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Contact