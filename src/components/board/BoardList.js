/* This will map through all of a user's boards, imported from Board.js */

import React, { useContext, useEffect, useState } from "react"
import { Board } from "./Board"
import { BoardContext } from "./BoardProvider"
import "./board.css"

export const BoardList = () => {

  const { boards, getBoards } = useContext(BoardContext)

  useEffect(() => {
    getBoards()
  }, [])

  return (
    <>
      <h2 className="boardlist__title">Welcome back!</h2>
      <section className="boardlist">
        {
          boards.filter(board => board.userId == 1).map(board => {
              return (
                <Board 
                key={board.id}
                board={board}
                />
              )
            }
          )
        }

      </section>
    </>
  )
}