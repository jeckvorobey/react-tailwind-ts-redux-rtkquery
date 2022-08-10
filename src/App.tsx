import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {FavouritesPage} from './pages/FavouritesPage'
import {Nav} from './pages/Nav'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/fav" element={ <FavouritesPage /> } />
      </Routes>
    </>
  )
}

export default App
