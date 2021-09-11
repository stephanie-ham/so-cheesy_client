/* This will export clickable boards to BoardList. When clicked, they will go to applicable BoardDetail */

import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { IconButton } from "@material-ui/core"
import { FavoriteBorderRounded, FavoriteRounded } from "@material-ui/icons"
// import { HighlightOffRounded, CancelRounded } from "@material-ui/icons"
// import LikeOff from '../../images/like-off.png'
// import LikeOn from '../../images/like-on.png'
// import DislikeOff from '../../images/dislike-off.svg'
// import DislikeOn from '../../images/dislike-on.svg'

export const Board = (props) => {

  const [board, setBoard] = useState({liked: false});

  /* need currentUser + useEffect to store favorites in application state */

  return (
    <>
      <section className="board">
        <Link to={`/board/detail/${props.board.id}`} key={props.board.id}>
          <div className="board__container">
            <h5 className="board__title">{props.board.title}</h5>
          </div>
        </Link>
        <div className="board__buttons">


          <div className="card__button" onClick={() => setBoard({liked: true})} >
            <IconButton>
              {board.liked ? <FavoriteRounded /> : <FavoriteBorderRounded />}
            </IconButton>
          </div>

        </div>
      </section>
    </>
  )

}



          {/* <div className="card__button" disabled={!board.disliked} onClick={() => setBoard({disliked: true})}>
            <IconButton>
              {board.disliked ? <CancelRounded /> : <HighlightOffRounded />}
            </IconButton>
          </div> */}