import React from 'react'

import PropTypes from 'prop-types'

import './contact7.css'

const Contact7 = (props) => {
  return (
    <div className="contact7-container thq-section-padding">
      <div className="contact7-max-width thq-section-max-width">
        <div className="contact7-content thq-flex-row">
          <div className="contact7-content1">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact7-content2 thq-flex-row">
          <div className="contact7-container1">
            <img
              alt={props.location1ImgAlt}
              src={props.location1ImgSrc}
              className="contact7-image thq-img-ratio-16-9"
            />
            <h3 className="contact7-text2 thq-heading-3">{props.location1}</h3>
            <p className="thq-body-large">{props.location1Description}</p>
            <div className="contact7-container2">
              <span className="thq-body-small thq-button-flat">
                Get directions
              </span>
            </div>
          </div>
          <div className="contact7-container3">
            <img
              alt={props.location2ImgAlt}
              src={props.location2ImgSrc}
              className="contact7-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact7-text5 thq-heading-3">{props.location2}</h3>
            <p className="thq-body-large">{props.location2Description}</p>
            <div className="contact7-container4">
              <span className="thq-body-small thq-button-flat">
                Get directions
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact7.defaultProps = {
  location2ImgSrc:
    'https://images.unsplash.com/photo-1472722266948-a898ab5ff257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDk2NTA5OXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Contact Us',
  location2: 'Customer Support',
  content1: '+123-456-7890',
  location1ImgSrc:
    'https://images.unsplash.com/photo-1528220704592-69af2162a4c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDk2NTA5OXw&ixlib=rb-4.0.3&q=80&w=1080',
  location2Description:
    'For any queries or assistance, reach out to our customer support team via email at support@myntra.com.',
  location2ImgAlt: 'Customer Support Image',
  location1ImgAlt: 'Headquarters Image',
  location1: 'Headquarters',
  location1Description:
    'Visit us at our headquarters located at XYZ Street, ABC City.',
}

Contact7.propTypes = {
  location2ImgSrc: PropTypes.string,
  heading1: PropTypes.string,
  location2: PropTypes.string,
  content1: PropTypes.string,
  location1ImgSrc: PropTypes.string,
  location2Description: PropTypes.string,
  location2ImgAlt: PropTypes.string,
  location1ImgAlt: PropTypes.string,
  location1: PropTypes.string,
  location1Description: PropTypes.string,
}

export default Contact7
