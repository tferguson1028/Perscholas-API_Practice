import React from 'react'
import CurrencyType from './CurrencyType'

function CurrencyInput() {
  return (
    <div className='moneyInput'>
      <div>Currency</div>
      <input type="number" name="moneyVal" />
      <CurrencyType />
    </div>
  )
}

export default CurrencyInput
