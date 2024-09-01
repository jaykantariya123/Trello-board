import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import TaskLists from "./components/TaskLists/TaskLists";

function App() {
  const [taskDescription, setTaskDescription] = useState("");
  const [category, setCategory] = useState("newTask");
  const [activeCard, setActiveCard] = useState(null);

  const [taskList, setTaskList] = useState({
    newTask: [],
    inProcess: [],
    inReview: [],
    completed: [],
  });

  const onDrop = (newCategory, newPosition) => {
    if (activeCard == null || activeCard === undefined) return;
    const taskDesc = taskList[activeCard.category][activeCard.id];

    let updatedList=taskList[activeCard.category].filter(
        (task, index) => activeCard.id !== index
      );
    if(activeCard.category===newCategory){
      updatedList.splice(newPosition, 0, taskDesc);
    }else{
      taskList[newCategory].splice(newPosition, 0, taskDesc);
    }
    setTaskList({
      ...taskList,
      [activeCard.category]: updatedList,
    });
    
  };
  return (
    <>
      <Header />
      <SearchBar
        taskList={taskList}
        setTaskList={setTaskList}
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
        category={category}
        setCategory={setCategory}
      />
      <TaskLists
        taskList={taskList}
        setTaskList={setTaskList}
        setTaskDescription={setTaskDescription}
        setCategory={setCategory}
        setActiveCard={setActiveCard}
        onDrop={onDrop}
      />
    </>
  );
}

export default App;
