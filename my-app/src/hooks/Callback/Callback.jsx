import React, { useState } from 'react'
import Age from './Age'

export default function Callback() {
    const [age , setAge] = useState(20)
    const [salary, setSalary] = useState(1000)
    
  return (
    <div>Callback</div>
  )
}
