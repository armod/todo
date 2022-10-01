import React, { useEffect } from 'react'

export const Alert = ({ type, msg, removeAlert }) => {
  //removeAlert wywołanie jeden raz efektu, wyswietlenie alertu prze 3sekundy
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])
  return <p className={`alert alert-${type}`}>{msg}</p>
}
