import React from 'react';
import './todo-card.css';

const TodoCard = ({title,id,deleteTask}) => {
  return (
    <div className="todo-card">
     <div className="todo-card--title">
       <p>{title}</p>
     </div>
     <div className="todo-card--delete">
       <button onClick={() => deleteTask(id)} key={id}  className="delete-btn">
         <i className="fas fa-trash-alt"></i>
       </button>
     </div>
    </div>
  )
}

export default TodoCard;
