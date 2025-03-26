import React from 'react'
import AllProductsHeader from '../components/AllProductsHeader'
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import './AllProductsPage.css'

const AllProductsPage = () => {

    const data = [{
        name:'Projector',
        description: 'Here Goes the description',
        vendors:3
    },{
        name:'Podium',
        description: 'Here Goes the description',
        vendors:2
    },{
        name:'Biometric device',
        description: 'Here Goes the description',
        vendors:3
    }]

  return (
    <div>
      <AllProductsHeader/>
   <div className='tableDiv'>
   <table>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Vendors</th>
            <th>Actions</th>
        </tr>
        {data.map((item)=>(
            <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.vendors}</td>
                <td><MdOutlineEdit /></td>
                <td><MdDeleteForever/></td>
            </tr>
        ))}
    </table>
   </div>
    </div>
  )
}

export default AllProductsPage
