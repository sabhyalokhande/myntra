import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Timeline5 from '../components/timeline5'
import './fitplanner.css'

const Fitplanner = (props) => {
  return (
    <div className="fitplanner-container">
      <Helmet>
        <title>fitplanner - MYNTRA</title>
        <meta property="og:title" content="fitplanner - MYNTRA" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <Timeline5
        title1="FIT-PLANNER"
        content1=" Your Weekly Outfit Guide 👗📅                                                      FitPlanner is a smart feature that helps you plan your outfits for the week, saving time and reducing stress. 🕒💆‍♀️ Mix and match items from your wardrobe, receive personalized outfit suggestions based on your style and weather, and stay organized with calendar integration. 📅✨ FitPlanner ensures you always look your best, making it the ultimate tool for efficient and stylish wardrobe planning. 👠👕"
        rootClassName="timeline5-root-class-name"
      ></Timeline5>
    </div>
  )
}

export default Fitplanner
