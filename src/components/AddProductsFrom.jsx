import React, { useState } from "react";
import AddVendorsForm from "./AddVendorsForm";
import './componentsStyle.css'
import AllProductsPagee from "../pages/AllProductsPagee";



const AddProductsFrom = () => {
  
const [itemName,setItemName] = useState('');
const [description, setDescription] = useState('');
const [addedItems, setAddedItems] = useState([{
    name:'',
    description:''
}])

const handleSubmit = (e) =>{
    e.preventDefault()
    addedItems.push({name:itemName, description:description});
    
}
console.log(addedItems)

  return (
    <div>
        <form onSubmit={handleSubmit}> 
        <label>Item Name</label>
        <input
          type="text"
          name="itemName"
          value={itemName}
          onChange={e => setItemName(e.target.value)}
        ></input>

        <label>Description</label>
        <input 
        type="text"
        name="description"
        value={description}
        onChange={e=> setDescription(e.target.value)}></input>

        <AddVendorsForm/>

        <button type="submit">Add</button>
        </form>

        <AllProductsPagee addedItems={addedItems}/>
    </div>
  );
};

export default AddProductsFrom;
