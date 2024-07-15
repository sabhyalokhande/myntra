import React from 'react'

import PropTypes from 'prop-types'

import './banner12.css'

const Banner12 = (props) => {
  return (
    <div className="banner12-container thq-section-padding">
      <div className="banner12-max-width thq-section-max-width">
        <div className="banner12-container1">
          <h2 className="banner12-title thq-heading-2">{props.heading1}</h2>
          <h3 className="banner12-text thq-heading-3">{props.content1}</h3>
        </div>
        <button type="button" className="thq-button-filled">
          {props.action1}
        </button>
      </div>
    </div>
  )
}

Banner12.defaultProps = {
  action1: 'Shop Now',
  heading1: 'Discover Your Style',
  content1:
    "Explore the latest trends and find your unique fashion sense with Myntra's innovative tools.",
}

Banner12.propTypes = {
  action1: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
}

export default Banner12
