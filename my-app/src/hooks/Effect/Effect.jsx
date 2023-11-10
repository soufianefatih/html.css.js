import React, { useEffect } from 'react'

export default function Effect() {

    useEffect(()=>{
        console.log('mount');
    },[])
  return (
    <div>Effect</div>
  )
}



// *component life cycle
// * monunt --> Update --> Unmount