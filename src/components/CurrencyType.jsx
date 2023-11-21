import React from 'react'
import currencyTypes from '../models/Currencies';

function CurrencyType(props) {
  return (
    <span className="TypeInput">
      <select 
        onChange={(e) => {props.setFunc({ type: props.action, payload: { value: e.target.value } })}}
        name="currency"
      >
      {
        Object.keys(currencyTypes).map((key, index) =>
        { 
          return (
            <option 
              key={currencyTypes[key].code} 
              value={currencyTypes[key].code}
            >
              {currencyTypes[key].code} {currencyTypes[key].symbol}
            </option>
          )
        })
      }
      </select>
    </span>
  )
}

export default CurrencyType
