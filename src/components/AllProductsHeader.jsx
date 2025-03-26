import React from "react";
import { useNavigate } from "react-router-dom";
import "./componentsStyle.css";

const AllProductsHeader = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="top-container">
      <div className="left-container">
        <h1>
          <span className="bold-header">Purchase</span> Items
        </h1>
        <p>Manage your purchase items and vendor pricing</p>
      </div>

      <div className="right-container">
        <button className="add-button" onClick={() => navigate("/add-products")}>Add Items</button>
      </div>
      <hr></hr>

      </div>

      <h3>All Purchase Items</h3>
      <p>View and manage all your purchase items</p>
    </div>
  );
};

export default AllProductsHeader;
