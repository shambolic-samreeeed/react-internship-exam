import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ItemList from './pages/ItemList';
import AddItem from './pages/AddItem';
import EditItem from './pages/EditItem';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ItemList/>}></Route>
        <Route path='/add' element={<AddItem/>}></Route>
        <Route path='/edit/:id' element={<EditItem/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
