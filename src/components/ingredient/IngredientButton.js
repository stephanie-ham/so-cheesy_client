import React, { useContext } from "react"
import DislikeOn from "../../images/dislike-on.png"
import DislikeOff from "../../images/dislike-off.png"
import LikeOn from "../../images/like-on.png"
import LikeOff from "../../images/like-off.png"
import { IngredientContext } from "./IngredientProvider"

export const IngredientButton = (props) => {
  const { addIngredientLike, removeIngredientLike, addIngredientDislike, removeIngredientDislike } = useContext(IngredientContext)
  const currentUser = parseInt(sessionStorage.getItem("block-cheese-app_user"));

  const handleLikeButton = () => {
    if (!props.isLiked) {
      addIngredientLike({
        userId: currentUser,
        ingredientId: parseInt(props.ingredient.id)
      })
    } else {
      removeIngredientLike(props.ingredientLikeId)
    }
  }

  const handleDislikeButton = () => {
    if (!props.isDisliked) {
      addIngredientDislike({
        userId: currentUser,
        ingredientId: parseInt(props.ingredient.id)
      })
    } else {
      removeIngredientDislike(props.ingredientDislikeId)
    }
  }

  return (
    <>
      <div className="card__buttons">
        <div className="onClick__cardbutton--wrapper" disabled={props.isForm} onClick={handleLikeButton}>
          <img className="card__button" src={props.isLiked ? LikeOn : LikeOff} alt="" />
        </div>
        <div className="onClick__cardbutton--wrapper" disabled={props.isForm} onClick={handleDislikeButton}>
          <img className="card__button" src={props.isDisliked ? DislikeOn : DislikeOff} alt="" />
        </div>
      </div>
    </>
  )
}


