import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './try-on.css'

const TryOn = (props) => {
  return (
    <div className="try-on-container">
      <Helmet>
        <title>Try-on - MYNTRA</title>
        <meta property="og:title" content="Try-on - MYNTRA" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name3"></Navbar>
      <div className="try-on-container1">
        <button type="button" className="try-on-button button">
          <svg viewBox="0 0 1024 1024" className="try-on-icon">
            <path d="M512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM384 86h256l78 84h136q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h136zM376 512q0-56 40-96t96-40 96 40 40 96-40 96-96 40-96-40-40-96z"></path>
          </svg>
        </button>
        <button type="button" className="try-on-button1 button">
          <svg viewBox="0 0 1024 1024" className="try-on-icon2">
            <path d="M598 554h128l-214-212-214 212h128v172h172v-172zM826 428q82 6 140 67t58 145q0 88-63 151t-151 63h-554q-106 0-181-75t-75-181q0-94 67-169t161-85q42-78 118-126t166-48q108 0 201 76t113 182z"></path>
          </svg>
        </button>
      </div>
      <img
        alt="image"
        src="https://thumbs.dreamstime.com/b/portrait-young-beautiful-woman-leaning-forward-hand-knee-studio-shot-young-beautiful-woman-wearing-casual-clothing-161743387.jpg"
        className="try-on-image"
      />
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default TryOn
