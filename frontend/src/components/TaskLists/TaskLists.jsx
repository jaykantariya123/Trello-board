import React from "react";
import "./TaskLists.css";
import TaskList from "../TaskList/TaskList";

const TaskLists = ({
  taskList,
  setTaskList,
  setTaskDescription,
  setCategory,
  setActiveCard,
  onDrop
}) => {
  return (
    <div className="task-lists">
      <TaskList
        title="🎯 New Task"
        taskList={taskList}
        category="newTask"
        setTaskList={setTaskList}
        setTaskDescription={setTaskDescription}
        setCategory={setCategory}
        setActiveCard={setActiveCard}
        onDrop={onDrop}
      />
      <TaskList
        title="⏳ In Process"
        taskList={taskList}
        category="inProcess"
        setTaskList={setTaskList}
        setTaskDescription={setTaskDescription}
        setCategory={setCategory}
        setActiveCard={setActiveCard}
        onDrop={onDrop}
      />
      <TaskList
        title="🧐 In Review"
        taskList={taskList}
        category="inReview"
        setTaskList={setTaskList}
        setTaskDescription={setTaskDescription}
        setCategory={setCategory}
        setActiveCard={setActiveCard}
        onDrop={onDrop}
      />
      <TaskList
        title="✅ Completed"
        taskList={taskList}
        category="completed"
        setTaskList={setTaskList}
        setTaskDescription={setTaskDescription}
        setCategory={setCategory}
        setActiveCard={setActiveCard}
        onDrop={onDrop}
      />
    </div>
  );
};

export default TaskLists;
