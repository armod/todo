import React from 'react'
import { Todo } from './Todo'
import { useGlobalContext } from '../context'
import { Alert } from './Alert'

export const TodoContainer = () => {
  const { handleSubmit, alert, isEditing, task, setTask, list, showAlert, clearList } = useGlobalContext()
  return (
    <>
      <div className='todo-container'>
        <header>
          <h2>Your todo list</h2>
        </header>
        <form onSubmit={handleSubmit} className='form'>
          {alert.show && <Alert {...alert} removeAlert={showAlert} />}
          <div>
            <input
              type='text'
              className='todo-input'
              placeholder='write task'
              value={task}
              onChange={(e) => {
                setTask(e.target.value)
              }}
            />
          </div>
          <button className='btn' type='submit'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </form>
        {list.length > 0 && (
          <div>
            <Todo items={list} />
            <button className='btn-clear' onClick={clearList}>
              clear todo
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