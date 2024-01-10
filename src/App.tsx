import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ListPage from './pages/ListPage'
import ChatePage from './pages/ChatePage'
import ProfilePage from './pages/ProfilePage'
import Layout from './pages/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='auth' element={<LoginPage/>}/>
        <Route path='dashboard' element={<Layout/>}>
          <Route index element={<ListPage/>}/>
          <Route path='chat' element={<ChatePage/>}/>
          <Route path='profile' element={<ProfilePage/>}/>
        </Route>
        <Route path='*' element={<Navigate to="/dashboard"/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App