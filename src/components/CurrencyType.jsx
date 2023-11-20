import React from 'react'
import currencyTypes from '../models/Currencies';

function CurrencyType() {
  return (
    <div>
      <label for="currency">Currency Type</label>
      <select name="currency">
      {
        Object.keys(currencyTypes).map((key) =>
          {return <option value={currencyTypes[key].code}>{currencyTypes[key].code} {currencyTypes[key].symbol}</option>
        })
      }
      </select>
    </div>
  )
}

export default CurrencyType
