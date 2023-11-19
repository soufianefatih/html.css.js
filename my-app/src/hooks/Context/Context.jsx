import React, { useState } from 'react'
import User from './User'

export default function Context() {
    const [userOne , setUserOne] = useState('majed')

  return (
    <User user = {userOne}/>
  )
}
