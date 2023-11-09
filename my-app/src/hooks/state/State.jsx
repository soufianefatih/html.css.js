import React from 'react'
import { useState } from 'react'

export default function State() {

 const [value,setValue] =useState()
 const [postes , setPostes] = useState()
   
 const posts = fetch('https://jsonplaceholder.typicode.com/posts')
 .then(res => res.json())
 .then(data => setPostes(data))
 
  return (
  <>
      <h1>data</h1>
     
     
  </>
  )
}


