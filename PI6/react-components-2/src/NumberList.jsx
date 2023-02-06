import React from 'react'

const NumberList = ({numbers}) => {
  return (
    <ul>
        {numbers.map(number=> <li>{number}</li>)}
    </ul>
    
  )
}

export default NumberList