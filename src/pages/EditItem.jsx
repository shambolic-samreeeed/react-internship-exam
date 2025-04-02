import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [vendorPrice, setVendorPrice] = useState("");

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("purchaseItems"));
      const itemToEdit = stored.find((item) => item.id === Number(id));

      if (itemToEdit) {
        setName(itemToEdit.name);
        setDescription(itemToEdit.description);
        setVendorName(itemToEdit.vendors[0]?.name || "");
        setVendorPrice(itemToEdit.vendors[0]?.price || "");
      }else{
        navigate('/')
      }
    } catch (err) {
        console.error('Error', err)
        navigate('/')
    }
  },[id, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();
    try{
        const stored = JSON.parse(localStorage.getItem('purchaseItems')) || []
        const updated = stored.map((item)=>(
            item.id === Number(id) ? {...item, name, description, vendors: [{name: vendorName, price: vendorPrice}]
        }: item
        ));
        localStorage.setItem('purchaseItems', JSON.stringify(updated));
        navigate('/')
    }catch(err){
        console.error('error',err)
    }
  };
  return (
    <div>
      <h1>Update</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Item Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
        </div>

        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></input>
        </div>

        <div>
          <label>Vendor Name</label>
          <input
            type="text"
            value={vendorName}
            onChange={(e) => setVendorName(e.target.value)}
            required
          ></input>
        </div>

        <div>
          <label>Vendor price</label>
          <input
            type="number"
            value={vendorPrice}
            onChange={(e) => setVendorPrice(e.target.value)}
            required
          ></input>
        </div>

        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditItem;
