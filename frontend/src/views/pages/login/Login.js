import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import  './login.css'
import toast from 'react-hot-toast';



import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    
    if (username === 'taalmro' && password === 'taalmro') {
      navigate('/dashboard'); // Redirect only if credentials match
    } else {
      // alert('Invalid username or password');
      toast.error("Invalid username or password")
      setUsername('')
      setPassword('')
    }
  };

  return (
    <div className=''>
      {/* <img src={loginimage} alt="" className="bg-container" /> */}
      <div className="bg-container">
        <form>
          <div className="login-box">
          <div className='d-flex flex-column gap-0 p-0 mt-0 text-light'>
          <label htmlFor=""><b>User Name</b></label>
          <input type="text" placeholder="Username" value={username} className='logininputone' autoComplete='off' onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className='d-flex flex-column gap-0 p-0 mt-0 text-light'>
            <label htmlFor=""><b>Password</b></label>
            <input type="password" placeholder="Password" autoComplete="off" value={password} className='logininputtwo' onChange={(e) => setPassword(e.target.value)} />
            <sapn className="text-end mb-1"><b>Forgot Password?</b></sapn>
          </div>
          <div className='text-center'>
          <button  onClick={handleLogin} ><b>Login</b></button>
          </div>
          </div>
        </form>

      </div>
      
    </div>
  )
}

export default Login
