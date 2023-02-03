import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Login from './Login'

import Header from '../component/Header'
import Footer from '../component/Footer'
import Contact from './Contacts/Contact'
import About from './About/About'
import Register from './Register/Register'
import Nopage from './Nopage'
import UseRef from './Hooks/UseRef'
import UseMemo from './Hooks/UseMemo'
import UseContext from './Hooks/UseContext'
import UseState from './Hooks/UseState'
import UseReducer from './Hooks/UseReducer'

export default function CoustomRoutes() {
  return (
    <BrowserRouter>
  <Header/>
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/hook/useRef' element={<UseRef/>}/>
        <Route path='/hook/useMemo' element={<UseMemo/>}/>
        <Route path='/hook/useMemo' element={<UseMemo/>}/>
        <Route path='/hook/useContext' element={<UseContext/>}/>
        <Route path='/hook/useState' element={<UseState/>}/>
        <Route path='/hook/useReducer' element={<UseReducer/>}/>

        <Route path='*' element={<Nopage/>} />
      </Routes>
    </main>
<Footer/>
    </BrowserRouter>
  )
}
