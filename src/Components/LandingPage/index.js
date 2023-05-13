import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate()
  return (
    <div style={{height:'100vh'}} className='d-flex w-100 justify-content-center align-items-center' >
        <div className='d-flex justify-content-center align-items-center h-100 gap-5'>
            <button className='bg--white-1 h--45 w--100 border--1 border--blue-1' onClick={()=>navigate('/login')} >Login</button>
            <button className='bg--blue-1 h--45 w--100 border-0'>Register</button>
        </div>
    </div>
  )
}

export default LandingPage