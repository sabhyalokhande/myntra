import React from 'react'

import PropTypes from 'prop-types'

import './contact101.css'

const Contact101 = (props) => {
  return (
    <div
      className={`contact101-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact101-max-width thq-section-max-width">
        <div className="contact101-content thq-flex-row">
          <div className="contact101-content1">
            <h2 className="contact101-text thq-heading-2">{props.heading1}</h2>
            <p className="contact101-text01 thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact101-content2 thq-flex-row">
          <div className="contact101-container1">
            <img
              alt={props.location1ImageAlt}
              src="https://hips.hearstapps.com/hmg-prod/images/elm010119frchristopherrogers-001-1545428903.jpg?crop=1xw:0.8001641362330735xh;center,top&amp;resize=640:*"
              className="contact101-image thq-img-ratio-16-9"
            />
            <h3 className="contact101-text02 thq-heading-3">
              {props.location1}
            </h3>
            <p className="thq-body-large">{props.location1Description}</p>
            <div className="contact101-container2">
              <span className="thq-body-small thq-button-flat">Vote</span>
            </div>
          </div>
          <span className="contact101-text05">{props.text}</span>
          <div className="contact101-container3">
            <img
              alt={props.location2ImageAlt}
              src="https://assets.vogue.com/photos/5f8984d6395836ae716cfcac/master/w_2560%2Cc_limit/00011-Greta-Constantine-Spring-21-credit-carlos-and-alyse.jpg"
              className="contact101-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact101-text06 thq-heading-3">
              {props.location2}
            </h3>
            <p className="contact101-text07 thq-body-large">
              {props.location2Description}
            </p>
            <div className="contact101-container4">
              <span className="thq-body-small thq-button-flat">
                <span className="">Vote</span>
                <br className=""></br>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact101.defaultProps = {
  text: 'Vs',
  location1ImageAlt: 'image1Alt',
  location1: 'Emma',
  heading1: 'Style Wars',
  rootClassName: '',
  location2ImageSrc:
    'https://images.unsplash.com/photo-1571979195097-59d223315d89?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxidWNoYXJlc3R8ZW58MHx8fHwxNzE2Mjg2MzE3fDA&ixlib=rb-4.0.3&w=1400',
  location2Description:
    'Stand out effortlessly with this blue top and purple pants ensemble.',
  content1: 'Vote for the best outfits styled by our Influencers',
  location2: 'Chloe',
  location2ImageAlt: 'image2Alt',
  location1ImageSrc:
    'https://images.unsplash.com/photo-1588694926280-3ae414d06ccb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxjbHVqfGVufDB8fHx8MTcxNjI4NjI4N3ww&ixlib=rb-4.0.3&w=1400',
  location1Description:
    'Elegant and eye-catching, this pink long gown is perfect for making a bold statement at any event.',
}

Contact101.propTypes = {
  text: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  location1: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  location2Description: PropTypes.string,
  content1: PropTypes.string,
  location2: PropTypes.string,
  location2ImageAlt: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  location1Description: PropTypes.string,
}

export default Contact101
