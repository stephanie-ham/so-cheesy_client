import React, { useState, createContext } from "react"

export const BoardContext = createContext()

export const BoardProvider = (props) => {
  const [boards, setBoards] = useState([])
  const URL = "http://localhost:8088"

  const getBoards = () => {
    return fetch(`${URL}/boards?_expand=image&_sort=image.url`)
    .then(res => res.json())
    .then(setBoards)
  }

  const addBoard = boardObj => {
    return fetch(`${URL}/boards`, {
      method: "POST",
      headers: {
        "Content-Type": "application.json"
      },
      body: JSON.stringify(boardObj)
    })
    .then(getBoards)
  }
  
  return (
    <BoardContext.Provider value={{
      boards, getBoards, addBoard
    }}>
      {props.children}
    </BoardContext.Provider>
  )

}