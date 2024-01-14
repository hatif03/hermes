import React from 'react'
import logo from "../assets/logo.png"
import Button from './Button'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className=' flex flex-wrap sm:flex-row gap-5 items-center justify-between bg-gradient-to-br from-myBlue to-myPink px-5 py-5 md:py-2 text-white drop-shadow-md'>
        <img src={logo} alt="logo" className='w-[70px] drop-shadow-md cursor-pointer' />
        <div className=' flex'>
            <Button text='Add new ListBoard' secondary/>
        </div>
    </div>
  )
}

export default Header