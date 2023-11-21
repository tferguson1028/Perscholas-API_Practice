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
  console.log(state);
  console.log(action);
  let retState = state;
  console.log(retState);
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
  
  return retState;
}

const initialInput = 
{
  inputValue: 0,
  inputType: currencyTypes.Dollar,
  conversionType: currencyTypes.Dollar,
  outputValue: 0 
}

function App() {
  const [values, dispatch] = useReducer(conversionSetter, initialInput);
  
  useEffect(() => {
    dispatch({ type: CURRENCY_ACTIONS.CALCULATE });
  }, [values]);
  
  return (
    <div className="App">
      <CurrencyInput actions={CURRENCY_ACTIONS} setFunc={dispatch}/>
      <div className="Conversion">  
        <CurrencyType />
        <span> {"=>"} </span>
        <CurrencyType />
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
