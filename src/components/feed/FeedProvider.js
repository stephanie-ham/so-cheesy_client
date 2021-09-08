import React, { useState } from "react"

export const BoardContext = createBoard()

export const BoardProvider = (props) => {
  const [boards, setBoards] = useState()
  const URL = "http://localhost:8088"

  const getBoards = () => {
    return fetch(`${URL}/boards?_expand=user&_sort=user.id`)
    .then(res => res.json())
    .then(setBoards)
  }

  const getBoardIngredients = (`${URL}/boardIngredients?_expand=board?_expand=ingredient&_sort=board.id&_sort=ingredient.id`)
  .then(res => res.json())
  .then(setBoardIngredients)





}