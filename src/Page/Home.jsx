import React, { useState, useEffect } from 'react';
import AddTask from '../Components/AddTask';
import TaskList from '../Components/TaskList';
import "./Home.css";

function Home() {
  //const [tasks, setTasks] = useState([]);
  const [storedTask,setStoredTask]=useState(()=>{
    const savedState=localStorage.getItem("tasks");
    const storedTask=JSON.parse(savedState);
    return storedTask || [];
  });
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(storedTask));
  }, [storedTask]);
  


  // Function to add a new task
  const addTask = (title,description) => {
    const newTask = { id: Date.now(), title, description, completed: false };
    setStoredTask([...storedTask, newTask]);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    const updatedTasks = storedTask.filter((storedTask) => storedTask.id !== taskId);
    setStoredTask(updatedTasks);
  };

  // Function to mark a task as complete
  const markComplete = (taskId) => {
    const updatedTasks = storedTask.map((storedTask) =>
      storedTask.id === taskId ? { ...storedTask, completed: true } : storedTask
    );
    setStoredTask(updatedTasks);
  };

  // Load tasks from local storage on component mount

  // Save tasks to local storage whenever the tasks state changes
  return (
    <div className="home">
      <h1>My Planner!</h1>
      <AddTask onAdd={addTask} />
      <TaskList tasks={storedTask} onDel={deleteTask} onComplete={markComplete} />
      
    </div>
  );
}

export default Home;
