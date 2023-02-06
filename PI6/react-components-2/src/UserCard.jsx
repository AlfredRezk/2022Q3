import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
    <div className="card card-body shadow d-flex justify-contenent-center  align-items-center">
      <img src={user.image} alt="" className="img-fluid rounded-circle w-50"/>
      <h3 className="card-title my-2">{user.name}</h3>
      <p className="card-text"> {user.description}</p>
    </div>
  </div>
  )
}

export default UserCard