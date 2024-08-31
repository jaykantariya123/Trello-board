import React, { useEffect, useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ taskList, setTaskList,taskDescription,setTaskDescription, category ,setCategory}) => {
  
  const addTask = () => {
    setTaskList({
      ...taskList,
      [category]: [...taskList[category], taskDescription],
    });
    setTaskDescription("");
    setCategory("newTask");
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Enter a Task"
        onChange={(e) => setTaskDescription(e.target.value)}
        value={taskDescription}
      />
      <select
        name="TaskType"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      >
        <option value="newTask">New Task</option>
        <option value="inProcess">In Process</option>
        <option value="inReview">In Review</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
};

export default SearchBar;
