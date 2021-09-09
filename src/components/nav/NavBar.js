import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar__item">
        logo
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/ingredients/cheeses" type="cheeses">cheeses</Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/ingredients/meats" type="meats">meats</Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/ingredients/fruits" type="fruits">fruits</Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/ingredients/nuts" type="nuts">nuts</Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/ingredients/jams" type="jams">jams + spreads</Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/create">create</Link></li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/">home</Link>
      </li>
    </ul>
  )
}