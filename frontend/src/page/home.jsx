import React from "react";
import Logo from "../image/logo.png";
import Lingonuel from "../image/textlingonuel.png";
import Profil from "../image/profil.png";
import Gambar1 from "../image/gambar1.png";
import Gambar2 from "../image/gambar2.png"
import "../path/home.css";

function home() {
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
        <a href="/profile"><img className="profil" src={Profil} alt="/profile" /></a>
      </nav>
      <div>
        <span className="welcome">Welcome to Lingonuel</span>
        <span className="text-p1">
          Learn English online and improve your skills through our high-quality
          courses and resources – all designed for{" "}
        </span>
        <span className="text-p2">
          adult language learners. Everything you find here has been specially
          created by the British Council, the{" "}
        </span>
        <span className="text-p3">world's English teaching experts.</span>
      </div>
      <div className="list">
        <img className="gambar1" src={Gambar1} alt="" />
        <div className="learn">
        <span className="learning">Learning Matters</span>
        <button className="find">Find Out More</button>
        </div>
        
        <div className="list-2">
        <img className="gambar1" src={Gambar2} alt="" />
        <div className="learn">
        <span className="study">Study Page</span>
        <button className="find">Find Out More</button>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default home;
