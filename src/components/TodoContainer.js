import React from 'react'
import { Todo } from './Todo'
import { useGlobalContext } from '../context'
import { Alert } from './Alert'

export const TodoContainer = () => {
  const { handleSubmit, alert, isEditing, task, setTask, list, showAlert, clearList, removeTodo, editTask } = useGlobalContext()
  return (
    <>
      <div className='todo-container'>
        <header>
          <h2>Your todo list</h2>
        </header>
        <form onSubmit={handleSubmit} className='form'>
          {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

          <input
            type='text'
            className='todo-input'
            placeholder='write task'
            value={task}
            onChange={(e) => {
              setTask(e.target.value)
            }}
          />
          <button className='btn' type='submit'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </form>
        {list.length > 0 && (
          <div>
            <Todo items={list} removeTodo={removeTodo} editTask={editTask} />
            <button className='btn btn-clear' onClick={clearList}>
              clear all
            </button>
          </div>
        )}
        {/* <footer>
          <div className='task-total'>
            <h4>
              total
              <span></span>
              <button className='btn btn-clear'>clear task</button>
            </h4>
          </div>
        </footer> */}
      </div>
    </>
  )
}
