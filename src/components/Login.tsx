import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { signup } from '../Backend/Queries';

const Login = () => {

    const [login, setLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {
        const data = {email, password, confirmPassword};
        signup(data)
    };

  return (
    <div className=' w-full md:w-[450px]'>
        <h1 className=' text-white text-center font-bold text-4xl md:text-6xl mb-10'>{login? "Login": "Register"}</h1>
        <div className=' bg-white p-6 min-h-[150px] flex flex-col gap-3 w-full rounded-2xl drop-shadow-xl'>
            <Input name='name' type='name' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input name='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            {!login && <Input name='confirm-password' type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>}
            {login? (
                <>
                    <Button text='Login'/>
                    <Button onClick={() => setLogin(false)} text='Register' secondary/>
                </>
            ):(
                <>
                    <Button text='Register' onClick={() => handleSignup()}/>
                    <Button onClick={() => setLogin(true)} text='Login' secondary/>
                </>
            )
            }
        </div>
    </div>
  )
}

export default Login