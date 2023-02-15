import React, { useState, useEffect } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(()=>{
        console.log(`UseEffect function executed `)
    }, [])

    // const [state, setState] = useState({count: 0, show: true})

    const increase = () => {
        setCount(prev=> prev+1)
    }

    // const increase = ()=>{
    //     setState(prev=> ({count: prev.count+1, show: prev.show}))
    // }


    const decrease = ()=>{
        setCount(prev=> prev-1)
        // setState(prev=> ({count: prev.count+1, show: prev.show}))
    }

    const toggleShow = ()=>{
        setShow(prev=> !prev)
        // setState(prev=> ({count: prev.count, show: !prev.show}))
    }

  return (

    <div className="container mt-5 m-auto">
       {show && (
        <div className="card card-body w-50 mb-2">
            <h3 className="text-center">{count}</h3>
        </div>)
        }
       
        <button className="btn btn-primary mx-2" onClick={toggleShow}> {show? 'Hide' : 'Show'}</button>
        <button className="btn btn-primary mx-2" onClick={increase}> + </button> 
        <button className="btn btn-primary mx-2" onClick={decrease}> - </button> 
    </div>
    
    
  )
}

export default Counter