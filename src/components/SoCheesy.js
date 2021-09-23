import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Footer } from "./footer/Footer"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Header } from "./header/Header"
import HeaderHome from "../images/header-home.jpg"
import "./SoCheesy.css"

export const SoCheesy = () => {
  return (
    <>
      <Route
        render={() => {
          if (sessionStorage.getItem("block-cheese-app_user")) {
            return (
              <>
                <section className="main__components">
                  <NavBar className="main__component" />
                  <ApplicationViews className="main__component" />
                  <Footer className="main__component" />
                </section>
              </>
            )
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      
      <Route path="/login">
        <Header imageSource={HeaderHome} className="main__component"/>
        <Login className="main__component" />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  )
}