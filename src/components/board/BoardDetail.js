/* This will render the recipe for the clicked board.*/

import React, { useContext, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { BoardContext } from "./BoardProvider";
import { IngredientContext } from "../ingredient/IngredientProvider";
import { IngredientCard } from "../ingredient/IngredientCard";

export const BoardDetail = () => {
  const { boardIngredients, getBoardIngredients, boards, getBoards } = useContext(BoardContext)
  const { ingredients, getIngredients } = useContext(IngredientContext)
  const { boardId } = useParams()
  const history = useHistory()
  const currentUser = parseInt(sessionStorage.getItem("block-cheese-app_user"))

  useEffect(() => (
    getBoards()
      .then(getBoardIngredients())
      .then(getIngredients())
  ), [])

  const findBoardName = () => {
    let boardName

    boards.map(board => {
      if (board.id === parseInt(boardId)) {
        boardName = board.title
      }
    })
    return boardName
  }

  const findBoardUser = () => {
    let boardUserId
    boards.map(board => {
      if (board.id === parseInt(boardId)) {
        boardUserId = board.user.id
      }
    })
    return boardUserId
  }

  const isCurrentUser = () => {
   return boards.find((board) => (
     board.user.id === currentUser
   ))
  }

  const isBoardIngredient = (ingredient) => {
    return boardIngredients.find((boardIngredient) => (
      boardIngredient.ingredientId === ingredient.id &&
      boardIngredient.boardId === parseInt(boardId)
    ))
  }

  const findBoardIngredientId = (ingredient) => {
    let boardIngredientId
    boardIngredients.map((boardIngredient) => {
      if (parseInt(boardId) === boardIngredient.boardId && ingredient.id === boardIngredient.ingredientId) {
        boardIngredientId = boardIngredient.id
      }
    })
    return boardIngredientId
  }

  const userFeedButton = () => {
    return (
      <button className="mediumButton returnhome__button" onClick={event => {
        event.preventDefault()
        history.push(`/boards/${findBoardUser()}`)
      }}>
        Back to Feed
      </button>
    )
  }

  const currentUserFeedButton = () => {
    return (
      <button className="mediumButton returnhome__button" onClick={event => {
        event.preventDefault()
        history.push(`/`)
      }}>
        Back to Feed
      </button>
    )
  }

  return (
    <>
      <section className="board__ingredients padding-bottom">
        <h2 className="page__title">{findBoardName()}</h2>
        <h5 className="page__subtitle">Ingredients</h5>
        <section className="ingredient__list ">
          {
            ingredients.map(ingredient => {
              if (isBoardIngredient(ingredient)) {
                return (
                  <IngredientCard
                    key={ingredient.id}
                    ingredient={ingredient}
                    isBoardIngredient={isBoardIngredient(ingredient)}
                    boardIngredientId={findBoardIngredientId(ingredient)}
                  />
                )
              }
            })
          }
        </section>
        <section className="board--button__container">
          { isCurrentUser() ? currentUserFeedButton() : userFeedButton() }
        </section>
      </section>
    </>
  )
}

