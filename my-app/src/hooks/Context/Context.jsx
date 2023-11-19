import React, { useState ,createContext} from 'react'
import User from './User'

export default function Context() {
    const [userOne , setUserOne] = useState('majed')

  return (
    <User user = {userOne}/>
  )
}
