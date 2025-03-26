import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AllProductsPage from './pages/AllProductsPage'
import AddProductsPage from './pages/AddProductsPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AllProductsPage/>}></Route>
        <Route path='/add-products' element={<AddProductsPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
