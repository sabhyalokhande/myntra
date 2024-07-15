import React from 'react'

import PropTypes from 'prop-types'

import './stats9.css'

const Stats9 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="stats9-max-width thq-section-max-width">
        <div className="stats9-container1">
          <h2 className="stats9-title thq-heading-2">{props.heading1}</h2>
          <span className="stats9-content thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="stats9-container2 thq-grid-2">
          <div className="stats9-container3 thq-card thq-box-shadow">
            <h2 className="thq-heading-2">{props.stat1}</h2>
            <span className="thq-body-small">
              {props.stat1ShortDescription}
            </span>
            <p className="stats9-text02 thq-body-large">
              {props.stat1Description}
            </p>
          </div>
          <div className="stats9-container4 thq-card thq-box-shadow">
            <h2 className="thq-heading-2">{props.stat2}</h2>
            <span className="thq-body-small">
              {props.stat2ShortDescription}
            </span>
            <p className="stats9-text05 thq-body-large">
              {props.stat2Description}
            </p>
          </div>
          <div className="stats9-container5 thq-card thq-box-shadow">
            <h2 className="thq-heading-2">{props.stat3}</h2>
            <span className="thq-body-small">
              {props.stat3ShortDescription}
            </span>
            <p className="stats9-text08 thq-body-large">
              {props.stat3Description}
            </p>
          </div>
          <div className="stats9-container6 thq-card thq-box-shadow">
            <h2 className="thq-heading-2">{props.stat4}</h2>
            <span className="thq-body-small">
              {props.stat4ShortDescription}
            </span>
            <p className="stats9-text11 thq-body-large">
              {props.stat4Description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats9.defaultProps = {
  stat1: '10,000',
  stat2: '5,000',
  content1: 'Our results in numbers',
  stat3: '15',
  stat2Description: 'Total feedback received from users',
  stat4Description: 'Average rating given by users for the platform',
  heading1: 'Stats Section',
  stat4: '4.5',
  stat1Description: 'Number of registered users on the platform',
  stat3Description: 'Number of exclusive features available to users',
  stat3ShortDescription: 'Exclusive Features',
  stat4ShortDescription: 'Average Rating',
  stat1ShortDescription: 'Total Users',
  stat2ShortDescription: 'Feedback Received',
}

Stats9.propTypes = {
  stat1: PropTypes.string,
  stat2: PropTypes.string,
  content1: PropTypes.string,
  stat3: PropTypes.string,
  stat2Description: PropTypes.string,
  stat4Description: PropTypes.string,
  heading1: PropTypes.string,
  stat4: PropTypes.string,
  stat1Description: PropTypes.string,
  stat3Description: PropTypes.string,
  stat3ShortDescription: PropTypes.string,
  stat4ShortDescription: PropTypes.string,
  stat1ShortDescription: PropTypes.string,
  stat2ShortDescription: PropTypes.string,
}

export default Stats9
