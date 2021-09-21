import React, { useState, createContext } from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {
  const URL = "http://localhost:8088" 

  const [users, setUsers] = useState([])

  const getUsers = () => {
    return fetch(`${URL}/users`)
    .then(res => res.json())
    .then(setUsers)
  }

  return (
    <UserContext.Provider value={{
      users, getUsers
    }}>
      {props.children}
    </UserContext.Provider>/* this lets other components know what they can access */
  )
}