import React from 'react'

const Pass = ({
  id,
  date,
  temperatureC,
  temperatureF,
  summary,
  handleEdit,
  handleDelete,
  item,
}) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{temperatureC}</td>
      <td>{temperatureF}</td>
      <td>{summary}</td>
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

export default Pass
