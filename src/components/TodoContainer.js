import React from 'react'
import { useGlobalContext } from '../context'

export const TodoContainer = () => {
  const { asd } = useGlobalContext()
  return (
    <>
      <div className='todo'>
        <header>
          <h2>Your todo list</h2>
        </header>
      </div>
    </>
  )
}
