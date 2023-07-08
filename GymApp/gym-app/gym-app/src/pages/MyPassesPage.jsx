import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { PassesApi } from '../codegen/src/api/PassesApi'
import MyPass from '../components/MyPass'

const MyPassesPage = ({ apiClient }) => {
  const passesApi = new PassesApi(apiClient)
  const [data, setData] = useState([])

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
                    key !== 'entrances'
                  )
                    return <th key={uuid()}>{key}</th>
                })}
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return <MyPass {...item} item={item} />
            })}
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default MyPassesPage
