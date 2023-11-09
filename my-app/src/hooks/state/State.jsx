import React from 'react'
import { useState } from 'react'

export default function State() {

 const [value,setValue] =useState(0)
 


  return (
  <>
      <h1>data</h1>
     
     
  </>
  )
}



export default function state() {
    const [postes , setPostes] = useState()
   
       const posts = fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res => res.json())
       .then(data => setPostes(data))
     return (
       <div>state</div>
     )
   }