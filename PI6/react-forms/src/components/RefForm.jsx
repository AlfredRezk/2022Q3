import React , {useRef} from 'react'

const RefForm = () => {

    const usernameRef = useRef();
    const passwordRef = useRef();

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(usernameRef.current.value) //document.querySelector('input ').value
        console.log(passwordRef.current.value)
    }
  return (
    <div className="card card-body">
    <form onSubmit={submitHandler}>
   
      <input type="text"  
             className={`form-control mb-2`} 
             placeholder='Username'
             ref={usernameRef}
             />
      <input type="password"  
          className={`form-control mb-2`}
             placeholder='Password'
             ref={passwordRef}
             />
      <div className="text-center">
        <button className='btn btn-primary' type='submit'> Login</button>
      </div>
    </form>
  </div>
  
  )
}

export default RefForm