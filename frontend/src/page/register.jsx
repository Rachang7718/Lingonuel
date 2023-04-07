import React from 'react'
import '../path/register.css'
import {FaFacebookF} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'

function register() {
  return (
    <div className='App'>
    <div className='text'>Create Your Profile</div>

    <div className='form'>
      <form>
        <div className='input-container'>
          <input type="text" className='input' placeholder='Email '/><br />
          <input type="text" className='input' placeholder='Name '/><br />
          <input type="text" className='input' placeholder='Age '/><br />
          <input type="password" className='input' placeholder='Password '/><br />
        </div>
      </form>

       <button className='btn-register'>Register</button>

      <div className='garis-kiri'></div>
      <div className='or'>OR</div>
      <div className='garis-kanan'></div>
      <div>
        <button className='facebook'><FaFacebookF className='icon'/>Facebook</button>
      </div>
      <div>
        <button className='google'><FcGoogle className='icon'/>Google</button>
      </div>
      <div className='not-have-acc'>Already have an account? <a href="/login" className='warna'>Login</a></div>
    </div>
    </div>
  )
}

export default register
