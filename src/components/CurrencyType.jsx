import React from 'react'
import currencyTypes from '../models/Currencies';

function CurrencyType() {
  return (
    <span className="TypeInput">
      <select name="currency">
      {
        Object.keys(currencyTypes).map((key, index) =>
          {return <option key={currencyTypes[key].code} value={currencyTypes[key].code}>{currencyTypes[key].code} {currencyTypes[key].symbol}</option>
        })
      }
      </select>
    </span>
  )
}

export default CurrencyType
