import React from 'react'
import { MdEdit, MdDelete, MdDoneOutline } from 'react-icons/md'

export const Todo = ({ items, removeTodo, editTask, doneTask }) => {
  return (
    <>
      <div className='task-list'>
        {items.map((item) => {
          const { id, title, done } = item
          return (
            <article key={id} className='todo-item'>
              <p className={done ? 'title is-done' : 'title'}>{title}</p>
              <button className={done ? 'btn btn-done done' : 'btn btn-done'} onClick={() => doneTask(id)}>
                <MdDoneOutline />
              </button>
              <button className='btn btn-edit' onClick={() => editTask(id)}>
                <MdEdit />
              </button>
              <button className='btn btn-delete' onClick={() => removeTodo(id)}>
                <MdDelete />
              </button>
            </article>
          )
        })}
      </div>
    </>
  )
}
