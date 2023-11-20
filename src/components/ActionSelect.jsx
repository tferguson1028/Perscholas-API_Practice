import React from 'react'

function ActionSelect({ actions, dispatch }) {

  
  return (
    <div>
      <h3>ActionSelect</h3>
      {
        Object.keys(actions).map((action) =>
        {
          return (
          <>
            <h4>{action}</h4>
            <input type="checkbox" name="action" id={action} />
          </>
          )
        })
      }
    </div>
  )
}

export default ActionSelect
