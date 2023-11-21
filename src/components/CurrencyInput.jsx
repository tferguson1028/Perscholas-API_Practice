import React from 'react'
import CurrencyType from './CurrencyType'

function CurrencyInput(props) {
  return (
    <div className="Input">
      <div>Currency</div>
      <input 
        onChange={(e) => props.setFunc( { type: props.action, payload: { value: e.target.value } })} 
        type="number" 
        name="moneyVal" 
      />
    </div>
  )
}

export default CurrencyInput
