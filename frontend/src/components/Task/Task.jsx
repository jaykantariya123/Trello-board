import React from "react";
import "./Task.css";
const Task = ({ task,index, removeTask,editTask }) => {
  return (
    <div className="task">
      <h3>{task}</h3>
      <i className="fas fa-edit" onClick={()=>editTask(index)}></i>
      <i className="fa fa-trash" onClick={()=>removeTask(index)}></i>
    </div>
  );
};

export default Task;
