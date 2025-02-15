import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div className='grid grid-cols-2 h-screen'>
        <div className='py-10'>
          <div className="flex flex-col items-center justify-center space-y-4 ">
              <img  src="/static/images/QuizGrad.png" alt="Logo" />
              <div className='flex flex-col items-center justify-center'>
                <span>Welcome Back!</span>
                <span>Please login/Signup to your account</span>
              </div>
          </div>
          <div className='flex justify-center '>
            <LoginForm />
          </div>
        </div>
        <div className='bg-[#F3F3F3] flex justify-center items-center'>
          <img className='h-72' src="/static/images/GraduateCap.png" alt="Logo" />
        </div>
    </div>
  )
}

export default Login