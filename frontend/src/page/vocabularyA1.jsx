import React from 'react'
import Logo from "../image/logo.png";
import Lingonuel from "../image/textlingonuel.png";
import Profil from "../image/profil.png";
import Gambar3 from "../image/gambar3.png"
import {GrNext} from 'react-icons/gr'
import '../path/vocabularyA1.css'

function vocabularyA1() {
  return (
    <div>
       <nav className="navbar-2">
        <img className="logolingonuel-2" src={Logo} alt="" />
        <img className="lingonuel-2" src={Lingonuel} alt="" />

        <ul className="">
          <li className='nav'>
            <a className="a-2home" href="/home">
              Home
            </a>
          </li>
          <li className='nav'>
            <a className="a-2vocabulary" href="/vocabulary">
              Vocabulary
            </a>
          </li>
          <li className='nav'>
            <a className="a-1" href="/learning">
              Learning Matters
            </a>
          </li>
          <li className='nav'>
            <a className="a-1" href="/study">
              Study Page
            </a>
          </li>
        </ul>
        <a href="/profile"><img className="profil" src={Profil} alt="/profile" /></a>
      </nav>
      <div>
        <span className='text-pa1'>Vocabulary <GrNext className='panah'/> A1-A2 Vocabulary</span>
        <span className='text-pa2'>Are you a learner at A1 (Elementary) or A2 (Pre-Intermediate) English level?</span><br/>
        <span className='text-pa3'>In this section you will find activities to help you learn the meaning, pronunciation and spelling of new</span><br/>
        <span className='text-pa3'>words. Learning vocabulary will help you improve your language level and communicate in English</span><br/>
        <span className='text-pa3'>confidently and effectively. The pages are organised by topic and include interactive exercises to help you</span><br/>
        <span className='text-pa3'>learn and remember the new words.</span><br/>
      </div>
      <div>
        <div>
        <span className='title-a1'>Choose a vocabulary lesson</span>
        <img className='gambar-a1' src={Gambar3} alt="" />
        <div className='kotak-v2 '>
            <span className='a1-a2'>Accesories</span>
            <span className='text-acc1'>Do the exercise and learn the words for some accessories.</span><br/>
        </div>
        </div>
        <div>
        <img className='gambar-a2' src={Gambar3} alt="" />
        <div className='kotak-v3'>
            <span className='a1-a2'>Action</span>
            <span className='text-acc2'>Do the exercise and learn the words for some common action.</span>
        </div>
        </div>
        <div>
        <img className='gambar-a3' src={Gambar3} alt="" />
        <div className='kotak-v3'>
            <span className='a1-a2'>Appearance 1</span>
            <span className='text-acc3'>Do the exercise and learn the words to describe people appearance.</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default vocabularyA1
