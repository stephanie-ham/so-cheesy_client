/* This will export clickable boards to BoardList. When clicked, they will go to applicable BoardDetail */

import React, { useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"
import DislikeOn from "../../images/dislike-on.png"
import DislikeOff from "../../images/dislike-off.png"
import LikeOn from "../../images/like-on.png"
import LikeOff from "../../images/like-off.png"
import { BoardContext } from "./BoardProvider"

export const Board = (props) => {
  const { addBoardLike, removeBoardLike, addBoardDislike, removeBoardDislike } = useContext(BoardContext)
  const currentUser = parseInt(sessionStorage.getItem("block-cheese-app_user"));
  const history = useHistory();

  const handleLikeButton = () => {
    if (!props.isLiked) {
      addBoardLike({
        userId: currentUser,
        boardId: parseInt(props.board.id)
      })
        .then(() => { history.push("/") })
    } else {
      removeBoardLike(props.boardLikeId)
        .then(() => { history.push("/") })
    }
  }

  const handleDislikeButton = () => {
    if (!props.isDisliked) {
      addBoardDislike({
        userId: currentUser,
        boardId: parseInt(props.board.id)
      })
        .then(() => { history.push("/") })
    } else {
      removeBoardDislike(props.boardDislikeId)
        .then(() => { history.push("/") })
    }
  }

  return (
    <>
      <section className="board">
        <Link to={`/board/detail/${props.board.id}`} key={props.board.id}>
          <div className="board__container">
            <h5 className="board__title">{props.board.title}</h5>
          </div>
        </Link>
        <div className="board__buttons">
          <div className="onClick__button--wrapper" onClick={handleLikeButton}>
            <img className="board__button" src={props.isLiked ? LikeOn : LikeOff} alt="" />
          </div>
          <div className="onClick__button--wrapper" onClick={handleDislikeButton}>
            <img className="board__button" src={props.isDisliked ? DislikeOn : DislikeOff} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

{/* <div className="board__button" disabled={!board.disliked} onClick={() => setBoard({ disliked: true })}> */ }
{/* <IconButton>
              {board.disliked ? <CancelRounded /> : <HighlightOffRounded />}
            </IconButton> */}


{/* <div  onClick={() => setBoard({ liked: true })} > 
              <IconButton>
                {board.liked ? <FavoriteRounded /> : <FavoriteBorderRounded />}
              </IconButton> 
            </div> */
}
