import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import BlogPostHeader10 from '../components/blog-post-header10'
import Footer from '../components/footer'
import './product-page.css'

const ProductPage = (props) => {
  return (
    <div className="product-page-container">
      <Helmet>
        <title>Product-Page - MYNTRA</title>
        <meta property="og:title" content="Product-Page - MYNTRA" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <BlogPostHeader10 rootClassName="blog-post-header10-root-class-name"></BlogPostHeader10>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default ProductPage
