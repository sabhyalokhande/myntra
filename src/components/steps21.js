import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './steps21.css'

const Steps21 = (props) => {
  return (
    <div className="steps21-container thq-section-padding">
      <div className="steps21-max-width thq-section-max-width">
        <div className="steps21-container01 thq-grid-2">
          <div className="steps21-section-header">
            <h2 className="thq-heading-2">STYLE CRAFT</h2>
            <p className="thq-body-large">SKETCH AND CREATE YOUR OWN OUTFIT!</p>
            <span>{props.text4}</span>
            <span>{props.text5}</span>
            <span>{props.text6}</span>
            <span>{props.text7}</span>
            <span>{props.text8}</span>
            <span>{props.text9}</span>
            <Link
              to="/addoutfit"
              className="steps21-button thq-button-filled thq-button-animated"
            >
              <span className="thq-body-small">Add your outfit</span>
            </Link>
          </div>
          <div className="steps21-container02">
            <div className="steps21-container03 thq-card">
              <div className="steps21-container04">
                <div className="steps21-container05"></div>
              </div>
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <div className="steps21-container06">
                <div className="steps21-container07">
                  <div className="steps21-image"></div>
                  <span className="steps21-text10 thq-body-small">
                    {props.step1Description}
                  </span>
                  <button type="button" className="steps21-button1 button">
                    <svg viewBox="0 0 1024 1024" className="steps21-icon">
                      <path d="M755.188 64c-107.63 0-200.258 87.554-243.164 179-42.938-91.444-135.578-179-243.216-179-148.382 0-268.808 120.44-268.808 268.832 0 301.846 304.5 380.994 512.022 679.418 196.154-296.576 511.978-387.206 511.978-679.418 0-148.392-120.43-268.832-268.812-268.832z"></path>
                    </svg>
                    <span className="steps21-text11">{props.text1}</span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="steps21-container08">
              <div className="steps21-container09 thq-card">
                <h2 className="thq-heading-2">{props.step2Title}</h2>
                <div className="steps21-container10">
                  <img
                    alt={props.imageAlt2}
                    src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/125644573/original/372c2b4444a551ca469e6846d0097b5de472e22e/fashion-designs-illustration-sketch-fashion-designs-illustration-sketsh.jpg"
                    className="steps21-image1"
                  />
                  <span className="steps21-text14 thq-body-small">
                    {props.step2Description}
                  </span>
                  <button
                    type="submit"
                    disabled="true"
                    autoFocus="true"
                    className="steps21-button2 button"
                  >
                    <svg viewBox="0 0 1024 1024" className="steps21-icon2">
                      <path d="M755.188 64c-107.63 0-200.258 87.554-243.164 179-42.938-91.444-135.578-179-243.216-179-148.382 0-268.808 120.44-268.808 268.832 0 301.846 304.5 380.994 512.022 679.418 196.154-296.576 511.978-387.206 511.978-679.418 0-148.392-120.43-268.832-268.812-268.832z"></path>
                    </svg>
                    <span className="steps21-text15">{props.text2}</span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="steps21-container11 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <div className="steps21-container12">
                <img
                  alt={props.imageAlt4}
                  src="https://i.pinimg.com/originals/f9/97/6e/f9976e95d933c3251576ed4605b99567.jpg"
                  className="steps21-image2"
                />
                <span className="steps21-text18 thq-body-small">
                  {props.step3Description}
                </span>
                <button type="button" className="steps21-button3 button">
                  <svg viewBox="0 0 1024 1024" className="steps21-icon4">
                    <path d="M755.188 64c-107.63 0-200.258 87.554-243.164 179-42.938-91.444-135.578-179-243.216-179-148.382 0-268.808 120.44-268.808 268.832 0 301.846 304.5 380.994 512.022 679.418 196.154-296.576 511.978-387.206 511.978-679.418 0-148.392-120.43-268.832-268.812-268.832z"></path>
                  </svg>
                  <span className="steps21-text19">{props.text3}</span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps21.defaultProps = {
  text3: '276',
  button: '',
  text7:
    '1) Upload Your Sketch: Showcase your creativity by uploading your fashion sketches. ✏️',
  step2Description:
    'This stunning white floral one-piece dress exudes elegance and charm, perfect for making a grand entrance at any party. Crafted from luxurious, lightweight fabric, it features a floor-length design that gracefully cascades down to create a fluid silhouette.',
  step3Description:
    'This traditional male ensemble features a navy blue sparkling jacket with intricate embroidery, exuding elegance and sophistication. The unique bottomwear blends classic and modern design elements, ensuring comfort and style. Perfect for weddings, festivals, or cultural events, this outfit makes a bold and glamorous statement.',
  text9:
    '3) Win & Launch: The design with the highest votes gets produced and featured on our platform! 🏆',
  text6: 'How it works:',
  step1Description:
    'The dress is a stunning red chiffon one-piece, elegantly designed for party wear. The flowing chiffon fabric drapes beautifully, creating a graceful and sophisticated silhouette.',
  imageAlt2: 'image',
  text8:
    '2) Get Votes: Share your design and gather votes from friends and the community. ❤️',
  step2Title: '2. IVA',
  text4: '',
  text5:
    'Unleash your inner designer with StyleCraft! Upload your sketches and let the community decide which design should be brought to life. The design with the most votes will be launched on our platform!',
  text1: '189',
  button1: '',
  button2: '',
  imageAlt4: 'image',
  button3: '',
  button4: '',
  text: 'Unleash your inner designer with StyleCraft! 🎉 Upload your sketches and let the community decide which design should be brought to life. 🗳️ The design with the most votes will be launched on our platform! 🚀  How it works:  Upload Your Sketch: Showcase your creativity by uploading your fashion sketches. ✏️📸 Get Votes: Share your design and gather votes from friends and the community. 👍❤️ Win & Launch: The design with the highest votes gets produced and featured on our platform! 👗🏆',
  step3Title: '3.ZEN',
  step1Title: '1. ANNA',
  text2: '200',
}

Steps21.propTypes = {
  text3: PropTypes.string,
  button: PropTypes.string,
  text7: PropTypes.string,
  step2Description: PropTypes.string,
  step3Description: PropTypes.string,
  text9: PropTypes.string,
  text6: PropTypes.string,
  step1Description: PropTypes.string,
  imageAlt2: PropTypes.string,
  text8: PropTypes.string,
  step2Title: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text1: PropTypes.string,
  button1: PropTypes.string,
  button2: PropTypes.string,
  imageAlt4: PropTypes.string,
  button3: PropTypes.string,
  button4: PropTypes.string,
  text: PropTypes.string,
  step3Title: PropTypes.string,
  step1Title: PropTypes.string,
  text2: PropTypes.string,
}

export default Steps21
