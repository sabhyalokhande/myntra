import React from 'react'

import PropTypes from 'prop-types'

import './timeline7.css'

const Timeline7 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="timeline7-max-width thq-section-max-width">
        <div className="timeline7-container01">
          <h2 className="timeline7-text thq-heading-2">{props.title1}</h2>
          <span className="timeline7-text01 thq-body-small">
            {props.content1}
          </span>
          <div className="timeline7-container02">
            <button type="button" className="thq-button-filled">
              {props.action1}
            </button>
            <button type="button" className="thq-button-outline">
              {props.action2}
            </button>
          </div>
        </div>
        <div className="timeline7-timeline-container">
          <div className="timeline7-step1">
            <div className="timeline7-container03">
              <div className="timeline7-container04"></div>
              <div className="timeline7-progress0"></div>
            </div>
            <div className="timeline7-container05">
              <h3 className="thq-heading-3">{props.date1}</h3>
              <h3 className="timeline7-text03 thq-heading-3">
                {props.card1Heading}
              </h3>
              <span className="thq-body-small">{props.card1Content}</span>
              <div className="timeline7-container06">
                <button type="button" className="thq-button-filled">
                  {props.card1Action1}
                </button>
                <button type="button" className="thq-button-outline">
                  {props.card1Action2}
                </button>
              </div>
            </div>
          </div>
          <div className="timeline7-step2">
            <div className="timeline7-container07">
              <div className="timeline7-container08"></div>
              <div className="timeline7-progress01"></div>
            </div>
            <div className="timeline7-container09">
              <h3 className="thq-heading-3">{props.date2}</h3>
              <h3 className="timeline7-text06 thq-heading-3">
                {props.card2Heading}
              </h3>
              <span className="thq-body-small">{props.card2Content}</span>
              <div className="timeline7-container10">
                <button type="button" className="thq-button-filled">
                  {props.card2Action1}
                </button>
                <button type="button" className="thq-button-outline">
                  {props.card2Action2}
                </button>
              </div>
            </div>
          </div>
          <div className="timeline7-step3">
            <div className="timeline7-container11">
              <div className="timeline7-container12"></div>
              <div className="timeline7-progress02"></div>
            </div>
            <div className="timeline7-container13">
              <h3 className="thq-heading-3">{props.date3}</h3>
              <h3 className="timeline7-text09 thq-heading-3">
                {props.card3Heading}
              </h3>
              <span className="thq-body-small">{props.card3Content}</span>
              <div className="timeline7-container14">
                <button type="button" className="thq-button-filled">
                  {props.card3Action1}
                </button>
                <button type="button" className="thq-button-outline">
                  {props.card3Action2}
                </button>
              </div>
            </div>
          </div>
          <div className="timeline7-step4">
            <div className="timeline7-container15">
              <div className="timeline7-container16"></div>
              <div className="timeline7-progress03"></div>
            </div>
            <div className="timeline7-container17">
              <h3 className="thq-heading-3">{props.date4}</h3>
              <h3 className="timeline7-text12 thq-heading-3">
                {props.card4Heading}
              </h3>
              <span className="thq-body-small">{props.card4Content}</span>
              <div className="timeline7-container18">
                <button type="button" className="thq-button-filled">
                  {props.card4Action1}
                </button>
                <button type="button" className="thq-button-outline">
                  {props.card4Action2}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Timeline7.defaultProps = {
  action2: 'Seconday action',
  content1: 'User creates an account using email, Facebook, or Google.',
  card2Action2: 'Connect with Google',
  card4Action1: 'Read Privacy Policy',
  card3Content:
    "User agrees to the Terms of Use before accessing the website's features.",
  date3: 'March 2022',
  date1: 'January 2022',
  date2: 'February 2022',
  card2Heading: 'Social Media Integration',
  action1: 'Primary action',
  card1Action2: 'Change Email Address',
  card2Content:
    'User connects their account with Facebook or Google for easier access.',
  card4Content:
    'User acknowledges and agrees to the Privacy Policy to protect their data.',
  card4Action2: 'Agree to Policy',
  card3Action1: 'View Terms of Use',
  title1: 'Account Creation',
  date4: 'April 2022',
  card3Heading: 'Terms of Use Agreement',
  card1Heading: 'Email Verification',
  card2Action1: 'Connect with Facebook',
  card1Content:
    'User receives a verification email and confirms their email address.',
  card1Action1: 'Resend Verification Email',
  card4Heading: 'Privacy Policy Acknowledgement',
  card3Action2: 'Agree to Terms',
}

Timeline7.propTypes = {
  action2: PropTypes.string,
  content1: PropTypes.string,
  card2Action2: PropTypes.string,
  card4Action1: PropTypes.string,
  card3Content: PropTypes.string,
  date3: PropTypes.string,
  date1: PropTypes.string,
  date2: PropTypes.string,
  card2Heading: PropTypes.string,
  action1: PropTypes.string,
  card1Action2: PropTypes.string,
  card2Content: PropTypes.string,
  card4Content: PropTypes.string,
  card4Action2: PropTypes.string,
  card3Action1: PropTypes.string,
  title1: PropTypes.string,
  date4: PropTypes.string,
  card3Heading: PropTypes.string,
  card1Heading: PropTypes.string,
  card2Action1: PropTypes.string,
  card1Content: PropTypes.string,
  card1Action1: PropTypes.string,
  card4Heading: PropTypes.string,
  card3Action2: PropTypes.string,
}

export default Timeline7
