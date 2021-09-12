/* This will map through all of a user's boards, imported from Board.js */

import React, { useContext, useEffect, useState } from "react"
import { Board } from "./Board"
import { BoardContext } from "./BoardProvider"
import "./board.css"

export const BoardList = () => {

  const { boards, getBoards, boardLikes, getBoardLikes, boardDislikes, getBoardDislikes } = useContext(BoardContext)
  const currentUser = parseInt(sessionStorage.getItem("block-cheese-app_user"))


  useEffect(() => {
    getBoards().then(getBoardLikes())
    .then(getBoardDislikes())
  }, [])

  const isBoardLiked = (board) => {
    return boardLikes.find((boardLike) => (
      currentUser === boardLike.userId && 
      board.id === boardLike.boardId
    ))
  }

  const isBoardDisliked = (board) => {
    return boardDislikes.find((boardDislike) => (
      currentUser === boardDislike.userId && 
      board.id === boardDislike.boardId
    ))
  }

  const findBoardLikeId = (board) => {
    let boardLikeId 

    boardLikes.map((boardLike) => {
      if (currentUser === boardLike.userId &&
        board.id === boardLike.userId) {
          boardLikeId = boardLike.id
        }
    })
    return boardLikeId
  }

  const findBoardDislikeId = (board) => {
    
    let boardDislikeId 

    boardDislikes.map((boardDislike) => {
      if (currentUser === boardDislike.userId &&
        board.id === boardDislike.userId) {
          boardDislikeId = boardDislike.id
        }
    })
    return boardDislikeId
  }

  return (
    <>
      <h2 className="boardlist__title">Welcome back!</h2>
      <section className="boardlist">
        {
          boards.filter(board => board.userId === currentUser).map(board => {
              return (
                <Board 
                key={board.id}
                board={board}
                boardLikeId={findBoardLikeId(board)}
                boardDislikeId={findBoardDislikeId(board)}
                isLiked={isBoardLiked(board)}
                isDisliked={isBoardDisliked(board)}
                />
              )
            }
          )
        }

      </section>
    </>
  )
}


