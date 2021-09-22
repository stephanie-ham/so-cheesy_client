import React from "react"
import HeaderLogo from "../../images/block-logo_full_500px.png"
import "./header.css"

export const Header = (props) => {
  return (
    <div className="header__container">
      <img className="header__image" src={props.imageSource} alt="" />
      <img className="header__logo" src={HeaderLogo} alt="" />
    </div>
  )
}