import React from 'react'
import { useState } from 'react'

export default function State() {

 const [posts , setPosts] = useState()
   
  fetch('https://jsonplaceholder.typicode.com/posts')
 .then(res => res.json())
 .then(data => setPosts(data))
 
  return (
  <>
      <h1>{posts.map(post => <>{post.title}</>)}</h1>
     
     
  </>
  )
}


