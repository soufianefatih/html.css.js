import React, { useState } from 'react'

export default function Context() {
    const [userOne , setUserOne] = useState('majed')

  return (
    <div>{userOne}</div>
  )
}
