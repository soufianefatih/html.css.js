import React from 'react'
import { useState } from 'react'

export default function State() {

 const [value,setValue] =useState(0)
 
 const updateUp = ()=> { setValue(prev => prev +1)}
const updateDown =() =>{setValue(prev => prev -1)}
const reset =()=> { setValue(0) }

  return (
  <>
      <h1>data</h1>
     
     
  </>
  )
}
