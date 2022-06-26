import './Main.css'
import image from '../../images/hero.jpg'
import React from 'react'

function Main(){
  return(
    <section className="main">
      <h2 className="main__title">Welcome to the Warehouse Manager.</h2>
      <p className="main__subtitle">Click on the Product Viewer or Invetory Manager to get started.</p>
      <img src={image} alt="Warehouse" className="main__image" />
    </section>
  )
}

export default Main