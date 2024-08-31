import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import TaskLists from'./components/TaskLists/TaskLists';

function App() {

  const [taskDescription, setTaskDescription] = useState("");
  const [category, setCategory] = useState("newTask");

  const [taskList,setTaskList]=useState({
    "newTask":[],
    "inProcess":[],
    "inReview":[],
    "completed":[]
  });

  useEffect(()=>{console.log(taskList)},[taskList]);
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
      />
    </>
  );
}

export default App
