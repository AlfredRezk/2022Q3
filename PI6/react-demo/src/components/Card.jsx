import React from 'react'

const Card = ({children}) => {
  return (
    <div className="card card-body shadow m-3 d-flex align-items-center flex-column ">
        {children}
    </div>
  )
}

export default Card