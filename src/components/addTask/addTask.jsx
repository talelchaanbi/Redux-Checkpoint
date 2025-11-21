import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../JS/actions/toDoActions.js';
import './addTask.css';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!description.trim()) return;
    const newTask = {
      id: Date.now(),
      description: description.trim(),
      isDone: false,
    };
    dispatch(addTask(newTask));
    setDescription('');
  };

  return (
    <div className="add-task mb-3">
      <h3>Add Task</h3>
      <div className="d-flex gap-2 justify-content-center">
        <input
          className="form-control"
          placeholder="Nouvelle tâche"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
