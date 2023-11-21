import React, {useEffect, useState} from 'react'
import currencyTypes from '../models/Currencies';

function CalculateAPI( props ) 
{
  const [conversionRate, setConversionRate] = useState(1);
  const [output, setOutput] = useState(0);
  
  function getApiURL(type, convert)
  {
    let apiVersion = "latest";
    let date = "latest";
    let endpoint = `currencies/${type.toLowerCase()}/${convert.toLowerCase()}`;
    return `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@${apiVersion}/${date}/${endpoint}.json`;
  }
  
  async function updateConversionRate()
  {
    try{
      let apiURL = getApiURL(props.inputType, props.convertTo);
      console.log(`fetching from ${apiURL}`);
      const response = await fetch(apiURL);
      const data = await response.json();
      console.log(`response: ${JSON.stringify(data)}`);
      setConversionRate(data[props.convertTo.toLowerCase()]);
    } catch(e){
      console.error(e);
    }
  }
  
  function updateOutput()
  {
    updateConversionRate();
    setOutput(Number(props.inputValue)*Number(conversionRate));
    console.log(props.inputValue, conversionRate, output);
  }
  
  function getSymbol(currencyCode)
  {
    for(let code in currencyTypes)
    {
      if(currencyCode === currencyTypes[code].code)
        return currencyTypes[code].symbol;
    }
  }
  
  return (
    <div className="Output">
      <button onClick={updateOutput}>Calculate</button>
      <div>
        <span>Conversion Rate: </span>
        <span>{conversionRate}</span>
      </div>
      <div>
        <span>Value: </span>
        <span>{getSymbol(props.convertTo)}{props.inputValue*conversionRate}</span>
        </div>
    </div>
  )
}

export default CalculateAPI
