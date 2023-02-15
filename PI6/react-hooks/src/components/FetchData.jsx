import React, { useState, useEffect } from 'react'

const FetchData = () => {

    const [todos, setTodos] = useState([])


    useEffect(()=>{
        console.log('Fetching data from json server')
        fetchData();
    }, [])

    const fetchData = async()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await res.json();
        setTodos(data);
    }

  return (
    <div className='container mt-5'>
        <ul className="list-group">
            {todos.map(todo=> <li className='list-group-item' key={todo.id}> { todo.title}</li>)}
        </ul>
    </div>
  )
}

export default FetchData