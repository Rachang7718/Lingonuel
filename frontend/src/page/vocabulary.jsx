import React from 'react'
import Logo from "../image/logo.png";
import Lingonuel from "../image/textlingonuel.png";
import Profil from "../image/profil.png";
import Gambar3 from "../image/gambar3.png"
import '../path/vocabulary.css'

function vocabulary() {
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
        <span className='vocab'>Vocabulary</span>
        <span className='text-v1'>Learn new words to improve your vocabulary to help you communicate well in English.</span>
        <div>
            <img className='gambar3-v1' src={Gambar3} alt="" />
        <a className='a1-link' href="/vocabulary-a1-a2"><div className='kotak-v'>
            <i><span className='a1-a2'>A1-A2 Vocabulary</span></i>
            <span className='text-a1'>Are you a learner at A1 (elementary) or A2 (pre-intermediate) English</span><br/>
            <span className='text-a2'>level? Learn new words and practise your vocabulary.</span>
        </div>
        </a>
        <a className='a1-link' href="/vocabulary-b1-b2"><img className='gambar3-v2' src={Gambar3} alt="" />
        <div className='kotak-v1 '>
            <i><span className='a1-a2'>B1-B2 Vocabulary</span></i>
            <span className='text-a1'>Are you a learner at A1 (elementary) or A2 (pre-intermediate) English</span><br/>
            <span className='text-a2'>level? Learn new words and practise your vocabulary.</span>
        </div>   
        </a> 
        </div>
      </div>
    </div>
  )
}

export default vocabulary
