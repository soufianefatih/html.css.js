import React from 'react'
import { useState } from 'react'

export default function State() {

 const [counter,setCounter] =useState('value')
 
 function update() {
    setCounter('nour')

 }

  return (
  <>
      <h1>{counter}</h1>
      <button onClick={update}> Click</button>
  </>
  )
}
