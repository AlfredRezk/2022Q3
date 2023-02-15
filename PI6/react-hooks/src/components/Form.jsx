import React from 'react'
import FormInput from './FormInput'

const Form = () => {

    const validationHandler =(value)=>{
        return value.trim().length>=5
    }

  return (

    <div className="container">
        <div className="card card-body">
            <form>
                <FormInput placeholder="Username" type="text" validation={validationHandler}/>
                <FormInput placeholder="Password" type="passowrd" validation={validationHandler}/>
            </form>
        </div>
    </div>

    )
}

export default Form