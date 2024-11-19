import React, { useState } from 'react'
import '../Styles/Login.css'

const Login = () => {
    const [data , setData] = useState({
        email: '',
        password: ''
    })
    const handelChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
        console.log(data)
    }
    const submit = () => {
        console.log(data)
    }
  return (
    <div className='Login'>
      <div className='Container'>
        <div className='UpperBody'>
            <h1>Login</h1>
            <div className='Inputs'>
                <input type="email" placeholder='Email' name='email' onChange={handelChange}/>
                <input type="password" placeholder='Password' name='password' onChange={handelChange}/>
            </div>
            <p>forget password</p>
        </div>
        <button className='SubmitBtn' onClick={submit}>
            Login
        </button>
      </div>
    </div>
  )
}

export default Login
