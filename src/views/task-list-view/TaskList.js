import React, { Component } from 'react';
import './task-list.css'

export default class TaskList extends Component {
 constructor(props) {
  super(props);
  this.state = {
   tasks: [],
   data_input:''
  }
 }

 changeInputValue = (event) => {
  const target = event.target
  this.setState({
   ...this.state,
   [target.name]: target.value
  })
 }


 addTask = () => {
  const {tasks, data_input} = this.state
  if (!data_input) return 
  
  const newTasks = [...tasks, data_input]
  this.setState({ tasks: newTasks, data_input:''})
 }

 render() {
  const { tasks, data_input} = this.state
  return (
   <div className={'task-list--centralize'}>
   <div className={'App-card task-list--conatiner'}>
    <div className={'task-list--data-input'} >
      <input name='data_input' className={'task-list--width-input'} value={data_input} placeholder={'Tarefa'} onChange={(e) => this.changeInputValue(e)} />
     <button onClick={() => this.addTask()}>Add</button>
    </div>
    <div className={'task-list--flex-start'}>    
     <ul>
      {
       tasks.map((task, index) => {
        return (
         <li key={`${index}-${task}`}>{task}</li>
        )
       })
      }
      </ul>  
     </div>
    </div>
    </div>
  )
 }
}