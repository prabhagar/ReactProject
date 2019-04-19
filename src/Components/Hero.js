import React from 'react'

function Hero({name}) {
    if(name == 'Joker') {
        throw new Error('Not a hero')
    }
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default Hero