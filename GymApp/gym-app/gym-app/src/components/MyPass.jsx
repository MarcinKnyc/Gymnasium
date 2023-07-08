import React from 'react'

const MyPass = ({ id, handleEdit, handleDelete, item }) => {
  return (
    <tr key={id}>
      {Object.entries(item).map(([key, value]) => {
        if (
          key !== 'id' &&
          key !== 'ownerId' &&
          key !== 'passBoughtEvents' &&
          key !== 'entrances'
        )
          return <td key={key}>{value}</td>
      })}
      <td>
        <button type="button">PRZEDŁUŻ</button>
        <button type="button">DEAKTYWUJ</button>
      </td>
    </tr>
  )
}

export default MyPass
