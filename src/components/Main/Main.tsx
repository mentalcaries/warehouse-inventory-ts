import './Main.css'
import image from '../../images/hero.jpg'
import React from 'react'

function Main(){
  return(
    <section className="main">
      <h2 className="main__title">Welcome to the IMS.</h2>
      <p className="main__subtitle">Not sure where to start? Well, there are only two options above.</p>
      <img src={image} alt="Warehouse" className="main__image" />
    </section>
  )
}

export default Main