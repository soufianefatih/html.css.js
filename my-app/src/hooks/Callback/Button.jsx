import React from 'react'

export default function Button({text, action}) {
    console.log('Render button Component '+ text);

  return (
    <button onClick={action}>{text}</button>
  )
}
