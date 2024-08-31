import React from "react";
import "./TaskList.css";
import Task from "../Task/Task";

const TaskList = ({
  title,
  taskList,
  category,
  setTaskList,
  setTaskDescription,
  setCategory,
}) => {
  const removeTask = (id) => {
    setTaskList({
      ...taskList,
      [category]: taskList[category].filter((task, index) => id != index),
    });
  };

  const editTask = (id) => {
    setCategory(category);
    setTaskDescription(taskList[category][id]);
    setTaskList({
      ...taskList,
      [category]: taskList[category].filter((task, index) => id != index),
    });
  };
  return (
    <div className="tasklist">
      <h3>{title}</h3>
      <div className="tasks">
        {taskList[category].map((task, index) => {
          return (
            <Task
              task={task}
              key={index}
              index={index}
              removeTask={removeTask}
              editTask={editTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
