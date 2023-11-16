import React from 'react'

function Age({age}) {
    console.log('Render age Component');
  return (
    <h2>{age}</h2>
  )
}

export default React.memo(Age)