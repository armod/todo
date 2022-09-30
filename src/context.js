import React from 'react'
import { useContext } from 'react'
import { useReducer } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const InitialState = {
    task: [],
    content: '',
    isDone: false,
  }
  const [state, dispatch] = useReducer(reducer, InitialState)
  const asd = 'qwerty'
  return <AppContext.Provider value={{ ...state, asd }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
