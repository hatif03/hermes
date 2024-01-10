import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const Layout = (props: Props) => {
  return (
    <div>
        <div>Header</div>
        <Outlet/>
    </div>
  )
}

export default Layout