import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PassesApi } from '../codegen/src/api/PassesApi'
import { PassBoughtEventsApi } from '../codegen/src/api/PassBoughtEventsApi'
import { v4 as uuid } from 'uuid'
import { Link } from 'react-router-dom'

const CartPage = ({ apiClient }) => {
  const passesApi = new PassesApi(apiClient)
  const passBoughtApi = new PassBoughtEventsApi(apiClient)
  const [selectedPass, setSelectedPass] = useState([])
  const [isBought, setIsBought] = useState(false)
  const { id } = useParams()

  const handleBuyFormSubmit = (e) => {
    e.preventDefault()

    const boughtPass = {
      id: uuid(),
      ownerId: '2290555a-d873-467d-a48f-898ac084d72a',
      dateTime: new Date(),
      passId: id,
      clientId: '2290555a-d873-467d-a48f-898ac084d72a',
    }

    let opts = {
      body: boughtPass,
    }
    passBoughtApi.apiPassBoughtEventsPost(opts, (error, data, response) => {
      if (error) {
        console.error(error)
      } else {
        setIsBought(true)
        // console.log('API called successfully. Returned data: ' + data)
      }
    })
  }

  useEffect(() => {
    passesApi.apiPassesIdGet(id, (error, data) => {
      if (error) {
        console.error('Error fetching data:', error)
        return
      }
      setSelectedPass(data)
    })
  }, [])

  return (
    <div className="table-container">
      <div className="table-container-border">
        <h1>Wybrany karnet</h1>
        <h3>Nazwa: {selectedPass.passName}</h3>
        <h3>Opis: {selectedPass.passDescription}</h3>
        <h3>Cena: {selectedPass.price} zł</h3>
        <h3>Ważność karnetu: {selectedPass.duration} dni</h3>
      </div>
      {isBought ? (
        <div className="table-container-bought">
          <h2>Karnet został kupiony pomyślnie.</h2>
          <h3>
            Możesz teraz przejść do swoich karnetów:{' '}
            <Link to="/MyPasses" style={{ color: 'white' }}>
              <a className="">Moje karnety</a>
            </Link>
          </h3>
        </div>
      ) : (
        <>
          <h2>Czy na pewno chcesz kupić ten karnet?</h2>
          <form onSubmit={handleBuyFormSubmit}>
            <button type="submit">Potwierdź zakup</button>
          </form>
        </>
      )}
    </div>
  )
}

export default CartPage
