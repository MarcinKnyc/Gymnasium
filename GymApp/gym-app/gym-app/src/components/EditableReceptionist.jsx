import React from 'react'

const EditableReceptionist = ({ editFormData, handleEditFormChange }) => {
  return (
    <tr>
      {Object.entries(editFormData).map(([key, value]) => {
        return (
          <td>
            <input
              type="text"
              name={key}
              onChange={handleEditFormChange}
              value={value}
            />
          </td>
        )
      })}
      <td>
        <button type="submit">Save</button>
      </td>
    </tr>
  )
}

export default EditableReceptionist
