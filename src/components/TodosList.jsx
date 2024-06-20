import React from 'react';
import {useState} from 'react';

const TodosList = () => {

  const [tasks, setTasks] = useState(["Go to shower", "Eat Break fast", "Walk your dog"]);
  const [newTasks, setNewTasks] = useState("");

  const handleInputChange = (event) => {
    setNewTasks(event.target.value);
  }

  const addTask = () => {

    if(newTasks.trim() !== ""){
      setTasks(t => [...t, newTasks]);
      setNewTasks([""]);
    }
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

  }

  const moveTaskUp = (index) => {
    
    if(index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = 
      [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }

  }
  
  const moveTaskDown = (index) => {

    if(index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className='todolist'>
      <div className='list-input'>
        <input
          type='text'
          placeholder='Enter a task'
          value={newTasks}
          onChange={handleInputChange}
          
        />

        <button
          className='add-button'
          onClick={addTask}>
            Add
        </button>
      </div>

      <div>
        <table className='table'>
          <thead>
            <tr className='fw-bold'>
            <td>Task</td>
            <td>Action</td>
            </tr>
          </thead>
          <tbody className='text-start'>
            {tasks.map((task,index) =>
            <tr key={index}> 
            <td>
              <span>{task}</span>
            </td>
            <td className='text-end'>
              <button
                className='btn btn-sm btn-success mx-1'
                onClick={() => moveTaskUp(index)}>
                  Up
              </button>
              <button
                className='btn btn-sm btn-primary mx-1'
                onClick={() => moveTaskDown(index)}>
                  Down
              </button>
              <button
                className='btn btn-sm btn-danger mx-1'
                onClick={() => deleteTask(index)}>
                  Delete
              </button>
            </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default TodosList
