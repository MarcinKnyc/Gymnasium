import React, { useEffect, useState } from 'react'
import Gym from '../components/Gym'
import EditableGym from '../components/EditableGym'
import { v4 as uuid } from 'uuid'
import { GymsApi } from '../codegen/src/api/GymsApi'

const GymsPage = ({ apiClient }) => {
  const gymsApi = new GymsApi(apiClient)
  const [data, setData] = useState([])
  const [editGymId, setEditGymId] = useState(null)
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
    const gym = {
      id: uuid(),
      ownerId: uuid(),
      ...addFormData,
      sectors: [],
      receptionists: [],
    }
    const newData = [...data, gym]

    let opts = {
      body: gym, // Gym |
    }
    gymsApi.apiGymsPost(opts, (error, data, response) => {
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
    setEditGymId(id)
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
    const editedGym = { ...editFormData, id: editGymId }
    const newData = [...data]
    const index = data.findIndex((gym) => gym.id === editGymId)
    newData[index] = editedGym

    let opts = {
      body: editedGym, // Gym |
    }
    gymsApi.apiGymsIdPut(editGymId, opts, (error, data, response) => {
      if (error) {
        console.error(error)
      } else {
        // console.log('API called successfully.')
      }
    })

    setData(newData)
    setEditGymId(null)
  }

  const handleDelete = (gymId) => {
    const newGyms = data.filter((gym) => gym.id !== gymId)

    gymsApi.apiGymsIdDelete(gymId, (error, data, response) => {
      if (error) {
        console.error(error)
      } else {
        // console.log('API called successfully.')
      }
    })
    setData(newGyms)
  }

  useEffect(() => {
    gymsApi.apiGymsGet((error, data) => {
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
        <span className="title">Add Gym</span>
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
                  {editGymId === item.id ? (
                    <EditableGym
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                    />
                  ) : (
                    <Gym
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

export default GymsPage
