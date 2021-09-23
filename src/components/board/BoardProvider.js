import React, { useState, createContext } from "react"

export const BoardContext = createContext()

export const BoardProvider = (props) => {
  const [boards, setBoards] = useState([])
  const [boardIngredients, setBoardIngredients] = useState([])
  const [boardLikes, setBoardLikes] = useState([])
  const [boardDislikes, setBoardDislikes] = useState([])
  const URL = "http://localhost:8088"

  const getBoards = () => {
    return fetch(`${URL}/boards?_expand=user`)
      .then(res => res.json())
      .then(setBoards)
  }

  const getBoardsByUserId = (userId) => {
    return fetch(`${URL}/boards/${userId}`)
    .then(res => res.json())
  }

  const addFullBoard = (boardObj, ingredients) => {
    return fetch(`${URL}/boards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(boardObj)
    })
      .then(res => res.json())
      .then(board => {
        
        let ingredientPromises = []
        
        ingredients.forEach(ingredient => {
          ingredient.boardId = board.id
          ingredientPromises.push(addBoardIngredient(ingredient))
        })
        Promise.all(ingredientPromises).then(getBoards())
      })
      }

  const getBoardIngredients = () => {
      return fetch(`${URL}/boardIngredients?_expand=board&_expand=ingredient&_sort=ingredient.id`)
        .then(res => res.json())
        .then(setBoardIngredients)
    }

    const addBoardIngredient = boardIngredientObj => {
      return fetch(`${URL}/boardIngredients`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(boardIngredientObj)
      })
        .then(getBoardIngredients)
    }

    const getBoardLikes = () => {
      return fetch(`${URL}/boardLikes`)
        .then(res => res.json())
        .then(setBoardLikes)
    }

    const addBoardLike = boardLikeObj => {
      return fetch(`${URL}/boardLikes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(boardLikeObj)
      })
        .then(getBoardLikes)
    }

    const removeBoardLike = boardLikeId => {
      return fetch(`${URL}/boardLikes/${boardLikeId}`, {
        method: "DELETE"
      })
        .then(getBoardLikes)
    }

    const getBoardDislikes = () => {
      return fetch(`${URL}/boardDislikes`)
        .then(res => res.json())
        .then(setBoardDislikes)
    }

    const addBoardDislike = boardDislikeObj => {
      return fetch(`${URL}/boardDislikes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(boardDislikeObj)
      })
        .then(getBoardDislikes)
    }

    const removeBoardDislike = boardDislikeId => {
      return fetch(`${URL}/boardDislikes/${boardDislikeId}`, {
        method: "DELETE"
      })
        .then(getBoardDislikes)
    }
    

    return (
      <BoardContext.Provider value={{
        boards, getBoards, boardIngredients, getBoardIngredients, addBoardIngredient, boardLikes, getBoardLikes, addBoardLike, removeBoardLike, boardDislikes, getBoardDislikes, addBoardDislike, removeBoardDislike, addFullBoard, getBoardsByUserId
      }}>
        {props.children}
      </BoardContext.Provider>
    )

  }