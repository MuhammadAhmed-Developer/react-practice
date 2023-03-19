import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header';
import Home from './Home';
export default function index() {
  return (
    <>
     
     <Header/>
     <main>

      <Routes>
        <Route path='/'>
             <Route path='/' element={<Home/>} />
        </Route>
      </Routes>
     </main>
     <Footer/>

    </>
  )
}
