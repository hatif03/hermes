import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

type Props = {}

const Layout = (props: Props) => {
  return (
    <div className=' h-screen flex flex-col'>
        <Header/>
        <div className=' bg-myBlack h-full'>
          <Outlet/>
        </div>
    </div>
  )
}

export default Layout