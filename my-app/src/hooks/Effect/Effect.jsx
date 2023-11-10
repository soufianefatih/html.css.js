import React, { useEffect,useState } from 'react'

export default function Effect() {

 const [user , setUser] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data =>console.log(data))
        return ()=> {
            console.log('finishid');
        }
    },[])

// const update = () => setUser(prev => prev + 1) 
useEffect(()=>{
    if (user.length > 0) {
        console.log(user);
    }
},[user])
     
     return (
    <>
       <h1>ha</h1>
       <button >Click</button>
    </>
  )
}



// *component life cycle
// * monunt --> Update --> Unmount