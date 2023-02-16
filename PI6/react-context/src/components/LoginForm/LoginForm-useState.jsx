import React, { useState } from 'react'

const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [password, setPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState(true);
    const [isFormValid, setIsFormValid] = useState(false);


    const submitHandler = ()=> console.log({email: email, password: password});
    const validateEmail = ()=> setEmailIsValid(email.includes('@'));
    const validatePassword = ()=> setPasswordIsValid(password.trim().length>=5)

    const emailHandler = (e)=>{
        validateEmail();
        setEmail(e.target.value);
        setIsFormValid(e.target.value.includes('@') && password.trim().length>=5)
    }

    const passwordHandler = (e)=>{
        validatePassword();
        setPassword(e.target.value);
        setIsFormValid(e.target.value.trim().length>=5 && email.includes('@'))
    }

 
  return (
   
    <div className="card card-body my-5 shadow"> 
    <h4 className="text-center mb-3"> Login</h4>
    <form onSubmit={submitHandler}>
        <input type="email" 
         className={`form-control mb-3 ${!emailIsValid&&'is-invalid'}`} 
         onChange={emailHandler} value={email} onBlur={validateEmail}
         placeholder="Username"
         />
        
        <input type="password" 
         className={`form-control mb-3 ${!passwordIsValid&&'is-invalid'}`} 
         onChange={passwordHandler} value={password} onBlur={validatePassword}
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