
import React, { useState } from 'react';
import "./stylesheet/AddTask.css";

function AddTask({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (title.trim() !== '') {
      onAdd(title,description);
      setTitle('');
      setDescription(' ')
    }
  };

  return (
    <div>
   
    <div className="add-task">
      <div className='titlefield'>
           <label>Title: </label><input className='inputField1' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <span className='descfield'>
           <label>Description: </label><input className='inputField2' type="text" value={description} onChange={(e) => setDescription(e.target.value)} />      
           <button className='btn-add' onClick={handleAdd}>Add Task</button>
      </span>
      </div>
    </div>
  );
}

export default AddTask;
