import React, {useEffect, useState} from 'react'

function CalculateAPI({ inputValue, inputType, convertTo }) 
{
  const [conversionRate, setConversionRate] = useState(1);
  const [output, setOutput] = useState(0);
  
  // updateApiURL(inputType, convertTo);  
  useEffect(() => 
  { 
    console.log("P"); 
    // updateApiURL(inputType, convertTo);
    // updateConversionRate();
    // setOutput(inputValue*conversion);
  }, [output, conversionRate]);
  
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
      let apiURL = getApiURL(inputType, convertTo);
      console.log(`fetching from ${apiURL}`);
      const response = await fetch(apiURL);
      const data = await response.json();
      console.log(`response: ${JSON.stringify(data)}`);
      setConversionRate(data[convertTo.toLowerCase()]);
    } catch(e){
      console.error(e);
    }
  }
  
  function updateOutput()
  {
    updateConversionRate();
    setOutput(Number(inputValue)*Number(conversionRate));
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
        <span>{String(convertTo.symbol)}{output}</span>
        </div>
    </div>
  )
}

export default CalculateAPI
