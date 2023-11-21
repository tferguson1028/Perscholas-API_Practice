import React from 'react'
import CurrencyType from './CurrencyType'

function CurrencyInput(props) {
  console.log(props);

  return (
    <div className="Input">
      <div>Currency</div>
      <input onChange={(e) => 
        props.setFunc(
        { 
          type: props.actions.SET_INPUT,
          payload: { value: e.target.value }
        })
      } type="number" name="moneyVal" />
    </div>
  )
}

export default CurrencyInput
