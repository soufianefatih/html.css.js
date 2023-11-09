import React from 'react'
import { useState } from 'react'

export default function State() {

 const [value,setValue] =useState(0)
 
 function update() {
    setValue(value +1)

 }
 function unpdate() {
    setValue(value -1)

 }
 function reset() {
    setValue(0)

 }

  return (
  <>
      <h1>{value}</h1>
      <button onClick={update}> Click</button>
      <button onClick={unpdate}> Click -</button>
      <button onClick={reset}> reset -</button>


  </>
  )
}
