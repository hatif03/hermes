import React from 'react'
import Input from './Input'

const Login = () => {
  return (
    <div className=' w-full md:w-[450px]'>
        <h1 className=' text-yellow-500 text-center font-bold text-4xl md:text-6xl mb-10'>Login</h1>
        <div className=' bg-white p-6 min-h-[150px] flex flex-col gap-3 w-full rounded-2xl drop-shadow-xl'>
            <Input name='name' type='name'/>
            <Input name='password' type='password'/>
            <Input name='confirm-password' type='password'/>
        </div>
    </div>
  )
}

export default Login