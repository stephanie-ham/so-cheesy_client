/* This will map through all of a user's boards, imported from Board.js */

import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Board } from "./Board"
import { BoardContext } from "./BoardProvider"
import { UserContext } from "../user/UserProvider"
import "./board.css"
import { UserList } from "../user/UserList"

export const BoardList = () => {
  const { boards, getBoards, getBoardsByUserId, boardLikes, getBoardLikes, boardDislikes, getBoardDislikes } = useContext(BoardContext)
  const { users, getUsers } = useContext(UserContext)
  const { userId } = useParams();
  const currentUser = parseInt(sessionStorage.getItem("block-cheese-app_user"))

  useEffect(() => {
    if (userId) {
      getBoardsByUserId(userId)
    }
    getBoards().then(getBoardLikes())
      .then(getBoardDislikes())
      .then(getUsers())

  }, [])

  // const foundUserName = () => {
  //   const foundBoard = boards.filter(board => board.userId === parseInt(foundUserId()))
  //   return foundBoard.user.name
  // } //put in useeffect hook, call .then

  const foundUserName = () => {

  }

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
        board.id === boardLike.boardId) {
        boardLikeId = boardLike.id
      }
    })
    return boardLikeId
  }

  const findBoardDislikeId = (board) => {
    let boardDislikeId

    boardDislikes.map((boardDislike) => {
      if (currentUser === boardDislike.userId &&
        board.id === boardDislike.boardId) {
        boardDislikeId = boardDislike.id
      }
    })
    return boardDislikeId
  }

  const foundUserId = () => {
    let foundUserId
    if (userId) {
      foundUserId = parseInt(userId)
    } else {
      foundUserId = currentUser
    }
    return foundUserId
  }

  const findUserName = () => {
    let foundUserName

    users.filter(user => parseInt(userId) === user.id).map(user => {
      foundUserName = user.name
    })

    return foundUserName
  }

  // const findUserName = () => {
  //   let foundUserName 
  //   if (userId) {
  //       users.filter(user => parseInt(userId) === user.id).map(user => {
  //         foundUserName = user.name
  //       })

  //   } else {
  //     users.filter(user => currentUser === user.id).map(user => {
  //       foundUserName = user.name
  //     })
  //   }
  //   return foundUserName
  // }

  return (
    <>
      <h2 className="page__title">{userId ? <>{`${findUserName()}'s Boards`}</> : <>{"Your Boards"}</>}</h2>
      <section className="boardlist padding-bottom">
        {
          boards.filter(board => board.userId === parseInt(foundUserId())).map(board => {
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
          })
        }
      </section>
    </>
  )
}


