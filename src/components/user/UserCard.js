import React from "react"
import { Link, useHistory } from 'react-router-dom'
import "../card/card.css"
import User from "../../images/icon_cheese_orange.jpg"
import { UserButton } from "./UserButton"

export const UserCard = (props) => {
  const history = useHistory()
  return (
    <>
        <div className="card__container user__container" onClick={() => {
          history.push(`/boards/${props.user.id}`)
        }}>
          <div className="card__image">
            <img src={User} alt="" key={`userImage--${props.user.id}`} />
          </div>
          <div className="card__info">
            <h5 className="card__name" key={`userName--${props.user.id}`} >
              {props.user.name}
            </h5>
          </div>
        </div>
      <div className="user--button__container">
        <UserButton
          key={`UserButton--${props.user.id}`}
          user={props.user}
          isFriend={props.isFriend} />
      </div>
    </>
  )
}