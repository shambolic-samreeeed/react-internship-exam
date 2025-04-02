import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [vendorPrice, setVendorPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      name,
      description,
      vendors:[{name:vendorName, price: vendorPrice}]
    }

    try {
      const stored = JSON.parse(localStorage.getItem('purchaseItems'))
      const updated = [...stored, newItem]
      localStorage.setItem('purchaseItems', JSON.stringify(updated))
      navigate('/')
    } catch (err) {
      console.error("error saving", err)
    }
  };
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>ADD ITEMS</h1>

      <form onSubmit={handleSubmit}>
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
          <input type = "text" value={description} onChange={(e)=> setDescription(e.target.value)} required></input>
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
          <label>Vendor Price</label>
          <input
            type="number"
            value={vendorPrice}
            onChange={(e) => setVendorPrice(e.target.value)}
            required
          ></input>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  );
};

export default AddItem;
