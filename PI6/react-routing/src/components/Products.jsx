import React from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {

    const {id} = useParams()
  return (
    <div>Products Id : {id}</div>
  )
}

export default Products