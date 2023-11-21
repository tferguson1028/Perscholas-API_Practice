import React from 'react'

function CurrencyInput(props) {
  return (
    <div className="Input">
      <div>Currency</div>
      <input 
        onChange={(e) => 
        { 
          props.setFunc( { type: props.action, payload: { value: e.target.value } });
          e.target.value = parseFloat(e.target.value).toFixed(2);
        }}
        type="number" 
        name="moneyVal"
        step={0.01}
        defaultValue={"1.00"}
        
      />
    </div>
  )
}

export default CurrencyInput
