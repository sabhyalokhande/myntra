import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer
      className={`footer-footer7 thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer-max-width thq-section-max-width">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              alt="Logo"
              src="https://logos-world.net/wp-content/uploads/2022/12/Myntra-Logo-2015.png"
              className="footer-logo1"
            />
          </div>
          <div className="footer-links">
            <a
              href="https://www.facebook.com/myntra"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="footer-icon">
                <path
                  d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"
                  className=""
                ></path>
              </svg>
            </a>
            <a
              href="https://x.com/myntra"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link1"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="footer-icon2"
              >
                <path
                  d="M731.429 348.571c-21.714 9.714-44.571 16-69.143 19.429 25.143-14.857 44-38.857 53.143-66.857-23.429 13.714-49.143 24-76.571 29.143-21.714-23.429-53.143-37.714-87.429-37.714-66.286 0-120 53.714-120 120 0 9.143 0.571 18.857 2.857 27.429-100-5.143-188.571-52.571-248-125.714-10.286 17.714-16.571 38.857-16.571 60.571 0 41.714 19.429 78.286 52 100-20-0.571-38.857-6.286-57.143-14.857v1.143c0 58.286 44 106.857 98.857 117.714-10.286 2.857-18.286 4.571-29.143 4.571-7.429 0-14.857-1.143-22.286-2.286 15.429 47.429 59.429 82.286 112 83.429-41.143 32-92.571 51.429-149.143 51.429-9.714 0-19.429-0.571-28.571-1.714 53.143 33.714 116 53.714 184 53.714 220.571 0 341.714-182.857 341.714-341.714 0-5.143 0-10.286-0.571-15.429 23.429-16.571 44-37.714 60-62.286zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
                  className=""
                ></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/user/myntradotcom"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link2"
            >
              <svg viewBox="0 0 1024 1024" className="footer-icon4">
                <path
                  d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"
                  className=""
                ></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/myntra/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link3"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="footer-icon6"
              >
                <path
                  d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                  className=""
                ></path>
              </svg>
            </a>
            <span className="thq-body-small">{props.link5}</span>
          </div>
        </div>
        <div className="footer-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer-row">
            <div className="footer-container">
              <span className="thq-body-small">
                © 2024 www.myntra.com. All rights reserved.
              </span>
            </div>
            <div className="footer-footer-links">
              <span className="footer-text2 thq-body-small">
                {props.privacyLink}
              </span>
              <span className="thq-body-small">{props.termsLink}</span>
              <span className="thq-body-small">{props.cookiesLink}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  link5: '',
  link3: 'Link 3',
  cookiesLink: 'Cookies Settings',
  rootClassName: '',
  link1: 'Link 1',
  link2: 'Link 2',
  link4: 'Link 4',
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  logoAlt: 'Logo',
  privacyLink: 'Privacy Policy',
  termsLink: 'Terms of Service',
}

Footer.propTypes = {
  link5: PropTypes.string,
  link3: PropTypes.string,
  cookiesLink: PropTypes.string,
  rootClassName: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link4: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  privacyLink: PropTypes.string,
  termsLink: PropTypes.string,
}

export default Footer
