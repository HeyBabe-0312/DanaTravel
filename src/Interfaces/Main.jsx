import React from 'react'
import Home from '../Components/Home/Home'
import Main from '../Components/Main/Main'
import Contact from '../Components/Contact/Contact'

const MainPage = ({allDataLct,topic}) => {
  return (
    <>
    <Home />
    <Main allDataLct={allDataLct} topic={topic}/>
    <Contact />
    </>
  )
}

export default MainPage