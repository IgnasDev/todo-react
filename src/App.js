import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import CreateNewTodo from './components/CreateNewTodo/CreateNewTodo';
import TodoCardCollection from './components/TodoCardCollections/TodoCardCollections';

let data = [];

class App extends React.Component {
 constructor() {
   super();

   this.state = {
     collections: [],
     placeholder: ''
   }
 }


 collectTaskFromInput = (event) => {
   this.setState({placeholder: event.target.value})
 }

 createNewTaskObj = () => {
   let id, newTask, currentTaskTitle;
   currentTaskTitle = this.state.placeholder;
   function TaskObj(input,id) {
     this.input = input;
     this.id = id;
   }

   if(data.length === 0) {
     id = 0;
   } else {
     id = data[data.length - 1].id + 1;
   }

   newTask = new TaskObj(currentTaskTitle, id);
   this.addTaskToDataStructure(newTask);
   this.setState({collections: data})
   this.clearInput();
 }

 clearInput = () => {
  const node = ReactDOM.findDOMNode(this);
  node.querySelector('#input').value = '';
 }

 addTaskToDataStructure = (newTask) => {
  data.push(newTask)
 }


 deleteTaskFromUI = (id) => {
     const filteredItems = data.filter( task => {
       return task.id !== id
     })
     this.setState({collections: filteredItems})
     data = filteredItems;
 }

  render() {
      return (
        <div className="App">
        <CreateNewTodo createNewTask={this.createNewTaskObj} getInputValue={this.collectTaskFromInput}/>
        <TodoCardCollection deleteTaskFromUI={this.deleteTaskFromUI} data={this.state.collections}/>
        </div>
      )
  }
}

export default App;
