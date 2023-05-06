import React from 'react'

const EditablePass = ({ editFormData, handleEditFormChange }) => {
  const { date, temperatureC, temperatureF, summary } = editFormData
  return (
    <tr>
      <td>
        <input
          type="text"
          name="date"
          //placeholder={temperatureC}
          onChange={handleEditFormChange}
          value={date}
        />
      </td>
      <td>
        <input
          type="number"
          name="temperatureC"
          //placeholder={temperatureC}
          onChange={handleEditFormChange}
          value={temperatureC}
        />
      </td>
      <td>
        <input
          type="number"
          name="temperatureF"
          //placeholder={temperatureC}
          onChange={handleEditFormChange}
          value={temperatureF}
        />
      </td>
      <td>
        <input
          type="text"
          name="summary"
          //placeholder={temperatureC}
          onChange={handleEditFormChange}
          value={summary}
        />
      </td>
      <td>
        <button type="submit">Save</button>
      </td>
    </tr>
  )
}

export default EditablePass
