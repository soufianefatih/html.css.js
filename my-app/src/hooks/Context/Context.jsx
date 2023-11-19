import React, { useState ,createContext} from 'react'
import User from './User'


const UserContext = 

export default function Context() {
    const [userOne , setUserOne] = useState('majed')

  return (
    <User user = {userOne}/>
  )
}
