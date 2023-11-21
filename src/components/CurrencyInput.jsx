import React from 'react'
import CurrencyType from './CurrencyType'

function CurrencyInput(props) {
  console.log(props);

  return (
    <>
      <span>Currency</span>
      <input onChange={(e) => 
        props.setFunc(
        { 
          type: props.actions.SET_INPUT,
          payload: { value: e.target.value }
        })
      } type="number" name="moneyVal" />
      <CurrencyType />
    </>
  )
}

export default CurrencyInput
