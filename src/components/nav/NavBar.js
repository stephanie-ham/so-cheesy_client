import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import "../SoCheesy.css"

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar__item">
        logo
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link link" to="/cheeses">cheeses</Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link link" to="/meats">meats</Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link link" to="/fruits">fruits</Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link link" to="/nuts">nuts</Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link link" to="/jams<">jams</Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link link" to="/">home</Link>
      </li>
    </ul>
  )
}