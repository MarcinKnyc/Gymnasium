import React, { useEffect, useState } from 'react'
import Client from '../components/Client'
import EditableClient from '../components/EditableClient'
import { v4 as uuid } from 'uuid'
import { ClientsApi } from '../codegen/src/api/ClientsApi'

const ClientsPage = ({ apiClient }) => {
  const clientsApi = new ClientsApi(apiClient)
  const [data, setData] = useState([])
  const [editClientId, setEditClientId] = useState(null)
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
    const client = {
      id: uuid(),
      ownerId: uuid(),
      ...addFormData,
      passBoughtEvents: [],
      entranceEvents: [],
    }
    const newData = [...data, client]

    let opts = {
      body: client, // Client |
    }

    clientsApi.apiClientsPost(opts, (error, data, response) => {
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
    setEditClientId(id)
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
    const editedClient = { ...editFormData, id: editClientId }
    const newData = [...data]
    const index = data.findIndex((client) => client.id === editClientId)
    newData[index] = editedClient

    let opts = {
      body: editedClient, // Client |
    }
    clientsApi.apiClientsIdPut(editClientId, opts, (error, data, response) => {
      if (error) {
        console.error(error)
      } else {
        // console.log('API called successfully.')
      }
    })

    setData(newData)
    setEditClientId(null)
  }

  const handleDelete = (clientId) => {
    const newClients = data.filter((client) => client.id !== clientId)

    clientsApi.apiClientsIdDelete(clientId, (error, data, response) => {
      if (error) {
        console.error(error)
      } else {
        // console.log('API called successfully.')
      }
    })
    setData(newClients)
  }

  useEffect(() => {
    clientsApi.apiClientsGet((error, data) => {
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
        <span className="title">Add Client</span>
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
                  {editClientId === item.id ? (
                    <EditableClient
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                    />
                  ) : (
                    <Client
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

export default ClientsPage
