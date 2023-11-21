import React, {useEffect} from 'react'

function CalculateAPI({ inputValue, inputType, convertTo }) 
{
  

  const apiVersion = "latest";
  const date = "latest";
  const endpoint = "";
  const apiURL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@{${apiVersion}}/{${date}}/{${endpoint}}`;
  
  useEffect(() => { console.log("P"); }, [inputValue])
  
  function convert(input, type, convert)
  {
    console.log("p"); 
    return null;
  }
  
  return (
    <div className="Output">
      <div>Conversion</div>
      <div>
        {String(convert(inputValue, inputType, convertTo))}
      </div>
    </div>
  )
}

export default CalculateAPI
