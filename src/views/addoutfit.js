import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import ContactForm31 from '../components/contact-form31'
import Footer from '../components/footer'
import './addoutfit.css'

const Addoutfit = (props) => {
  return (
    <div className="addoutfit-container">
      <Helmet>
        <title>Addoutfit - MYNTRA</title>
        <meta property="og:title" content="Addoutfit - MYNTRA" />
      </Helmet>
      <Navbar></Navbar>
      <ContactForm31 rootClassName="contact-form31-root-class-name"></ContactForm31>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default Addoutfit
