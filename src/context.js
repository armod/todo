import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useReducer } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

const InitialState = {
  id: 0,
  task: '',
  content: '',
  isDone: false,
  date: '',
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState)

  const [task, setTask] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!task) {
      //display alert
      // setAlert({ show: true, msg: 'please enter value', type: 'danger' })
      showAlert(true, 'danger', 'please enter value')
    } else if (task && isEditing) {
      //edit
    } else {
      showAlert(true, 'success', 'item add to the list')
      const newTask = { id: new Date().getTime.toString(), title: task }
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

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  return <AppContext.Provider value={{ ...state, task, setTask, list, isEditing, editID, alert, clearList, remove, handleSubmit, setTask, showAlert }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
