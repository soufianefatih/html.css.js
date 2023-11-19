import React, {useContext} from 'react'
import  UserContext  from './UserContext'

export default function CurentUser() {

const {userOne} = useContext(UserContext)


  return (
    <div>{userOne}</div>
  )
}
