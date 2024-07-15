import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './try-on-phone.css'

const TryOnPhone = (props) => {
  return (
    <div className="try-on-phone-container">
      <Helmet>
        <title>try-on-phone - MYNTRA</title>
        <meta property="og:title" content="try-on-phone - MYNTRA" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name4"></Navbar>
      <div className="try-on-phone-container1">
        <button type="button" className="try-on-phone-button button">
          <svg
            viewBox="0 0 1097.142857142857 1024"
            className="try-on-phone-icon"
          >
            <path d="M548.571 384c90.857 0 164.571 73.714 164.571 164.571s-73.714 164.571-164.571 164.571-164.571-73.714-164.571-164.571 73.714-164.571 164.571-164.571zM950.857 146.286c80.571 0 146.286 65.714 146.286 146.286v512c0 80.571-65.714 146.286-146.286 146.286h-804.571c-80.571 0-146.286-65.714-146.286-146.286v-512c0-80.571 65.714-146.286 146.286-146.286h128l29.143-77.714c14.286-37.714 58.857-68.571 98.857-68.571h292.571c40 0 84.571 30.857 98.857 68.571l29.143 77.714h128zM548.571 804.571c141.143 0 256-114.857 256-256s-114.857-256-256-256-256 114.857-256 256 114.857 256 256 256z"></path>
          </svg>
        </button>
        <button type="button" className="try-on-phone-button1 button">
          <svg viewBox="0 0 1024 1024" className="try-on-phone-icon2">
            <path d="M598 554h128l-214-212-214 212h128v172h172v-172zM826 428q82 6 140 67t58 145q0 88-63 151t-151 63h-554q-106 0-181-75t-75-181q0-94 67-169t161-85q42-78 118-126t166-48q108 0 201 76t113 182z"></path>
          </svg>
        </button>
      </div>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="try-on-phone-image"
      />
    </div>
  )
}

export default TryOnPhone
