import React, { useContext } from 'react'
import  UserContext  from './UserContext'


export default function Button() {
    const {setUserOne} = useContext(UserContext)

  return (
    <button onClick={()=>{
        setUserOne("soufiane")
    }}>
        Update User
    </button>
  )
}
