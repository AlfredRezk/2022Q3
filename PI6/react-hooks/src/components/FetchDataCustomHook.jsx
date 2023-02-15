import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const FetchDataCustomHook = () => {
  const [todos, loading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/todos",
    {}
  );

  let jsx = <h1 className="text-center"> Loading .....</h1>;

  if (!loading) {
    jsx = (
      <div className="container mt-5">
        <ul className="list-group">
          {todos.map((todo) => (
            <li className="list-group-item" key={todo.id}>
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <>{jsx}</>;
};

export default FetchDataCustomHook;
