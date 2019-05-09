import React from 'react';
import './TodoCardCollections.css';
import TodoCard from '../TodoCard/TodoCard';

const TodoCardCollections = ({data,deleteTaskFromUI}) => {

const createTask = (item) => {
  return <TodoCard deleteTask={deleteTaskFromUI} id={item.id} title={item.input}/>
}

let getAllTask = data.map( item => {
  return createTask(item);
})

  return (
    <div className="todo-collection">
    {getAllTask}
    </div>
  )
}

export default TodoCardCollections;
