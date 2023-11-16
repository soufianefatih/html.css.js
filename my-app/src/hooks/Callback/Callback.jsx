import React, { useState } from 'react'
import Age from './Age'
import Salary from './Salary'

export default function Callback() {
    const [age , setAge] = useState(20)
    const [salary, setSalary] = useState(1000)
    
  return (
    <div>
     <Age age ={age}/>
     <Salary salary ={salary}/>

    </div>
  )
}
