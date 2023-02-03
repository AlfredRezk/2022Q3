import React, {useState} from 'react';

const CounterFunc = () => {
  console.log('Counter Func Mounted to the DOM')

    const [counter, setCounter]= useState(0)
    const [show, setShow] = useState(true);


  return (
    <div className='mt-5'>
    <button className='btn btn-primary mx-2' onClick={()=>{setCounter(prev=> prev+1)}}> + </button>
    <button className='btn btn-primary mx-2' onClick={()=>{setCounter(counter-1)}}> -</button>
    <button className='btn btn-primary mx-2' onClick={()=>{setShow(prev=> !prev)}}> Hide</button>
    <h4> {counter}</h4>
</div>
    )
}

export default CounterFunc