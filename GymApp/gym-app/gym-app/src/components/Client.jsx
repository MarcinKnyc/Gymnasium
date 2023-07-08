import React from 'react'
import { PassBoughtEvent } from '../codegen/src/model/PassBoughtEvent'

const Client = ({ id, handleEdit, handleDelete, item }) => {
  return (
    <tr key={id}>
      {Object.entries(item).map(([key, value]) => {
        if (key !== 'id' && key !== 'ownerId' && key != 'passBoughtEvents' && key != 'entranceEvents')
        return <td key={key}>{value}</td>
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

export default Client
