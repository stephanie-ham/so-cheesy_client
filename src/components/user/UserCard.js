import React from "react"
import { Card } from "../card/Card"

export const UserCard = (props) => {
  return (
    <>
      <section className="user" key={props.user.id}>
        <Card
          key={props.user.id}
          card={props.user}
        />
      </section>
    </>
  )
}