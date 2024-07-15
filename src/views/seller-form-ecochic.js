import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import ContactForm3 from '../components/contact-form3'
import Footer from '../components/footer'
import './seller-form-ecochic.css'

const SellerFormEcochic = (props) => {
  return (
    <div className="seller-form-ecochic-container">
      <Helmet>
        <title>Seller-Form-Ecochic - MYNTRA</title>
        <meta property="og:title" content="Seller-Form-Ecochic - MYNTRA" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <ContactForm3 rootClassName="contact-form3-root-class-name"></ContactForm3>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default SellerFormEcochic
