import React from 'react'
import { Link } from 'react-router-dom'

const Sector = ({ id, handleEdit, handleDelete, item }) => {
  return (
    <tr key={id}>
      {Object.entries(item).map(([key, value]) => {
        return <td key={key}>{value}</td>
      })}
      <td>
        <button type="button" onClick={(e) => handleEdit(e, id, item)}>
          EDIT
        </button>
        <button type="button" onClick={(e) => handleDelete(id)}>
          DELETE
        </button>
        <Link to={`/Gyms/Sectors/${item.id}/VerifyCustomer`}>
          <button type="button">
            Verify Customers
          </button>
        </Link>
      </td>
    </tr>
  )
}

export default Sector
