/* This will render the recipe for the clicked board.*/

import React, { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { BoardContext } from "./BoardProvider";
import { IngredientContext } from "../ingredient/IngredientProvider";
import { IngredientCard } from "../ingredient/IngredientCard";

export const BoardDetail = () => {
  const { boardIngredients, getBoardIngredients, boards, getBoards } = useContext(BoardContext)
  const { ingredients, getIngredients } = useContext(IngredientContext)
  const { boardId } = useParams()

  useEffect(() => (
    getBoards()
      .then(getBoardIngredients())
      .then(getIngredients())
  ), [])

  // useEffect(() => {
  //   const thisBoard = boards.find(b => b.id === parseInt(boardId)) || { board: {} }
  //   setBoard(thisBoard)
  // }, [boardId])

  const findBoardName = () => {
    let boardName 

    boards.map(board => {
      if (board.id === parseInt(boardId) ) {
        boardName = board.title
      }
    })
    return boardName
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

  return (
    <>
      <section className="board__ingredients">
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
          <Link to={`/`}>
            <button className="mediumButton returnhome__button">
              Back to Feed
            </button>
          </Link>
        </section>
      </section>
    </>
  )
}

