import React from 'react'

const ItemTable = ({items, onDelete, onEdit}) => {
  return (
    <div>
          <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Vendors</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.vendors?.[0]? `${item.vendors[0].price}`: 'no vendor' || 0}</td>
              <td>
                <button onClick={()=> onEdit(item.id)}>✏️</button> <button onClick={()=>onDelete(item.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ItemTable
