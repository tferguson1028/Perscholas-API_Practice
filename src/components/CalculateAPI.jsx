import React, {useEffect, useState} from 'react'

function CalculateAPI({ inputValue, inputType, convertTo }) 
{
  const [conversionRate, setConversionRate] = useState(1);
  const [output, setOutput] = useState(0);
  
  // updateApiURL(inputType, convertTo);  
  // useEffect(() => 
  // { 
  //   console.log("P"); 
  //   updateApiURL(inputType, convertTo);
  //   updateConversionRate();
  //   setOutput(inputValue*conversion);
  // }, []);
  
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
      const response = await fetch(getApiURL(inputType, convertTo));
      const data = await response.json();
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
      <div>
        <span>Conversion Rate:</span>
        <span>{conversionRate}</span>
      </div>
      <div>
        <span>Value:</span>
        <span>{output}</span>
        </div>
    </div>
  )
}

export default CalculateAPI
