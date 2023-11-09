import React from 'react'
import { useState } from 'react'

export default function State() {

 const [posts , setPosts] = useState()
 const [postId , setPostId] = useState(1)

   
  fetch('https://jsonplaceholder.typicode.com/posts')
 .then(res => res.json())
 .then(data => setPosts(data))
 
  return (
  <>
      <h3>{posts?.map( (post) => (
        <>{post.id === postId
            ?(<>{post.title}</>)
            :("")
        
        } <br/>

        </>))}
         </h3>
     
     
  </>
  )
}


