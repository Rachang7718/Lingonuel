import React from 'react'
import '../path/login.css'
import {FaFacebookF} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'

function Login() {
  return (
    <div className='App'>
    <div className="text">Login</div>

    <div className='form'>
      <form>
        <div className='input-container'>
          <input type="text" className='input' placeholder='Email '/><br />
          <input type="password" className='input' placeholder='Password '/><br />
        </div>
      </form>

      <button className='btn-login'>Login</button>

      <div className='garis-kiri'></div>
      <div className='or'>OR</div>
      <div className='garis-kanan'></div>
      <div>
        <button className='facebook'><FaFacebookF className='icon'/>Facebook</button>
      </div>
      <div>
        <button className='google'><FcGoogle className='icon'/>Google</button>
      </div>
      <div className='not-have-acc'>Not have an any account? <a href="/register" className='warna'>Register</a></div>
    </div>
    </div>
  )
}

export default Login