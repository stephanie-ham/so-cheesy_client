import React, { useState, createContext } from "react"

export const FriendContext = createContext()

export const FriendProvider = (props) => {
  const URL = "http://localhost:8088"

  const [friends, setFriends] = useState([])

  const getFriends = () => { // LOL
    return fetch(`${URL}/friends?_expand=user&_sort=user.id`)
    .then(res => res.json())
    .then(setFriends)
  }

  const addFriend = friendObj => {
    return fetch(`${URL}/friends`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(friendObj)
    })
    .then(getFriends) 
  }

  const getFriendsByCurrentUserId = () => {
    return fetch(`${URL}/friends`)
    .then(response => response.json())
  }

  const removeFriend = (friendId) => {
    return fetch(`${URL}/friends/${friendId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(getFriends)
  }
 
  return (
    <FriendContext.Provider value={{
      friends, addFriend, getFriends, getFriendsByCurrentUserId, removeFriend
    }}>
      {props.children}
    </FriendContext.Provider>
  )
}