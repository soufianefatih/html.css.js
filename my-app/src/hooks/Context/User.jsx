import React from 'react'
import Card from './Card'

export default function User({user}) {
  return (
    <Card>
    <div>{user}</div>
    </Card>
  )
}
