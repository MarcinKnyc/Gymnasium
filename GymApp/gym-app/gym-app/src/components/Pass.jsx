import React from 'react'
import { Link } from 'react-router-dom'

const Pass = ({ id, handleEdit, handleDelete, item }) => {
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
        <Link to={`/Passes/Sectors/${id}`}>
          <button type="button">BUY</button>
        </Link>
      </td>
    </tr>
  )
}

export default Pass
