import React, { useEffect, useState } from 'react'
import Pass from '../components/Pass'
import EditablePass from '../components/EditablePass'
import { v4 as uuid } from 'uuid'
import { PassesApi } from '../codegen/src/api/PassesApi'

const PassesPage = ({ apiClient }) => {
  const passesApi = new PassesApi(apiClient)
  const [data, setData] = useState([])
  const [editPassId, setEditPassId] = useState(null)
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
    const pass = { id: uuid(), ownerId: uuid(), ...addFormData }
    const newData = [...data, pass]
    setData(newData)

    // let opts = {
    //   body: pass, // Pass |
    // }
    // passesApi.apiPassesPost(opts, (error, data, response) => {
    //   if (error) {
    //     console.error(error)
    //   } else {
    //     console.log('API called successfully. Returned data: ' + data)
    //   }
    // })
  }

  const handleEdit = (e, id, item) => {
    e.preventDefault()
    setEditPassId(id)
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
    const editedPass = { ...editFormData, id: editPassId }
    const newData = [...data]
    const index = data.findIndex((pass) => pass.id === editPassId)
    newData[index] = editedPass
    setData(newData)
    setEditPassId(null)
  }

  const handleDelete = (passId) => {
    const newPasses = data.filter((pass) => pass.id !== passId)
    setData(newPasses)
  }

  //SAVED FOR THE FUTURE, HOW TO GET DATA WITH AUTH TOKEN

  // apiClient.authentications.oauth2.type = 'oauth2'
  // apiClient.authentications.oauth2.accessToken = storedAuthToken

  // const request = weatherForecastApi.getWeatherForecast((error, data) => {
  //   if (error) {
  //     console.error('Error fetching weather forecast:', error)
  //     return
  //   }
  //   setWeatherForecastData(data)
  // })
  // const authNames = ['oauth2']
  // apiClient.applyAuthToRequest(request, authNames)

  useEffect(() => {
    passesApi.apiPassesGet((error, data) => {
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
        <span className="title">Add Pass</span>
        {data[0] &&
          Object.entries(data[0]).map(([key, value]) => {
            if (
              key !== 'id' &&
              key !== 'ownerId' &&
              key !== 'passBoughtEvents' &&
              key !== 'entrances'
            )
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
                  return <th key={uuid()}>{key}</th>
                })}
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  {editPassId === item.id ? (
                    <EditablePass
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                    />
                  ) : (
                    <Pass
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

export default PassesPage
