import React from 'react'

import PropTypes from 'prop-types'

import './contact-form31.css'

const ContactForm31 = (props) => {
  return (
    <div
      className={`contact-form31-contact9 thq-section-padding ${props.rootClassName} `}
    >
      <div className="thq-section-max-width thq-flex-row contact-form31-max-width">
        <img
          alt={props.imageAlt}
          src="https://img.freepik.com/premium-photo/fashion-design-sketch-new-beautiful-outfit-woman_954932-3690.jpg"
          className="contact-form31-image1 thq-img-ratio-4-3"
        />
        <div className="contact-form31-content thq-flex-column">
          <div className="contact-form31-section-title thq-card">
            <div className="contact-form31-content1">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <span className="thq-body-small">{props.content1}</span>
            </div>
            <button type="button" className="contact-form31-button button">
              {props.button}
            </button>
          </div>
          <form className="thq-card">
            <div className="contact-form31-container">
              <label
                htmlFor="contact-form-3-message"
                className="thq-body-small"
              >
                Decribe your outfit
              </label>
              <textarea
                id="contact-form-3-message"
                rows="3"
                placeholder="Add description"
                className="contact-form31-textarea thq-input"
              ></textarea>
            </div>
            <div className="contact-form31-checkbox">
              <input
                type="checkbox"
                id="contact-form-3-check"
                checked="true"
                required="true"
                className="thq-checkbox"
              />
              <label
                htmlFor="contact-form-3-check"
                className="contact-form31-text3 thq-body-small"
              >
                I accept the Terms
              </label>
            </div>
            <button
              type="submit"
              className="contact-form31-button1 thq-button-filled"
            >
              <span className="thq-body-small">{props.action}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactForm31.defaultProps = {
  button: 'Upload image',
  content1: '',
  imageAlt: 'Contact Form Image',
  action: 'Submit',
  heading1: 'ADD YOUR SKETCH !',
  content2: 'Upload image',
  rootClassName: '',
  imageSrc:
    'https://images.unsplash.com/photo-1594300788674-7ed656a8d6d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDk2NTA5OHw&ixlib=rb-4.0.3&q=80&w=700',
}

ContactForm31.propTypes = {
  button: PropTypes.string,
  content1: PropTypes.string,
  imageAlt: PropTypes.string,
  action: PropTypes.string,
  heading1: PropTypes.string,
  content2: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default ContactForm31
