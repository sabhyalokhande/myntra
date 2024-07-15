import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './blog-post-header10.css'

const BlogPostHeader10 = (props) => {
  return (
    <div
      className={`blog-post-header10-blog-post-header3 thq-section-padding ${props.rootClassName} `}
    >
      <div className="blog-post-header10-max-width thq-section-max-width">
        <div className="thq-flex-row blog-post-header10-card">
          <img
            alt={props.blogPostImageAlt}
            src="https://thumbs.dreamstime.com/b/portrait-young-beautiful-woman-leaning-forward-hand-knee-studio-shot-young-beautiful-woman-wearing-casual-clothing-161743387.jpg"
            className="blog-post-header10-image thq-img-ratio-4-3"
          />
          <div className="blog-post-header10-container">
            <div className="blog-post-header10-container1">
              <div className="blog-post-header10-container2">
                <div className="blog-post-header10-container3">
                  <div className="blog-post-header10-content thq-flex-column">
                    <h3 className="blog-post-header10-heading thq-heading-2">
                      {props.category}
                    </h3>
                    <h1 className="blog-post-header10-title thq-heading-1">
                      {props.blogPostTitle}
                    </h1>
                    <span className="blog-post-header10-text">
                      {props.text}
                    </span>
                    <span className="blog-post-header10-author-name thq-body-small">
                      {props.avatarName}
                    </span>
                  </div>
                  <div className="blog-post-header10-container4">
                    <div className="blog-post-header10-container5">
                      <button
                        type="button"
                        className="blog-post-header10-button button"
                      >
                        {props.button}
                      </button>
                      <button
                        type="button"
                        className="blog-post-header10-button1 button"
                      >
                        {props.button3}
                      </button>
                      <button
                        type="button"
                        className="blog-post-header10-button2 button"
                      >
                        {props.button4}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <span className="blog-post-header10-text1">{props.text3}</span>
              <div className="blog-post-header10-container6">
                <div className="blog-post-header10-container7"></div>
                <span className="blog-post-header10-text2">{props.text4}</span>
              </div>
            </div>
            <Link to="/try-on" className="blog-post-header10-navlink">
              <svg viewBox="0 0 1024 1024" className="blog-post-header10-icon">
                <path
                  d="M1024 810.667v-469.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-147.84l-72.661-109.013c-7.765-11.52-20.736-18.987-35.499-18.987h-256c-13.909 0.085-27.307 6.741-35.499 18.987l-72.661 109.013h-147.84c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v469.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h768c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496zM938.667 810.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-768c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-469.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h170.667c14.763 0 27.733-7.467 35.499-18.987l72.661-109.013h210.347l72.661 109.013c8.192 12.245 21.589 18.901 35.499 18.987h170.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165zM725.333 554.667c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464-112.299 23.936-150.869 62.464-62.464 91.989-62.464 150.869 23.936 112.299 62.464 150.869 91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869zM640 554.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496 14.293-67.285 37.504-90.496 55.125-37.504 90.496-37.504 67.285 14.293 90.496 37.504 37.504 55.125 37.504 90.496z"
                  className=""
                ></path>
              </svg>
            </Link>
            <Link to="/try-on" className="blog-post-header10-navlink1">
              {props.text5}
            </Link>
            <div className="blog-post-header10-container8">
              <button
                type="button"
                className="blog-post-header10-button3 button"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="blog-post-header10-icon2"
                >
                  <path
                    d="M1004 804.571l20 178.857c1.143 10.286-2.286 20.571-9.143 28.571-6.857 7.429-17.143 12-27.429 12h-950.857c-10.286 0-20.571-4.571-27.429-12-6.857-8-10.286-18.286-9.143-28.571l20-178.857h984zM950.857 325.143l49.143 442.857h-976l49.143-442.857c2.286-18.286 17.714-32.571 36.571-32.571h146.286v73.143c0 40.571 32.571 73.143 73.143 73.143s73.143-32.571 73.143-73.143v-73.143h219.429v73.143c0 40.571 32.571 73.143 73.143 73.143s73.143-32.571 73.143-73.143v-73.143h146.286c18.857 0 34.286 14.286 36.571 32.571zM731.429 219.429v146.286c0 20-16.571 36.571-36.571 36.571s-36.571-16.571-36.571-36.571v-146.286c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286v146.286c0 20-16.571 36.571-36.571 36.571s-36.571-16.571-36.571-36.571v-146.286c0-121.143 98.286-219.429 219.429-219.429s219.429 98.286 219.429 219.429z"
                    className=""
                  ></path>
                </svg>
                <span className="blog-post-header10-text3">ADD TO BAG</span>
              </button>
              <button
                type="button"
                className="blog-post-header10-button4 button"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="blog-post-header10-icon4"
                >
                  <path
                    d="M755.188 64c-107.63 0-200.258 87.554-243.164 179-42.938-91.444-135.578-179-243.216-179-148.382 0-268.808 120.44-268.808 268.832 0 301.846 304.5 380.994 512.022 679.418 196.154-296.576 511.978-387.206 511.978-679.418 0-148.392-120.43-268.832-268.812-268.832z"
                    className=""
                  ></path>
                </svg>
                <span className="">WISHLIST</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

BlogPostHeader10.defaultProps = {
  button: 'S',
  text5: 'Try-on!!',
  text2: 'Label',
  text1: 'Label',
  button1: 'S',
  rootClassName: '',
  avatarName: 'Select size',
  text4: "It's trending !!",
  text3: 'Trend Radar',
  blogPostTitle: 'Women White Top',
  text: '₹ 799',
  blogPostImageSrc:
    'https://images.unsplash.com/photo-1665482652340-3152809730ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDk0MDI2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  button4: 'L',
  button5: 'ADD TO BAG',
  button2: 'M',
  button6: 'WISHLIST',
  category: 'Marks & Spencer',
  blogPostImageAlt: 'Virtual Try-On and AI Design Tools on Myntra',
  button3: 'M',
}

BlogPostHeader10.propTypes = {
  button: PropTypes.string,
  text5: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  button1: PropTypes.string,
  rootClassName: PropTypes.string,
  avatarName: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
  blogPostTitle: PropTypes.string,
  text: PropTypes.string,
  blogPostImageSrc: PropTypes.string,
  button4: PropTypes.string,
  button5: PropTypes.string,
  button2: PropTypes.string,
  button6: PropTypes.string,
  category: PropTypes.string,
  blogPostImageAlt: PropTypes.string,
  button3: PropTypes.string,
}

export default BlogPostHeader10
