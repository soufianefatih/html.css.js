import React, { useState ,createContext} from 'react'
import User from './User'


export const UserContext = createContext(null)

export default function Context() {
    const [userOne , setUserOne] = useState('majed')

    const userValue = {userOne}
  return (
    <UserContext.Provider value={userValue}>
            <User />
    </UserContext.Provider>
  )
}
