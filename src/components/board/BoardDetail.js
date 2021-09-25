/* This will render the recipe for the clicked board.*/

import React, { useContext, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { BoardContext } from "./BoardProvider";
import { IngredientContext } from "../ingredient/IngredientProvider";
import { IngredientCard } from "../ingredient/IngredientCard";

export const BoardDetail = () => {
  const { boardIngredients, getBoardIngredients, boards, getBoards } = useContext(BoardContext)
  const { ingredients, getIngredients, ingredientLikes, getIngredientLikes, ingredientDislikes, getIngredientDislikes  } = useContext(IngredientContext)
  const { boardId } = useParams()
  const history = useHistory()
  const currentUser = parseInt(sessionStorage.getItem("block-cheese-app_user"))

  useEffect(() => (
    getBoards()
      .then(getBoardIngredients())
      .then(getIngredients()).then(getIngredientLikes())
      .then(getIngredientDislikes())
  ), [])

  const isIngredientLiked = (ingredient) => {
    return ingredientLikes.find((ingredientLike) => (
      currentUser === ingredientLike.userId &&
      ingredient.id === ingredientLike.ingredientId
    ))
  }

  const findIngredientLikeId = (ingredient) => {
    let ingredientLikeId
    ingredientLikes.map((ingredientLike) => {
      if (currentUser === ingredientLike.userId &&
        ingredient.id === ingredientLike.ingredientId) {
          ingredientLikeId = ingredientLike.id
        }
    })
    return ingredientLikeId
  }

  const isIngredientDisliked = (ingredient) => {
    return ingredientDislikes.find((ingredientDislike) => (
      currentUser === ingredientDislike.userId &&
      ingredient.id === ingredientDislike.ingredientId
    ))
  }

  const findIngredientDislikeId = (ingredient) => {
    let ingredientDislikeId
    ingredientDislikes.map((ingredientDislike) => {
      if (currentUser === ingredientDislike.userId &&
        ingredient.id === ingredientDislike.ingredientId) {
          ingredientDislikeId = ingredientDislike.id
        }
    })
    return ingredientDislikeId
  }

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
                    ingredientLikeId={findIngredientLikeId(ingredient)}
                    isLiked={isIngredientLiked(ingredient)}
                    ingredientDislikeId={findIngredientDislikeId(ingredient)}
                    isDisliked={isIngredientDisliked(ingredient)}
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

