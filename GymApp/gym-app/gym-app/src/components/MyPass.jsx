import React from 'react'

const MyPass = ({ id, handleExtend, handleDeactivate, item }) => {
  return (
    <tr key={id}>
      {Object.entries(item).map(([key, value]) => {
        if (
          key !== 'id' &&
          key !== 'ownerId' &&
          key !== 'passBoughtEvents' &&
          key !== 'entrances' &&
          key !== 'dateTime'
        )
          return <td key={key}>{value}</td>
      })}
      <td>
        <button type="button" onClick={(e) => handleExtend(e, id, item)}>PRZEDŁUŻ</button>
        <button type="button" onClick={(e) => handleDeactivate(e, id, item)}>DEAKTYWUJ</button>
      </td>
    </tr>
  )
}

export default MyPass
