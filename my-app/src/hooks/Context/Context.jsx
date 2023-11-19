import React, { useState } from 'react'
import User from './User'
import UserContext from './UserContext'



export default function Context() {
    const [userOne , setUserOne] = useState('majed')

    const userValue = {userOne,setUserOne}
  return (
    <UserContext.Provider value={userValue}>
            <User />
    </UserContext.Provider>
  )
}
