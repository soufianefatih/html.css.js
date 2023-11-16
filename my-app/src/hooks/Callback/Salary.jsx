import React from 'react'

 function Salary({salary}) {
    console.log('Render salary Component');

  return (
    <h4>{salary}</h4>
  )
}


export default React.memo(Salary)