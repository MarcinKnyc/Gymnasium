import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { SectorsApi } from '../codegen/src/api/SectorsApi'
import EditableSector from '../components/EditableSector'
import Sector from '../components/Sector'
import { useParams } from 'react-router-dom'

const SectorsPage = ({ apiClient }) => {
  const sectorsApi = new SectorsApi(apiClient)

  const [data, setData] = useState([])
  const [editSectorsId, setEditSectorsId] = useState(null)
  const [addFormData, setAddFormData] = useState(data[0])
  const [editFormData, setEditFormData] = useState(data[0])
  const { id } = useParams()

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
    const sector = {
      id: uuid(),
      ownerId: uuid(),
      ...addFormData,
      gymId: id,
      gym: undefined,
      entrances: [],
    }
    const newData = [...data, sector]

    console.log(sector)
    let opts = {
      body: sector, // Sector |
    }
    sectorsApi.apiSectorsPost(opts, (error, data, response) => {
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
    setEditSectorsId(id)
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
    const editedSector = { ...editFormData, id: editSectorsId }
    const newData = [...data]
    const index = data.findIndex((sectors) => sectors.id === editSectorsId)
    newData[index] = editedSector

    let opts = {
      body: editedSector, // Sector |
    }
    sectorsApi.apiSectorsIdPut(editSectorsId, opts, (error, data, response) => {
      if (error) {
        console.error(error)
      } else {
        // console.log('API called successfully.')
      }
    })
    setData(newData)
    setEditSectorsId(null)
  }

  const handleDelete = (sectorId) => {
    const newSector = data.filter((sector) => sector.id !== sectorId)

    sectorsApi.apiSectorsIdDelete(sectorId, (error, data, response) => {
      if (error) {
        console.error(error)
      } else {
        // console.log('API called successfully.')
      }
    })
    setData(newSector)
  }

  useEffect(() => {
    sectorsApi.apiSectorsGet((error, data, response) => {
      if (error) {
        console.error(error)
      } else {
        console.log(data)
        const newData = data.filter((sector) => sector.gymId === id)
        console.log(newData)
        setData(newData)
      }
    })
  }, [])

  return (
    <div className="table-container">
      <form onSubmit={handleAddFormSubmit}>
        <span className="title">Add Sector</span>
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
                  {editSectorsId === item.id ? (
                    <EditableSector
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                    />
                  ) : (
                    <Sector
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

export default SectorsPage
