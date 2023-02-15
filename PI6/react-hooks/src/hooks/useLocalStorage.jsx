import {useState} from 'react';

const useLocalStorage = (key, initalValue)=>{

    const getValue = (key, initalValue)=>{
        const item  = localStorage.getItem(key);
        if(item){
            return JSON.parse(item);
        }else{
            return initalValue
        }

    }

    const [localValue, setLocalValue] = useState(()=>getValue(key, initalValue))

    const setValue = (value)=>{
        setLocalValue(value);
        localStorage.setItem(key, JSON.stringify(localValue))
    }



    return [localValue, setValue]

}


export default useLocalStorage;

