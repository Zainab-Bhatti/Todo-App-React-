// TaskList.js
import React from 'react';
import Task from './Task';
import "./stylesheet/TaskList.css";

function TaskList({ tasks, onDel, onComplete }) {
  return (
    <div className="task-list">
     <ol>
      {tasks.map((task) => (
       <li><Task className="todo-task" key={task.id} task={task} onDel={onDel} onComplete={onComplete} /></li> 
      ))}
      </ol>
    </div>
  );
}

export default TaskList;
