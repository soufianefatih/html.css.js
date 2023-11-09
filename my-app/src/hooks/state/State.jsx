import React from 'react'
import { useState } from 'react'

export default function State() {

 const [posts , setPosts] = useState()
 const [postId , setPostId] = useState(1)

 const updateUp =()=> setPostId(prev=>prev+1)
 const updateDown =()=> setPostId(prev=>prev-1)


   
  fetch('https://jsonplaceholder.typicode.com/posts')
 .then(res => res.json())
 .then(data => setPosts(data))
 
  return (
  
  <div>
    <button onClick={updateUp}>up</button>
    <button onClick={updateDown}>down</button>
      {posts?.map( (post) => (
        <>{post.id === postId
            ?(<>{post.title}</>)
            :("")
        
        } <br/>

        </>))}
        
     
     
         </div>

  )
}


