import './Home.scss'
import LogoTitle from '../../assets/images/logo-s.png'

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span>H</span>
          <span>i,</span>
          <br />
          <span>I</span>
          <span>'m</span>
          <img
            src={LogoTitle}
            alt="JavaScript Developer Name, Web Developer Name"
          />
          erkan
        </h1>
        <h2>Front End Developer </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
