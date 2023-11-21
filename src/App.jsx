import {useEffect, useReducer, useState} from 'react';
import CurrencyInput from './components/CurrencyInput';
import CurrencyType from './components/CurrencyType';
import CalculateAPI from './components/CalculateAPI';
import currencyTypes from './models/Currencies';

const CURRENCY_ACTIONS =
{
  SET_INPUT: 0,
  SET_SYMBOL: 1,
  SET_CONVERSION: 2,
}

function conversionSetter(state, action)
{
  const newState = {...state};
  switch(action.type)
  {
    case CURRENCY_ACTIONS.SET_INPUT:
      newState.inputValue = Number(action.payload.value);
      break;
      
    case CURRENCY_ACTIONS.SET_SYMBOL:
      newState.inputType = String(action.payload.value);
      break;
      
    case CURRENCY_ACTIONS.SET_CONVERSION:
      newState.conversionType = String(action.payload.value);
      break;
  }
  
  return newState;
}

const initialInput = 
{
  inputValue: 0,
  inputType: currencyTypes.Dollar.code,
  conversionType: currencyTypes.Dollar.code
}

function App() {
  const [values, setValues] = useReducer(conversionSetter, initialInput);
  
  return (
    <div className="App">
      <CurrencyInput action={CURRENCY_ACTIONS.SET_INPUT} setFunc={setValues}/>
      <div className="Conversion">  
        <CurrencyType action={CURRENCY_ACTIONS.SET_SYMBOL} setFunc={setValues}/>
        <span> {"=>"} </span>
        <CurrencyType action={CURRENCY_ACTIONS.SET_CONVERSION} setFunc={setValues}/>
      </div>
      <CalculateAPI 
        inputValue={values.inputValue}
        inputType={values.inputType}
        convertTo={values.conversionType}
      />
    </div>
  );
}

export default App;
