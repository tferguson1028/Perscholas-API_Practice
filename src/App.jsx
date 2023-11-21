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
  // CALCULATE: -1
}

function conversionSetter(state, action)
{
  let retState = state;
  switch(action.type)
  {
    case CURRENCY_ACTIONS.SET_INPUT:
      retState.inputValue = Number(action.payload.value);
      break;
      
    case CURRENCY_ACTIONS.SET_SYMBOL:
      retState.inputType = String(action.payload.value);
      break;
      
    case CURRENCY_ACTIONS.SET_CONVERSION:
      retState.conversionType = String(action.payload.value);
      break;
      
    // case CURRENCY_ACTIONS.CALCULATE:
    //   break;
  }
  // console.log(retState);
  return retState;
}

const initialInput = 
{
  inputValue: 0,
  inputType: currencyTypes.Dollar.code,
  conversionType: currencyTypes.Dollar.code,
  // outputValue: 0 
}

function App() {
  const [values, setValue] = useReducer(conversionSetter, initialInput);
  
  useEffect((e) => {
    console.log(values);
  }, [...Object.values(values)]);
  
  return (
    <div className="App">
      <CurrencyInput action={CURRENCY_ACTIONS.SET_INPUT} setFunc={setValue}/>
      <div className="Conversion">  
        <CurrencyType action={CURRENCY_ACTIONS.SET_SYMBOL} setFunc={setValue}/>
        <span> {"=>"} </span>
        <CurrencyType action={CURRENCY_ACTIONS.SET_CONVERSION} setFunc={setValue}/>
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
