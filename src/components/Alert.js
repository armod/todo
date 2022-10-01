import React, { useEffect } from 'react'

export const Alert = ({ type, msg, removeAlert, list }) => {
  //removeAlert wywołanie jeden raz efektu, wyswietlenie alertu prze 3sekundy
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [list])
  return <p className={`alert alert-${type}`}>{msg}</p>
}
