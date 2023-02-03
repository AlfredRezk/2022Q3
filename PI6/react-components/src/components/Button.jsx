import React from 'react'

const Button = ({clickHandler, clicks}) => {
  return (

    <button className='btn btn-light mt-5' onClick={clickHandler}>
        Click me! I'm a counter [{clicks}]
    </button>
    )
}

export default Button