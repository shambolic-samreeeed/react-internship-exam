import React from 'react'
import AddProductsHeader from '../components/AddProductsHeader'
import { useNavigate } from 'react-router-dom'
import AddProductsFrom from '../components/AddProductsFrom';
import AllProductsPage from './AllProductsPage';

const AddProductsPage = () => {

    const navigate = useNavigate();

  return (
    <div>
      <AddProductsHeader/>
      <AddProductsFrom/>
      <button onClick={()=> navigate(-1)}>Cancel</button>
      
    </div>
  )
}

export default AddProductsPage
