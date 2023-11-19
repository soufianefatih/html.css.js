import React, { useState } from 'react'
import User from './User'



export default function Context() {
    const [userOne , setUserOne] = useState('majed')

    const userValue = {userOne}
  return (
    <UserContext.Provider value={userValue}>
            <User />
    </UserContext.Provider>
  )
}
