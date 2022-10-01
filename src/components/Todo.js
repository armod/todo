import React from 'react'
import { useGlobalContext } from '../context'
import { MdEdit, MdDelete } from 'react-icons/md'

export const Todo = ({ items }) => {
  const { add, remove } = useGlobalContext()
  return (
    <>
      <div className='task-list'>
        {items.map((item) => {
          const { id, title } = item
          return (
            <article key={id} className='todo-item'>
              <p className='title'>{title}</p>
              <button className='btn-edit'>
                <MdEdit />
              </button>
              <button className='btn-delete'>
                <MdDelete />
              </button>
            </article>
          )
        })}
      </div>
    </>
  )
}
