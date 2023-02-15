import { useState } from "react"

const useInput = (validationFn)=>{
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validationFn(enteredValue);
    const hasError = !isValid && isTouched;

    const changeHandler = (e)=>{
        setEnteredValue(e.target.value);
    }

    const blurHandler = (e)=>{
        setIsTouched(true);
    }

    const reset = ()=>{
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue, 
        hasError, 
        changeHandler, 
        blurHandler, 
        isValid, 
        reset
    }

}



export default useInput
