/* This will render the recipe for the clicked board.*/

import React, { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { BoardContext } from "./BoardProvider";
import { IngredientContext } from "../ingredient/IngredientProvider";
import { IngredientCard } from "../ingredient/IngredientCard";
import { BoardList } from "./BoardList";
import "../ingredient/ingredient.css"


export const BoardDetail = () => {

  const { boardIngredients, getBoardIngredients, boards, getBoards } = useContext(BoardContext)
  const [board, setBoard] = useState([])
  const { boardId } = useParams()
  const { ingredients, getIngredients } = useContext(IngredientContext)


  useEffect(() => {
    getBoards()
      .then(getBoardIngredients())
      .then(getIngredients())
  }, [])

  useEffect(() => {
    const thisBoard = boards.find(b => b.id === parseInt(boardId)) || { board: {} }
    setBoard(thisBoard)
  }, [boardId])

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
        <h2 className="ingredient__title">{board.title}</h2>
        <h5 className="ingredient__subtitle">Ingredients</h5>
        <section className="ingredient__list">
          {
            ingredients.map(ingredient => {
              if (isBoardIngredient(ingredient)) {
                return <IngredientCard
                  key={ingredient.id}
                  ingredient={ingredient}
                  boardIngredientId={findBoardIngredientId(ingredient)}
                />
              }
            })
          }
        </section>
        <section className="button__container">
          <Link to={`/`}>
            <button className="button">
              Back to Feed
            </button>
          </Link>
        </section>
      </section>
    </>
  )
}
