import React from 'react'
import { useState } from 'react'

export default function State() {

 const [value,setValue] =useState(0)
 
 const updateUp = ()=> { setValue(prev => prev +1)}
const updateDown =() =>{setValue(prev => prev -1)}
const reset =()=> { setValue(0) }

  return (
  <>
      <h1>{value}</h1>
      <button onClick={updateUp}> Up</button>
      <button onClick={reset}> reset -</button> 
      <button onClick={updateDown}> Down</button>
     
  </>
  )
}
