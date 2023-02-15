import React, { useState, useEffect } from "react";

const StopWatch = () => {

    const [seconds, setSeconds] = useState(0);
    const [start, setStart] = useState(false);


  // componentWillUpdate() => start state updated
  useEffect(() => {
    let id;
    if(start){
        id= setInterval(() => {
            setSeconds((prev) => prev + 1);
          }, 1000);
            
    }else{
        setSeconds(0);
        clearInterval(id);
    }

    return ()=>{
        clearInterval(id);
    }
    
  }, [start]);


  
  return (
    <div className="container mt-5">
      
        <div className="card card-body text-center w-25 mx-auto">
          <h3 className="mb-3">{seconds}</h3>
          <button
            onClick={() => setStart((prev) => !prev)}
            className="btn btn-primary"
          >
            {start ? "Stop" : "Start"}
          </button>
        </div>
      
    </div>
  );
};

export default StopWatch;
