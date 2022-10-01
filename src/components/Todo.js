import React from 'react'
import { useGlobalContext } from '../context'
import { MdEdit, MdDelete } from 'react-icons/md'
import { useEffect } from 'react'

export const Todo = ({ items, removeTodo, editTask }) => {
  const { state } = useGlobalContext()

  return (
    <>
      <div className='task-list'>
        {items.map((item) => {
          const { id, title } = item
          return (
            <article key={id} className='todo-item'>
              <p className='title'>{title}</p>
              <button className='btn-edit' onClick={() => editTask(id)}>
                <MdEdit />
              </button>
              <button className='btn-delete' onClick={() => removeTodo(id)}>
                <MdDelete />
              </button>
            </article>
          )
        })}
      </div>
    </>
  )
}
