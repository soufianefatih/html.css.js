import React, { useState ,createContext} from 'react'
import User from './User'


export const UserContext = createContext(null)

export default function Context() {
    const [userOne , setUserOne] = useState('majed')

  return (
    <UserContext.Provider value={userOne}>
            <User />
    </UserContext.Provider>
  )
}
