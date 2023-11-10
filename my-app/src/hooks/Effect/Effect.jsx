import React, { useEffect,useState } from 'react'

export default function Effect() {

 const [users , setusers] = useState([])
 const [filterUsers , setfilterUsers] = useState([])
 const [inputValue , setInputValue] = useState('')



    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data =>setusers(data))
        return ()=> {
            console.log('finishid');
        }
    },[])


useEffect(()=>{
       setfilterUsers(users)
    },[users])

useEffect(()=>{
    if (users.length > 0) {
        console.log(users);
    }
},[users])


useEffect(()=>{
    const filter = users.filter(
        user => user.name.toLowerCase().includes(inputValue)
    )
    setfilterUsers(filter)
} ,[inputValue])

const handleChange = (e)=>{
setInputValue(e.target.value)
}
     
     return (

    <>
     <input type="text" className='search' onInput={handleChange} />
       {filterUsers.map(
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