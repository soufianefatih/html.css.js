import React, { useEffect,useState } from 'react'

export default function Effect() {

 const [counter , setCounter] = useState(0)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data =>console.log(data))
    },[counter])

const update = () => setCounter(prev => prev + 1) 
     
     return (
    <>
       <h1>
        {counter}
       </h1>
       <button onClick={update}>Click</button>
    </>
  )
}



// *component life cycle
// * monunt --> Update --> Unmount