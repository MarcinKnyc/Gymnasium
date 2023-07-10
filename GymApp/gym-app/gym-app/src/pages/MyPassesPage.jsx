import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { PassBoughtEventsApi } from '../codegen/src/api/PassBoughtEventsApi'
import MyPass from '../components/MyPass'

const MyPassesPage = ({ apiClient, client_id }) => {
  const passesApi = new PassBoughtEventsApi(apiClient)
  const [data, setData] = useState([])
  // const [clientId, setClientId] = useState('')

  useEffect(() => {
    // setClientId(client_id)
    // console.log(clientId)
    passesApi.apiPassBoughtEventsGetActivePassesClientIdGet(
      localStorage.getItem('client_id'),
      (error, data) => {
        if (error) {
          console.error('Error fetching data:', error)
          return
        }
        setData(data)
        console.log(data)
      }
    )
  }, [])
  const handleExtend = (e, id, item) => {
    e.preventDefault()
    passesApi.apiPassBoughtEventsExtendPassValidityPassBoughtEventIdPut(
      id,
      {extension: 1},
      (error, data) => {
        if (error) {
          console.error('Error fetching data:', error)
          return
        } else {
          window.location.reload()
        }
      }
    )
  }

  const handleDeactivate = (e, id, item) => {
    e.preventDefault()
    passesApi.apiPassBoughtEventsDeactivatePassPassBoughtEventIdPut(
      id,
      (error, data) => {
        if (error) {
          console.error('Error fetching data:', error)
          return
        } else {
          window.location.reload()
        }
      }
    )
  }

  return (
    <div className="table-container">
      <form className="edit-form">
        <table>
          <thead>
            <tr>
              {data[0] &&
                Object.entries(data[0]).map(([key, value]) => {
                  if (
                    key !== 'id' &&
                    key !== 'ownerId' &&
                    key !== 'passBoughtEvents' &&
                    key !== 'entrances' &&
                    key !== 'dateTime'
                  )
                    return <th key={uuid()}>{key}</th>
                })}
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return <MyPass 
              {...item} 
              item={item}
              handleDeactivate={handleDeactivate}
              handleExtend={handleExtend}
              />
            })}
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default MyPassesPage
