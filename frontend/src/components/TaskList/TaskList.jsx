import React from "react";
import "./TaskList.css";
import Task from "../Task/Task";
import DropArea from "../DropArea.jsx/DropArea";

const TaskList = ({
  title,
  taskList,
  category,
  setTaskList,
  setTaskDescription,
  setCategory,
  setActiveCard,
  onDrop
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
        <DropArea onDrop={() => onDrop(category, 0)} />
        {taskList[category].map((task, index) => {
          return (
            <React.Fragment key={index}>
              <Task
                task={task}
                index={index}
                removeTask={removeTask}
                editTask={editTask}
                category={category}
                setActiveCard={setActiveCard}
              />
              <DropArea onDrop={() => onDrop(category, index+1)} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
