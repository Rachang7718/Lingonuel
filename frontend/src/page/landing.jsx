import React from 'react'
import Logo from '../image/logo.png';
import Lingonuel from '../image/textlingonuel.png'
import Hello from '../image/hello.png'
import '../path/landing.css'

function landing() {
  return (
    <div>
      <nav className='navbar'>
        <img className='logolingonuel-1' src={Logo} alt="" />
        <img className='lingonuel-1' src={Lingonuel} alt=""/>

        <ul className=''>
          <li className='nav'>
            <a className='a' href="/home">Home</a>
          </li>
          <li className='nav'>
            <a className='a' href="/course">Course</a>
          </li>
          <li className='nav'>
            <a className='a' href="/about">About</a>
          </li>
          <li className='nav'>
            <a className='a' href="/blog">Blog</a>
          </li>
          <li className='nav'>
            <a className='a' href="/contact">Contact</a>
          </li>
          <a className='signup' type='button' href='/register'>Sign Up</a>
          <a className='login' type='button' href='/login'>Log in</a>
          
        </ul>
    </nav>
    <div className='wei'>
      <img className='hello' src={Hello} alt="" />
      <span className='text-1'>Online English</span>
      <span className='text-1'>Learning</span>
      <span className='text-2'>Learn English easily and improve your</span>
      <span className='text-2'>communication</span>
      <div className='join1'><button className='join' >Join For Free</button></div>
    </div>
    </div>
  )
}

export default landing
