import React from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'

export const Todo = ({ items, removeTodo, editTask }) => {
  return (
    <>
      <div className='task-list'>
        {items.map((item) => {
          const { id, title } = item
          return (
            <article key={id} className='todo-item'>
              <p className='title'>{title}</p>
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
