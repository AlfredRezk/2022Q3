import React, { useState } from 'react';
import '../assets/workshop-styles.css';
import {register} from '../service'
import {useNavigate} from 'react-router-dom'

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const navigate = useNavigate();


    const submitHandler = async(e)=>{
        e.preventDefault();
        if(!email|| !password || !password2) return 
       const res = await  register(email, password);
       console.log(res);
        navigate('/login')
    }
  return (
    <div className='Register'>
        <h1>Register Page</h1>
        <form onSubmit={submitHandler}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' onChange={(e)=> setEmail(e.target.value)} value={email}/>
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' onChange={(e)=> setPassword(e.target.value)} value={password}/>
            </div>
            <div className="form-control">
                <label htmlFor="password2">Re-Password</label>
                <input type="password" id='password2' onChange={(e)=> setPassword2(e.target.value)} value={password2}/>
            </div>

            <div className="form-control">
                <button type="submit"> Register</button>
            </div>
        </form>
    </div>
  )
}

export default Register