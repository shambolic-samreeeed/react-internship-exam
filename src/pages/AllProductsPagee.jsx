import React from 'react'
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const AllProductsPagee = ({addedItems}) => {


  return (
    <div>
<hr></hr>
    <table>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Vendors</th>
            <th>Actions</th>
        </tr>
        {addedItems.map((item)=>(
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
  )
}

export default AllProductsPagee
