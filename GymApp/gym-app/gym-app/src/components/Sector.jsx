import React from 'react'

const Sector = ({ id, handleEdit, handleDelete, item }) => {
  return (
    <tr key={id}>
      {Object.entries(item).map(([key, value]) => {
        if (key !== 'id' && key !== 'ownerId') return <td key={key}>{value}</td>
      })}
      <td>
        <button type="button" onClick={(e) => handleEdit(e, id, item)}>
          EDIT
        </button>
        <button type="button" onClick={(e) => handleDelete(id)}>
          DELETE
        </button>
      </td>
    </tr>
  )
}

export default Sector
