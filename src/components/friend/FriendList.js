import React, { useContext, useEffect } from "react"
import { UserCard } from "../user/UserCard"
import { Card } from "../card/Card"
import { UserContext } from "../user/UserProvider"
import { FriendContext } from "./FriendProvider"
import "../../styles/list.css"



export const FriendList = (props) => {
  const { friends, getFriends } = useContext(FriendContext)
  const { getUsers } = useContext(UserContext)

  const currentUser = parseInt(sessionStorage.getItem("block-cheese-app_user"));

  useEffect(() => {
    getFriends().then(getUsers())
  }, [])

  return (
    <>
      <h2 className="page__title"> FRIENDS </h2>
      <section className="friend__list fl--padding padding-bottom">
        {
          friends.map(friend => {
            if (currentUser === friend.currentUserId) {
              return (
                <section className="friend">
                  <UserCard
                    key={`friend--${friend.id}`}
                    card={friend.user}
                    user={friend.user}
                    friendId={friend.id}
                    isFriend={friend.user}
                  />
                </section>
              )
            }
          })
        }
      </section>
    </>
  )
}