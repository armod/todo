import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useReducer } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

const InitialState = {
  /* id: 0,
  task: '',
  content: '',
  isDone: false,
  date: '', */
}

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState)

  const [task, setTask] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
  const [isDone, setIsDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!task) {
      //display alert
      // setAlert({ show: true, msg: 'please enter value', type: 'danger' })
      showAlert(true, 'danger', 'please enter value')
    } else if (task && isEditing) {
      //edit
      console.log('task && isEditing')
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: task }
          }
          return item
        })
      )
      setTask('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'value changed')
    } else {
      showAlert(true, 'success', 'item add to the list')
      const newTask = { id: new Date().getTime().toString(), title: task, done: isDone }
      setList([...list, newTask])
      setTask('')
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  const clearList = () => {
    showAlert(true, 'danger', 'empty list')
    setList([])
  }

  const removeTodo = (id) => {
    showAlert(true, 'danger', 'task removed')
    setList(list.filter((item) => item.id !== id))
  }

  const removeAllDone = (id) => {
    showAlert(true, 'danger', 'all completed tasks have been deleted')
    setList(list.filter((item) => item.done === false))
  }

  const editTask = (id) => {
    const specyficItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setTask(specyficItem.title)
  }

  const doneTask = (id) => {
    showAlert(true, 'success', 'task done')
    const specyficItem = list.find((item) => item.id === id)
    //ustaw isDone na true
    // setIsDone(!isDone)
    console.log(isDone, specyficItem, specyficItem.id, specyficItem.done)
    setList(
      list.map((item) => {
        if (item.id === specyficItem.id) {
          // console.log('in if')
          return { ...item, done: !specyficItem.done }
        }
        return item
      })
    )
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])
  return <AppContext.Provider value={{ ...state, task, setTask, list, isEditing, editID, alert, removeAllDone, doneTask, clearList, removeTodo, handleSubmit, setTask, editTask, showAlert }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
