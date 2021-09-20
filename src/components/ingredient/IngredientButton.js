import React, { useContext } from "react"
import DislikeOn from "../../images/dislike-on.png"
import DislikeOff from "../../images/dislike-off.png"
import LikeOn from "../../images/like-on.png"
import LikeOff from "../../images/like-off.png"
import { IngredientContext } from "./IngredientProvider"
import { useHistory } from "react-router-dom"

export const IngredientButton = (props) => {
  const { addIngredientLike, removeIngredientLike } = useContext(IngredientContext)
  const currentUser = parseInt(sessionStorage.getItem("block-cheese-app_user"));
  const history = useHistory();

  const handleLikeButton = () => {

    if (!props.isLiked) {
      addIngredientLike({
        userId: currentUser,
        ingredientId: parseInt(props.ingredient.id)
      })
    } else {
      removeIngredientLike(props.ingredientLikeId)
    }
    // if (!props.isLiked) {
    //   addBoardLike({
    //     userId: currentUser,
    //     boardId: parseInt(props.board.id)
    //   })
    //     .then(() => { history.push("/") })
    // } else {
    //   removeBoardLike(props.boardLikeId)
    //     .then(() => { history.push("/") })
    // }
  }

  const handleDislikeButton = () => {
    // if (!props.isDisliked) {
    //   addBoardDislike({
    //     userId: currentUser,
    //     boardId: parseInt(props.board.id)
    //   })
    //     .then(() => { history.push("/") })
    // } else {
    //   removeBoardDislike(props.boardDislikeId)
    //     .then(() => { history.push("/") })
    // }
  }

  return (
    <>
      <div className="card__buttons">
        <div className="onClick__cardbutton--wrapper" onClick={handleLikeButton} disabled={props.isForm}>
          <img className="card__button" src={props.isLiked ? LikeOn : LikeOff} alt="" />
        </div>
        <div className="onClick__cardbutton--wrapper" onClick={handleDislikeButton} disabled={props.isForm}>
          <img className="card__button" src={props.isDisliked ? DislikeOn : DislikeOff} alt="" />
        </div>
      </div>
    </>
  )
}


