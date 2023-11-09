import React from 'react'
import { useState } from 'react'

export default function State() {

    const [value,setValue] =useState('value')


  return (
  <h1>
    {value}
  </h1>
  )
}
