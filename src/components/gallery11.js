import React from 'react'

import PropTypes from 'prop-types'

import './gallery11.css'

const Gallery11 = (props) => {
  return (
    <div className="gallery11-gallery3 thq-section-padding">
      <div className="gallery11-max-width thq-section-max-width">
        <div className="gallery11-section-title">
          <h2 className="gallery11-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery11-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="gallery11-content">
          <div className="gallery11-container">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="gallery11-image1 thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="gallery11-image2 thq-img-ratio-1-1"
            />
          </div>
          <div className="gallery11-container1">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="gallery11-image3 thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="gallery11-image4 thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery11.defaultProps = {
  image4Alt: 'Chic Handbags',
  heading1: 'Explore the Latest Trends',
  image1Alt: 'Trendy Outfit 1',
  image1Src:
    'https://images.unsplash.com/photo-1567972787460-5b9f5f23f514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDg3NTA4OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1642364706728-14a86b585bb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDg3NTA5MHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Discover a wide range of trendy outfits, stylish accessories, fashionable shoes, and chic handbags to elevate your fashion game.',
  image2Src:
    'https://images.unsplash.com/photo-1571274634676-23f4fa37b0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDg3NTA5MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Stylish Accessories',
  image3Alt: 'Fashionable Shoes',
  image3Src:
    'https://images.unsplash.com/photo-1645460497526-1d882d77e218?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDg3NTA5MHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Gallery11.propTypes = {
  image4Alt: PropTypes.string,
  heading1: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image4Src: PropTypes.string,
  content1: PropTypes.string,
  image2Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image3Src: PropTypes.string,
}

export default Gallery11
