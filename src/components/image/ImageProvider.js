import React, { useState, createContext } from "react"

export const ImageContext = createContext()

export const ImageProvider = (props) => {

  const URL = "http://localhost:8088"

  const [images, setImages] = useState([])

  const getImages = () => {
    return fetch(`${URL}/images`)
      .then(res => res.json())
      .then(setImages)
  }

  const addImage = imageObj => {
    return fetch(`${URL}/images`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(imageObj)
    })
      .then(getImages)
  }

  return (
    <ImageContext.Provider value={{
      images, getImages, addImage
    }}>
      {props.children}
    </ ImageContext.Provider>
  )
}