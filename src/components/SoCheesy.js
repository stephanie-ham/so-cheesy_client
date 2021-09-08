import React from "react"
import { Route } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Footer } from "./footer/Footer"
import "./SoCheesy.css"

export const SoCheesy = () => {
  return (
    <>
      <Route
        render={() => {
          return (
            <>
              <section className="main__components">
                <NavBar className="main__component" />
                <ApplicationViews className="main__component" />
                <Footer className="main__component" />
              </section>

            </>
          )
        }}
      />
    </>
  )
}