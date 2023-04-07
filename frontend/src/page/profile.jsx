import React from 'react'
import Logo from "../image/logo.png";
import Lingonuel from "../image/textlingonuel.png";
import Profil from "../image/profil.png";
import '../path/profile.css'
import {BsPencilFill} from 'react-icons/bs'
import {AiFillCaretDown} from 'react-icons/ai'

function profile() {
  return (
    <div>
      <nav className="navbar-1">
        <img className="logolingonuel-2" src={Logo} alt="" />
        <img className="lingonuel-2" src={Lingonuel} alt="" />

        <ul className="">
          <li className='nav'>
            <a className="a-1home" href="/home">
              Home
            </a>
          </li>
          <li className='nav'>
            <a className="a-1" href="/vocabulary">
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
        <img className="profil" src={Profil} alt="" />
      </nav>
    <div className='posisikotak'>
        <i><span className='text-p'>Profile</span></i>
    </div>
    <div className='kotak-p'>
        <img className="profil-k" src={Profil} alt="" />
        <span className='nama-u'>Setiwanto Budi<BsPencilFill className='pensil'/></span>
        <span className='email-u'>Email : Budi01@gmail.com<BsPencilFill className='pensil'/></span>
        <div><span className='pass-u'>Password : ********* <BsPencilFill className='pensil'/></span></div>
        <a href="/"><button className='save'>Save</button></a>
        <button className='logout'>Logout</button>
        <span className='title'>Title</span>
        <button className='rank'>Newbie<AiFillCaretDown/></button>
    </div>
    </div>
  )
}

export default profile
