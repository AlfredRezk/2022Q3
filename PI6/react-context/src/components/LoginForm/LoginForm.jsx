import React, { useState, useRef, useReducer } from 'react'


const initalState = {value: '', isValid: true}

const emailReducer = (state, {type, payload})=>{
    switch(type){
        case 'EMAIL_INPUT': return {value: payload, isValid: payload.includes('@')};
        case 'blur': return {value: state.value, isValid:state.value.includes('@') }
        default: return state;
    }
}

const passwordReducer = (state, {type, payload})=>{
    switch(type){
        case 'PASSWORD_INPUT': return {value: payload, isValid: payload.trim().length>=5};
        case 'PASSWORD_BLUR': return {value: state.value, isValid:state.value.trim().length>=5 }
        default: return state;
    }
}


const LoginForm = () => {

    const [email, dispatchEmail]= useReducer(emailReducer, initalState);
    const [password, dispatchPassword]= useReducer(passwordReducer, initalState);

    const submitHandler = ()=> console.log({email: email.value, password: password.value});
    const validateEmail = ()=> dispatchEmail({type:'blur'})
    const validatePassword = ()=> dispatchPassword({type:'PASSWORD_BLUR'})
    const emailHandler = (e)=> dispatchEmail({type: 'EMAIL_INPUT', payload: e.target.value})
    const passwordHandler = (e)=> dispatchPassword({type:'PASSWORD_INPUT', payload: e.target.value})

 
  return (
   
    <div className="card card-body my-5 shadow"> 
    <h4 className="text-center mb-3"> Login</h4>
    <form onSubmit={submitHandler}>
        <input type="email" 
         className={`form-control mb-3 ${!email.isValid&&'is-invalid'}`} 
         onChange={emailHandler} onBlur={validateEmail}
         value={email.value}
         placeholder="Username"
         />
        
        <input type="password" 
         className={`form-control ${!password.isValid&&'is-invalid'}`} 
         onChange={passwordHandler} onBlur={validatePassword} value={password.value}
         placeholder="Password"
         />
         {!password.isValid&& <small className='text-danger'> Password should be 5 characters min.</small>}


         <div className="text-center">
            <button className="btn btn-primary" > Login</button>
         </div>
    </form>
    
    </div>
    )
}

export default LoginForm