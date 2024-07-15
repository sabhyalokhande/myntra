import React from 'react'

import PropTypes from 'prop-types'

import './banner11.css'

const Banner11 = (props) => {
  return (
    <div className="banner11-container thq-section-padding">
      <div className="banner11-max-width thq-section-max-width">
        <div className="banner11-container1">
          <h2 className="banner11-title thq-heading-2">{props.heading1}</h2>
          <h3 className="banner11-text thq-heading-3">{props.content1}</h3>
        </div>
        <button type="button" className="thq-button-filled">
          {props.action1}
        </button>
      </div>
    </div>
  )
}

Banner11.defaultProps = {
  action1: 'Sign Up Now',
  content1:
    'Sign up using your email, Facebook, or Google account to get started.',
  heading1: 'Create Your Account Today!',
}

Banner11.propTypes = {
  action1: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
}

export default Banner11
