import React, { useState, useRef } from 'react'

const LoginForm = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [passwordIsValid, setPasswordIsValid] = useState(true);
    const [isFormValid, setIsFormValid] = useState(false);

    const submitHandler = ()=> console.log({email: emailRef.current.value, password: passwordRef.current.value});
    const validateEmail = ()=> setEmailIsValid(emailRef.current.value.includes('@'));
    const validatePassword = ()=> setPasswordIsValid(passwordRef.current.value.trim().length>=5)

    const emailHandler = (e)=>{
        validateEmail();
        setIsFormValid(e.target.value.includes('@') && passwordRef.current.value.trim().length>=5)
    }

    const passwordHandler = (e)=>{
        validatePassword();
        setIsFormValid(e.target.value.trim().length>=5 && emailRef.current.value.includes('@'))
    }

 
  return (
   
    <div className="card card-body my-5 shadow"> 
    <h4 className="text-center mb-3"> Login</h4>
    <form onSubmit={submitHandler}>
        <input type="email" 
         className={`form-control mb-3 ${!emailIsValid&&'is-invalid'}`} 
         onChange={emailHandler} onBlur={validateEmail}
         ref={emailRef}
         placeholder="Username"
         />
        
        <input type="password" 
         className={`form-control mb-3 ${!passwordIsValid&&'is-invalid'}`} 
         onChange={passwordHandler} onBlur={validatePassword} ref={passwordRef}
         placeholder="Password"
         />


         <div className="text-center">
            <button className="btn btn-primary" disabled={isFormValid? false: true}> Login</button>
         </div>
    </form>
    
    </div>
    )
}

export default LoginForm