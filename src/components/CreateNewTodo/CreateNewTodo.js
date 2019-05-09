import React from 'react';
import './create-new-todo.css';

const CreateNewTodo = ({getInputValue, createNewTask}) => {
  return (
    <div className="create-new">
      <div className="create-new__input">
        <h1>Add new task</h1>
        <input id="input" onChange={getInputValue} type="text" placeholder="Task Name" />
      </div>
      <div className="create-new__button">
        <div onClick={createNewTask} className="round-btn"><i className="fas fa-check"></i></div>
      </div>
    </div>
  )
}

export default CreateNewTodo;
