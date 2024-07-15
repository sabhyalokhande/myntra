import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './testimonial171.css'

const Testimonial171 = (props) => {
  return (
    <div className="testimonial171-testimonial13 thq-section-padding">
      <div className="testimonial171-max-width thq-section-max-width">
        <div className="testimonial171-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial171-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial171-card"
              >
                <div className="testimonial171-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial171-image"
                  />
                  <div className="testimonial171-container03">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <img
                  alt={props.imageAlt}
                  src="https://5.imimg.com/data5/ANDROID/Default/2022/3/BQ/JB/BR/132655184/product-jpeg.jpg"
                  className="testimonial171-image1"
                />
                <span className="testimonial171-text04">{props.text}</span>
                <span className="testimonial171-text05 thq-body-small">
                  {props.review1}
                </span>
                <span>{props.text4}</span>
                <button type="button" className="testimonial171-button button">
                  {props.button}
                </button>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="testimonial171-accent1-bg1 thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial171-card1"
              >
                <div className="testimonial171-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial171-image2"
                  />
                  <div className="testimonial171-container05">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <img
                  alt={props.imageAlt2}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA1q8r7BbabRleaQpV4iHpRDRmSr61T05DAw&amp;s"
                  className="testimonial171-image3"
                />
                <span className="testimonial171-text09">{props.text1}</span>
                <span className="testimonial171-text10 thq-body-small">
                  {props.review2}
                </span>
                <span>{props.text5}</span>
                <button type="button" className="testimonial171-button1 button">
                  {props.button1}
                </button>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial171-card2"
              >
                <div className="testimonial171-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial171-image4"
                  />
                  <div className="testimonial171-container07">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <img
                  alt={props.imageAlt3}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7OLn6auDVmS6ZX5DWpIAN0VZTHpMgEukMAw&amp;s"
                  className="testimonial171-image5"
                />
                <span className="testimonial171-text14">{props.text2}</span>
                <span className="testimonial171-text15 thq-body-small">
                  {props.review3}
                </span>
                <span>{props.text6}</span>
                <button type="button" className="testimonial171-button2 button">
                  {props.button2}
                </button>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial171-card3"
              >
                <div className="testimonial171-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial171-image6"
                  />
                  <div className="testimonial171-container09">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <img
                  alt={props.imageAlt1}
                  src="https://themogan.com/cdn/shop/files/17214063_dbd36eff-7863-4829-b929-202635f268d0_550x.jpg?v=1698202403"
                  className="testimonial171-image7"
                />
                <span className="testimonial171-text19">{props.text3}</span>
                <span className="testimonial171-text20 thq-body-small">
                  {props.review4}
                </span>
                <span>{props.text7}</span>
                <button type="button" className="testimonial171-button3 button">
                  {props.button4}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/seller-form-ecochic" className="testimonial171-navlink">
        {props.text8}
      </Link>
    </div>
  )
}

Testimonial171.defaultProps = {
  author1Alt: 'image',
  content1: "Myntra's brand new thrift store",
  author2Name: 'Raj Malhotra',
  imageAlt2: 'image',
  text: 'Rs.  299',
  author3Name: 'Siya Sharma',
  button2: 'Buy Now',
  author4Name: 'Lisa Roy',
  author4Position: 'Mumbai, Maharashtra',
  review4:
    'Unique purple pants with a slit detail, offering a fashionable twist to your everyday attire.',
  author2Src:
    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  review2:
    'Comfortable black joggers featuring a trendy yellow design, perfect for a sporty and stylish look.',
  text1: 'Rs. 399',
  button4: 'Buy Now',
  text4: 'Condition: Gently worn, well-maintained.',
  heading1: 'Eco Chic',
  text8: 'Wanna sell your old outfits ??',
  author3Src:
    'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  imageAlt3: 'image',
  text5: 'Condition: Lightly used, still vibrant.',
  author1Position: 'Chandigarh, Punjab',
  imageSrc3: 'https://play.teleporthq.io/static/svg/default-img.svg',
  author4Alt: 'image',
  imageAlt1: 'image',
  button1: 'Buy Now',
  author3Alt: 'image',
  text7: 'Condition: Well-preserved, stylish.',
  review1:
    'Classic maroon shirt that adds a touch of sophistication to any casual or formal ensemble.',
  author3Position: 'Ahmedabad, Gujrat',
  imageSrc2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt: 'image',
  author2Alt: 'image',
  review3:
    'Bright red top that brings a pop of color to your wardrobe, versatile for both casual and chic outfits.',
  button3: 'Button',
  imageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  author1Name: 'Ayan Khan',
  text3: 'Rs. 349',
  text6: 'Condition: Pre-loved, in great shape.',
  button: 'Buy Now',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text2: 'Rs. 249',
  author2Position: 'Nagpur, Maharashtra',
  author4Src:
    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTY2fDA&ixlib=rb-4.0.3&w=200',
  author1Src:
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGF2YXRhcnxlbnwwfHx8fDE3MTYzODM1NTJ8MA&ixlib=rb-4.0.3&w=200',
}

Testimonial171.propTypes = {
  author1Alt: PropTypes.string,
  content1: PropTypes.string,
  author2Name: PropTypes.string,
  imageAlt2: PropTypes.string,
  text: PropTypes.string,
  author3Name: PropTypes.string,
  button2: PropTypes.string,
  author4Name: PropTypes.string,
  author4Position: PropTypes.string,
  review4: PropTypes.string,
  author2Src: PropTypes.string,
  review2: PropTypes.string,
  text1: PropTypes.string,
  button4: PropTypes.string,
  text4: PropTypes.string,
  heading1: PropTypes.string,
  text8: PropTypes.string,
  author3Src: PropTypes.string,
  imageAlt3: PropTypes.string,
  text5: PropTypes.string,
  author1Position: PropTypes.string,
  imageSrc3: PropTypes.string,
  author4Alt: PropTypes.string,
  imageAlt1: PropTypes.string,
  button1: PropTypes.string,
  author3Alt: PropTypes.string,
  text7: PropTypes.string,
  review1: PropTypes.string,
  author3Position: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt: PropTypes.string,
  author2Alt: PropTypes.string,
  review3: PropTypes.string,
  button3: PropTypes.string,
  imageSrc1: PropTypes.string,
  author1Name: PropTypes.string,
  text3: PropTypes.string,
  text6: PropTypes.string,
  button: PropTypes.string,
  imageSrc: PropTypes.string,
  text2: PropTypes.string,
  author2Position: PropTypes.string,
  author4Src: PropTypes.string,
  author1Src: PropTypes.string,
}

export default Testimonial171
