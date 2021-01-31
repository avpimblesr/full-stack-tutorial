import React from 'react'
import { gql, useQuery } from '@apollo/client'

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`
const ExchangeRates = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES)
  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error :(</p>

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate} <br />
        <span>
          <b>
            $100 USD = {(100 * rate).toFixed(2)} {currency}
          </b>
        </span>
      </p>
    </div>
  ))
}

export default ExchangeRates
