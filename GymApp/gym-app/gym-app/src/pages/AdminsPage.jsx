import React, { useEffect, useState } from 'react'
import Admin from '../components/Admin'
import EditableAdmin from '../components/EditableAdmin'
import { v4 as uuid } from 'uuid'
//import { AdminsApi } from '../codegen/src/api/AdminsApi'

const AdminsPage = ({ apiClient }) => {
  const adminsApi = new AdminsApi(apiClient)
  const [data, setData] = useState([])
  const [editAdminId, setEditAdminId] = useState(null)
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
    const admin = { id: uuid(), ownerId: uuid(), ...addFormData }
    const newData = [...data, admin]
    setData(newData)
  }

  const handleEdit = (e, id, item) => {
    e.preventDefault()
    setEditAdminId(id)
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
    const editedAdmin = { ...editFormData, id: editAdminId }
    const newData = [...data]
    const index = data.findIndex((admin) => admin.id === editAdminId)
    newData[index] = editedAdmin
    setData(newData)
    setEditAdminId(null)
  }

  const handleDelete = (adminId) => {
    const newAdmin = data.filter((admin) => admin.id !== adminId)
    setData(newAdmin)
  }

  useEffect(() => {
    adminsApi.apiAdminsGet((error, data) => {
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
        <span className="title">Add Admin</span>
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
                  return <th key={uuid()}>{key}</th>
                })}
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  {editAdminId === item.id ? (
                    <EditableAdmin
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                    />
                  ) : (
                    <Admin
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

export default AdminsPage
