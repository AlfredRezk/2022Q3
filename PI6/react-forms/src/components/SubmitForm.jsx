import React, {useState} from 'react'

const SubmitForm = () => {

  const [username, setUsername] = useState('');
  const [usernameValid, setUsernameValid] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);



  const submitHandler = (e)=>{
    e.preventDefault()

    if(!username)
    { setUsernameValid(false)
      return 
    }

    if(!password) {
      setPasswordValid(false)
    return 
    }
 
    if(!usernameValid && !passwordValid){
      setPasswordValid(true);
      setUsernameValid(true);
      console.log('Form submitted')
    }
    

  }

  return (

    <div className="card card-body">
      <form onSubmit={submitHandler}>
      {!usernameValid &&<small className='text-danger'> Invalid Username</small>}
        <input type="text"  
               className={`form-control mb-2 ${!usernameValid&& 'is-invalid'}`} 
               placeholder='Username'
               onChange= {(e)=>setUsername(e.target.value)}
               value = {username}
               />

      {!passwordValid &&<small className='text-danger'> Invalid Password</small>}
        <input type="password"  
            className={`form-control mb-2 ${!usernameValid&& 'is-invalid'}`}
               placeholder='Password'
               onChange={(e)=> setPassword(e.target.value)}
               value={password}
               />
        <div className="text-center">
          <button className='btn btn-primary' type='submit'> Login</button>
        </div>
      </form>
    </div>
    
  )
}

export default SubmitForm