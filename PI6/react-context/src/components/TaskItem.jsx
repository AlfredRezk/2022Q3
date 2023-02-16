import React , {useContext}from "react";
import TaskContext from "../context/TaskProvider";

const TaskItem = ({task}) => {

  const {toggleComplete: onComplete, deleteTask: onDelete} = useContext(TaskContext)

  return (
    <div className="card card-body shadow my-2 d-flex flex-row justify-content-between align-items-center"
      style={{backgroundColor: task.completed&&'lightgreen'}}
    
    >
      <div className="form-check form-switch d-flex align-items-center">
        <input
          className="form-check-input me-5"
          type="checkbox"
          id="taskcheck"
          checked={task.completed}
          onChange={()=>onComplete(task.id)}
        />
        <label className="form-check-label" htmlFor="taskcheck">
          <h4> {task.title}</h4>
        </label>
      </div>

      <div>
        <button className="btn btn-danger" onClick={()=> onDelete(task.id)}> DELETE </button>
      </div>
    </div>
  );
};

export default TaskItem;
