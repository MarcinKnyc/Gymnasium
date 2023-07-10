import React from 'react'
import { Link } from 'react-router-dom'

const Pass = ({ id, handleEdit, handleDelete, item, storedUserId }) => {
  return (
    <tr key={id}>
      {Object.entries(item).map(([key, value]) => {
        if (
          key !== 'id' &&
          key !== 'ownerId' &&
          key != 'passBoughtEvents' &&
          key != 'entranceEvents' &&
          key != 'entrances'
        )
          return <td key={key}>{value}</td>
      })}
      {storedUserId !== null && (
        <td>
          <button type="button" onClick={(e) => handleEdit(e, id, item)}>
            EDIT
          </button>
          <button type="button" onClick={(e) => handleDelete(id)}>
            DELETE
          </button>
          <Link to={`/Passes/Buy/${id}`}>
            <button type="button">BUY</button>
          </Link>
        </td>
      )}
    </tr>
  )
}

export default Pass
