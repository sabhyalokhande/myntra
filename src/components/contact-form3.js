import React from 'react'

import PropTypes from 'prop-types'

import './contact-form3.css'

const ContactForm3 = (props) => {
  return (
    <div
      className={`contact-form3-contact9 thq-section-padding ${props.rootClassName} `}
    >
      <div className="thq-section-max-width thq-flex-row contact-form3-max-width">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="contact-form3-image1 thq-img-ratio-4-3"
        />
        <div className="contact-form3-content thq-flex-column">
          <div className="contact-form3-section-title thq-card">
            <span className="thq-body-small">{props.content2}</span>
            <div className="contact-form3-content1">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <span className="thq-body-small">{props.content1}</span>
            </div>
          </div>
          <form className="thq-card">
            <div className="contact-form3-input">
              <label htmlFor="contact-form-3-name" className="thq-body-small">
                Name
              </label>
              <input
                type="text"
                id="contact-form-3-name"
                required="true"
                placeholder="Name"
                className="thq-input"
              />
            </div>
            <div className="contact-form3-input1">
              <label htmlFor="contact-form-3-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-3-email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <span className="">{props.text3}</span>
            <input
              type="text"
              required="true"
              placeholder="Enter your Location"
              className="contact-form3-textinput input"
            />
            <span className="">{props.text4}</span>
            <input
              type="number"
              required="true"
              placeholder="Enter your contact number"
              className="contact-form3-textinput1 input"
            />
            <div className="contact-form3-container">
              <label
                htmlFor="contact-form-3-message"
                className="thq-body-small"
              >
                <span className="">Description</span>
                <br className=""></br>
              </label>
              <textarea
                id="contact-form-3-message"
                rows="3"
                placeholder="Enter Description"
                className="thq-input"
              ></textarea>
            </div>
            <span className="">{props.text}</span>
            <input
              type="text"
              required="true"
              placeholder="Describe condition of your item"
              className="contact-form3-textinput2 input"
            />
            <span className="">{props.text1}</span>
            <input
              type="number"
              required="true"
              placeholder="Enter Price "
              className="contact-form3-textinput3 input"
            />
            <div className="contact-form3-checkbox">
              <input
                type="checkbox"
                id="contact-form-3-check"
                required="true"
                className="thq-checkbox"
              />
              <label
                htmlFor="contact-form-3-check"
                className="contact-form3-text12 thq-body-small"
              >
                I accept the Terms
              </label>
            </div>
            <button
              type="submit"
              className="contact-form3-button thq-button-filled"
            >
              <span className="thq-body-small">{props.action}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactForm3.defaultProps = {
  textinputPlaceholder1: 'placeholder',
  content1:
    'Fill this form, to create a request for selling your clothing item',
  text: 'Condition',
  rootClassName: '',
  text1: 'Price',
  action: 'Submit',
  text4: 'Contact number',
  heading1: 'Sell your old clothes',
  imageSrc:
    'https://images.unsplash.com/photo-1550928323-31789f5b5d61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDg4MDI4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  content2: 'Our team will get back to you as soon as possible.',
  imageAlt: 'Contact Form Image',
  textinputPlaceholder: 'placeholder',
  text3: 'Location',
  textinputPlaceholder2: 'placeholder',
  textinputPlaceholder3: 'placeholder',
  text2: 'Text',
}

ContactForm3.propTypes = {
  textinputPlaceholder1: PropTypes.string,
  content1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  action: PropTypes.string,
  text4: PropTypes.string,
  heading1: PropTypes.string,
  imageSrc: PropTypes.string,
  content2: PropTypes.string,
  imageAlt: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  text3: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  textinputPlaceholder3: PropTypes.string,
  text2: PropTypes.string,
}

export default ContactForm3
