import React, { useState } from 'react'
import Age from './Age'
import Salary from './Salary'
import"./callback.css"

export default function Callback() {
    const [age , setAge] = useState(20)
    const [salary, setSalary] = useState(1000)
    
  return (
    <div className='red'>
     <Age age ={age}/>
     <Salary salary ={salary}/>

    </div>
  )

}
