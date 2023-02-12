import React, { useState } from 'react'

const KeyStrokeForm = () => {

    const [name, setName] = useState('')
    const [nameTouched, setTouched] = useState(false);
    const nameInvalid = !name.trim()&& nameTouched;
    const formValid = !nameInvalid;


const nameBlurHandler = (e)=>{
    setTouched(true)
}

const nameChangeHandler = (e)=>{
    setTouched(true);
    setName(e.target.value);
}

const submitHandler = (e)=>{
    e.preventDefault();

    if(nameInvalid) return
    console.log(name);
    setName('');
    setTouched(false)
}
  return (
 
    <div className="card card-body">
        <form onSubmit={submitHandler}>
            <input type="text" 
            placeholder='Enter your name'
            className='form-control mb-2'
            onChange= {nameChangeHandler}
            value={name}
            onBlur={nameBlurHandler}
            />
            {nameInvalid && <small className='text-danger'>Please Enter your name</small>}

<div className="text-center">
<button className='btn btn-primary' disabled={formValid? false: true}> Submit</button>

</div>
        </form>
    </div>
  )
}

export default KeyStrokeForm