import React from 'react'
import Header from './Componets/Header'

import Footer from './Componets/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       
      </Routes>

      <Footer></Footer>

    </div>
  )
}

export default App