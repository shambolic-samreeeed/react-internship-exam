import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import demoItems from "../utils/demoItems";
import ItemTable from "../components/ItemTable";

const ItemList = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);


  useEffect(() => {
    try {
      const rawData = localStorage.getItem("purchaseItems");
      const storedItems = JSON.parse(rawData);
      if (Array.isArray(storedItems) && storedItems.length > 0) {
        setItems(storedItems);
      } else {
        localStorage.setItem("purchaseItems", JSON.stringify(demoItems));
        setItems(demoItems);
      }
    } catch (error) {
      console.log("error");
      localStorage.removeItem("purchaseItems");
      setItems([]);
    }
  }, []);

  const handleDelete = (id) => {
    const updatedArray = items.filter((item)=> item.id !== id)
    localStorage.setItem('purchaseItems',JSON.stringify(updatedArray))
    setItems(updatedArray)

  }
  return (
    <div>
      <h1>Purchase Items</h1>
      <button onClick={() => navigate("/add")}>Add Items</button>
      <ItemTable items={items} onDelete = {handleDelete} onEdit={(id)=>navigate(`/edit/${id}`)}/>
  
    </div>
  );
};

export default ItemList;
