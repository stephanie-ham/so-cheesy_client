import React, { useState } from "react"

export const BoardContext = createBoard()

export const BoardProvider = (props) => {
  const [boards, setBoards] = useState()
  const URL = "http://localhost:8088"

  const getBoards = () => {
    return fetch()
    .then(res => res.json())
    .then(setBoards)




  }






}