import React from "react"
import "./header.css"

export const Header = (props) => {
  return (
    <div className="header__container">
      <img className="header__image" src={props.imageSource}alt="" />
    </div>
  )
}