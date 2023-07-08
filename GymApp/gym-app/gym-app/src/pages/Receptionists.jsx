import React, { useEffect, useState } from 'react'
import Receptionist from '../components/Receptionist'
import EditableReceptionist from '../components/EditableReceptionist'
import { v4 as uuid } from 'uuid'
import { ReceptionistsApi } from '../codegen/src/api/ReceptionistsApi'

const ReceptionistsPage = ({ apiClient }) => {
  const receptionistsApi = new ReceptionistsApi(apiClient)
  const [data, setData] = useState([])
  const [editReceptionistId, setEditReceptionistId] = useState(null)
  const [addFormData, setAddFormData] = useState(data[0])
  const [editFormData, setEditFormData] = useState(data[0])

  const handleAddFormChange = (e) => {
    e.preventDefault()
    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value
    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue
    setAddFormData(newFormData)
  }

  const handleAddFormSubmit = (e) => {
    e.preventDefault()
    const receptionist = {
      id: uuid(),
      ownerId: uuid(),
      ...addFormData,
      gyms: [],
    }
    const newData = [...data, receptionist]

    let opts = {
      body: receptionist, // Receptionist |
    }

    receptionistsApi.apiReceptionistsPost(opts, (error, data, response) => {
      if (error) {
        console.error(error)
      } else {
        // console.log('API called successfully. Returned data: ' + data)
      }
    })

    setData(newData)
  }

  const handleEdit = (e, id, item) => {
    e.preventDefault()
    setEditReceptionistId(id)
    const formValues = { ...item }
    setEditFormData(formValues)
  }

  const handleEditFormChange = (e) => {
    e.preventDefault()
    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value
    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue
    setEditFormData(newFormData)
  }

  const handleEditFormSubmit = (e) => {
    e.preventDefault()
    const editedReceptionist = { ...editFormData, id: editReceptionistId }
    const newData = [...data]
    const index = data.findIndex(
      (receptionist) => receptionist.id === editReceptionistId
    )
    newData[index] = editedReceptionist

    let opts = {
      body: editedReceptionist, // Receptionist |
    }
    receptionistsApi.apiReceptionistsIdPut(
      editReceptionistId,
      opts,
      (error, data, response) => {
        if (error) {
          console.error(error)
        } else {
          // console.log('API called successfully.')
        }
      }
    )

    setData(newData)
    setEditReceptionistId(null)
  }

  const handleDelete = (receptionistId) => {
    const newReceptionist = data.filter(
      (receptionist) => receptionist.id !== receptionistId
    )

    receptionistsApi.apiReceptionistsIdDelete(
      receptionistId,
      (error, data, response) => {
        if (error) {
          console.error(error)
        } else {
          // console.log('API called successfully.')
        }
      }
    )
    setData(newReceptionist)
  }

  useEffect(() => {
    receptionistsApi.apiReceptionistsGet((error, data) => {
      if (error) {
        console.error('Error fetching data:', error)
        return
      }
      setData(data)
    })
  }, [])

  return (
    <div className="table-container">
      <form onSubmit={handleAddFormSubmit}>
        <span className="title">Add Receptionist</span>
        {data[0] &&
          Object.entries(data[0]).map(([key, value]) => {
            if (key !== 'id' && key !== 'ownerId')
              return (
                <input
                  type="text"
                  name={key}
                  placeholder={key}
                  onChange={handleAddFormChange}
                  key={key}
                />
              )
          })}

        <button type="submit">Add</button>
      </form>
      <form className="edit-form" onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              {data[0] &&
                Object.entries(data[0]).map(([key, value]) => {
                  if (key !== 'id' && key !== 'ownerId')
                  return <th key={uuid()}>{key}</th>
                })}
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  {editReceptionistId === item.id ? (
                    <EditableReceptionist
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                    />
                  ) : (
                    <Receptionist
                      {...item}
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                      item={item}
                    />
                  )}
                </React.Fragment>
              )
            })}
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default ReceptionistsPage
