import React from 'react'

import PropTypes from 'prop-types'

import './contact5.css'

const Contact5 = (props) => {
  return (
    <div className="contact5-container thq-section-padding">
      <div className="contact5-max-width thq-section-max-width">
        <div className="contact5-section-title">
          <div className="contact5-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact5-content1 thq-flex-row">
          <div className="contact5-content2">
            <div className="contact5-content3">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact5-contact-info">
                <h3 className="contact5-text2 thq-heading-3">Email</h3>
                <p className="thq-body-large">{props.content2}</p>
                <span className="thq-body-small">{props.email}</span>
              </div>
            </div>
            <div className="contact5-content4">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact5-contact-info1">
                <h3 className="contact5-text4 thq-heading-3">Phone</h3>
                <p className="thq-body-large">{props.content3}</p>
                <span className="thq-body-small">{props.phone1}</span>
              </div>
            </div>
            <div className="contact5-content5">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact5-contact-info2">
                <h3 className="contact5-text7 thq-heading-3">Office</h3>
                <p className="thq-body-large">{props.content5}</p>
                <span className="thq-body-small">{props.address1}</span>
              </div>
            </div>
          </div>
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="contact5-image thq-img-ratio-1-1"
          />
        </div>
      </div>
    </div>
  )
}

Contact5.defaultProps = {
  email: 'contact@example.com',
  phone1: '+123-456-7890',
  content2:
    'For any inquiries, please feel free to reach out to us using the contact information provided below.',
  content1:
    'We are here to assist you with any questions or concerns you may have.',
  image1Alt: 'Contact Image',
  content5: 'We strive to respond to all messages within 24 hours.',
  heading1: 'Contact Us',
  content3: 'You can also fill out the contact form on our website.',
  imageSrc:
    'https://images.unsplash.com/photo-1552068751-34cb5cf055b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDc4OTk4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  address1: '123 Main Street, City, Country',
  imageAlt: 'Contact Icon',
}

Contact5.propTypes = {
  email: PropTypes.string,
  phone1: PropTypes.string,
  content2: PropTypes.string,
  content1: PropTypes.string,
  image1Alt: PropTypes.string,
  content5: PropTypes.string,
  heading1: PropTypes.string,
  content3: PropTypes.string,
  imageSrc: PropTypes.string,
  address1: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Contact5
