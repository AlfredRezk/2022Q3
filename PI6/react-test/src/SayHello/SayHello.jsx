import React, { useState } from 'react'

const SayHello = () => {
    
    const [changeText, setChangeText] = useState(false)
  return (
    
    <>
        <h1> Hello world!</h1>
        {!changeText&& <p>Nice to meet you</p>}
        {changeText&& <p>Text changed</p>}

        <button onClick={ ()=> setChangeText(true)}> Change</button>
    </>
  )
}

export default SayHello