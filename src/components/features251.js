import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features251.css'

const Features251 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="features251-container1 thq-section-max-width">
        <div className="features251-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features251-tab-horizontal"
          >
            <div className="features251-divider-container">
              {activeTab === 0 && (
                <div className="features251-container2"></div>
              )}
            </div>
            <div className="features251-content">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features251-tab-horizontal1"
          >
            <div className="features251-divider-container1">
              {activeTab === 1 && (
                <div className="features251-container3"></div>
              )}
            </div>
            <div className="features251-content1">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features251-tab-horizontal2"
          >
            <div className="features251-divider-container2">
              {activeTab === 2 && (
                <div className="features251-container4"></div>
              )}
            </div>
            <div className="features251-content2">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features251-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features251-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features251-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features251-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features251.defaultProps = {
  feature3Description:
    'feature that helps users plan their outfits for the week. Users can mix and match items from their wardrobe and create outfits.',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDE1NTZ8MA&ixlib=rb-4.0.3&w=1400',
  rootClassName: '',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1626282874430-c11ae32d2898?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1NHx8YWJzdHJhY3R8ZW58MHx8fHwxNzE2MjAxNjAyfDA&ixlib=rb-4.0.3&w=1400',
  feature3ImgAlt: 'image',
  feature2Title: 'Feature #5 - Style Crate',
  feature3Title: 'Feature #6 - Fit Planner',
  feature1Title: 'Feature #4 - Style Wars',
  feature2ImgAlt: 'image',
  feature1Description:
    'A competitive feature where users create outfits from a set selection of clothes, vie for the best look, and win rewards based on community votes.',
  feature1ImgAlt: 'feature 1',
  feature2Description:
    'Monthly subscription boxes with curated outfits, accessories, style tips, exclusive discounts, and themed mystery boxes like Harry Potter.',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDEzMDd8MA&ixlib=rb-4.0.3&w=1400',
}

Features251.propTypes = {
  feature3Description: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
}

export default Features251
