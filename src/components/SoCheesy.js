import React from "react"
import { Route } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import "./SoCheesy.css"

export const SoCheesy = () => {
  return (
    <>
      <Route
        render={() => {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          )
        }}
      />
    </>
  )
}