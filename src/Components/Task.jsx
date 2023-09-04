import React from 'react';
import "./stylesheet/Task.css";

function Task({ task, onDel, onComplete }) {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <div className='title'>{task.title}</div>
      <span className='description'>{task.description}</span>
      <button className='btn-del' onClick={() => onDel(task.id)}>Delete</button>
      {!task.completed && <button className='btn-compl' onClick={() => onComplete(task.id)}>Mark as Complete</button>}
      <div><hr className='line'></hr></div>
      </div>
  );
}

export default Task;
