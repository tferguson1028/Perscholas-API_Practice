import React from 'react'

function CalculateAPI(props) 
{
  const apiVersion = "latest";
  const date = "";
  const endpoint = "";
  const apiURL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@{${apiVersion}}/{${date}}/{${endpoint}}`;
  
  function getCurrency()
  {
    
    return ;
  }
  
  return (
    <div className="Output">
      <div>Conversion</div>
      
    </div>
  )
}

export default CalculateAPI
