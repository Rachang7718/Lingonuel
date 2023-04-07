import React from 'react'
import Logo from "../image/logo.png";
import Lingonuel from "../image/textlingonuel.png";
import Profil from "../image/profil.png";
import Gambar3 from "../image/gambar3.png"
import "../path/learning.css"

function learning() {
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
            <a className="a-3vocabulary" href="/vocabulary">
              Vocabulary
            </a>
          </li>
          <li className='nav'>
            <a className="a-2learning" href="/learning">
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
      <i><span className='t-learning'>Learning Matters</span></i>
      <span className='learn-t'>Learn English using pictures to improve your vocabulary.</span>
      </div>
      
      <div>
        <img className='gambar-l1' src={Gambar3} alt="" />
        <div className='kotak-kotak'></div>
        <ul className='baris-1'>
            <li className='q-learning'>
                Quiz 1
            </li>
            <li className='q-learning'>
                Quiz 2
            </li>
            <li className='q-learning'>
                Quiz 3
            </li>
        </ul>
        <ul className='baris-1'>
            <li className='q-learning'>
                Quiz 4
            </li>
            <li className='q-learning'>
                Quiz 5
            </li>
            <li className='q-learning'>
                Quiz 6
            </li>
        </ul>
        <ul className='baris-1'>
            <li className='q-learning'>
                Quiz 7
            </li>
            <li className='q-learning'>
                Quiz 8
            </li>
            <li className='q-learning'>
                Quiz 9
            </li>
        </ul>     
        <ul className='baris-1'>
            <li className='q-learning'>
                Quiz 10
            </li>
            <li className='q-learning'>
                Quiz 11
            </li>
            <li className='q-learning'>
                Quiz 12
            </li>
        </ul>   
        <ul className='baris-1'>
            <li className='q-learning'>
                Quiz 13
            </li>
            <li className='q-learning'>
                Quiz 14
            </li>
            <li className='q-learning'>
                Quiz 15
            </li>
        </ul>
        <div className='v-easy'><i><span className='t-easy'>Very Easy</span></i></div>        
      </div>
    </div>
  )
}

export default learning
