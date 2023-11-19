import React from 'react'
import Card from './Card'
import CurentUser from './CurentUser'

export default function User({user}) {
  return (
    <Card>
    <CurentUser user = {user}/> 
   </Card>
  )
}
