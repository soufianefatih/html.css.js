import React, { useEffect,useState } from 'react'

export default function Effect() {

 const [users , setusers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data =>setusers(data))
        return ()=> {
            console.log('finishid');
        }
    },[])

// const update = () => setusers(prev => prev + 1) 
useEffect(()=>{
    if (users.length > 0) {
        console.log(users);
    }
},[users])

const handleChange = (e)=>{
    console.log(e.target.value);
}
     
     return (

    <>
     <input type="text" className='search' onInput={handleChange} />
       {users.map(
        user => 
        <h3 key = {user.id}> 
             {user.name}
        </h3>
       )}
    </>
  )
}



// *component life cycle
// * monunt --> Update --> Unmount