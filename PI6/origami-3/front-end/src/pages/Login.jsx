import React, { useState } from 'react';
import '../assets/workshop-styles.css';
import {login} from '../service'
import {useNavigate} from 'react-router-dom'

const Login = ({setIsAuth}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const submitHandler = async(e)=>{
        e.preventDefault();
        const res = await login(email, password);
        setIsAuth(res)
        if(res) navigate('/');

    }
    
  return (
    <div className='Login'>
        <h1>Login Page</h1>
        <form onSubmit = {submitHandler}>
        <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' onChange={(e)=> setEmail(e.target.value)} value={email}/>
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' onChange={(e)=> setPassword(e.target.value)} value={password}/>
            </div>
            <div className="form-control">
                <button type="submit"> Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login