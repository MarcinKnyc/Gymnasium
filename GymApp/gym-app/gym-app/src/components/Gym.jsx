import React from 'react'
import { Link } from 'react-router-dom'

const Gym = ({ id, handleEdit, handleDelete, item }) => {
  return (
    <tr key={id}>
      {Object.entries(item).map(([key, value]) => {
        if (key !== 'id' && key !== 'ownerId')
        return <td key={key}>{value}</td>
      })}
      <td>
        <button type="button" onClick={(e) => handleEdit(e, id, item)}>
          EDIT
        </button>
        <button type="button" onClick={(e) => handleDelete(id)}>
          DELETE
        </button>
        <Link to={`/Gyms/Sectors/${id}`}>
          <button type="button">SECTORS</button>
        </Link>
      </td>
    </tr>
  )
}

export default Gym
