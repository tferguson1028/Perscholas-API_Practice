import {useReducer} from 'react';
import CurrencyInput from './components/CurrencyInput';
import ActionSelect from './components/ActionSelect';

const CURRENCY_ACTIONS =
{
  ADD: "Sum",
  SUBTRACT: "Difference",
  EXCHANGE: "Exchange Rate"
};

function reducer(state, action)
{
  switch(action.type)
  {
    case CURRENCY_ACTIONS.ADD: return [...state];
    case CURRENCY_ACTIONS.SUBTRACT: return [...state];
    case CURRENCY_ACTIONS.EXCHANGE: return [...state];
  }
}

function App() {
  
  const {currencyAction, dispatch} = useReducer(reducer);
  
  return (
    <div className="App">
      <ActionSelect actions={CURRENCY_ACTIONS} dispatch={dispatch}/>
      <CurrencyInput />
      <CurrencyInput />
      <button>Calculate</button>
    </div>
  );
}

export default App;
