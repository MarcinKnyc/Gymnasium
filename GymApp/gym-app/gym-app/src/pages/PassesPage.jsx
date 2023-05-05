import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pass from '../components/Pass'
import EditablePass from '../components/EditablePass'
import { v4 as uuid } from 'uuid'

const PassesPage = ({ storedAuthToken }) => {
  const [data, setData] = useState([])
  const [editPassId, setEditPassId] = useState(null)
  const [addFormData, setAddFormData] = useState({
    date: '',
    temperatureC: 0,
    temperatureF: 0,
    summary: '',
  })
  const [editFormData, setEditFormData] = useState({
    date: '',
    temperatureC: 0,
    temperatureF: 0,
    summary: '',
  })

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
    const { date, temperatureC, temperatureF, summary } = addFormData
    const pass = {
      id: uuid(),
      date: date,
      temperatureC: temperatureC,
      temperatureF: temperatureF,
      summary: summary,
    }
    const newData = [...data, pass]
    setData(newData)
  }

  const handleEdit = (e, id, item) => {
    e.preventDefault()
    setEditPassId(id)
    const formValues = {
      id: item.id,
      date: item.date,
      temperatureC: item.temperatureC,
      temperatureF: item.temperatureF,
      summary: item.summary,
    }
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
    const editedPass = {
      id: editPassId,
      date: editFormData.date,
      temperatureC: editFormData.temperatureC,
      temperatureF: editFormData.temperatureF,
      summary: editFormData.summary,
    }
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

  useEffect(() => {
    console.log(data)
    if (data.length === 0) {
      axios
        .get('http://localhost/WeatherForecast', {
          headers: {
            Authorization: `Bearer ${storedAuthToken}`,
          },
        })
        .then((res) => {
          //console.log(res.data)
          const dataWithId = [...res.data]
          dataWithId.forEach((item) => {
            item.id = uuid()
          })
          setData(dataWithId)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [storedAuthToken])

  return (
    <div className="table-container">
      <form onSubmit={handleAddFormSubmit}>
        <span className="title">Add date</span>
        <input
          type="text"
          name="date"
          placeholder="date"
          required
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="temperatureC"
          placeholder="temperatureC"
          required
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="temperatureF"
          placeholder="temperatureF"
          required
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="summary"
          placeholder="summary"
          required
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
      <form className="edit-form" onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>temperatureC</th>
              <th>temperatureF</th>
              <th>summary</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <>
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
                </>
              )
            })}
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default PassesPage
