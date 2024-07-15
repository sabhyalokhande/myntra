import React from 'react'

import PropTypes from 'prop-types'

import './content-list4.css'

const ContentList4 = (props) => {
  return (
    <div className="content-list4-container thq-section-padding">
      <div className="content-list4-max-width thq-flex-column thq-section-max-width">
        <div className="content-list4-content thq-flex-column">
          <ul className="content-list4-ul thq-flex-column">
            <li className="content-list4-li thq-flex-column list-item">
              <h2 className="content-list4-heading7 thq-heading-2">
                {props.heading7}
              </h2>
              <p className="content-list4-content7 thq-body-small">
                {props.content7}
              </p>
              <ul className="content-list4-ul1 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">{props.heading8}</h3>
                  <p className="thq-body-small">{props.content2}</p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">{props.heading9}</h3>
                  <p className="thq-body-small">{props.content9}</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="content-list4-content1 thq-flex-column content-list4-content1 thq-body-small">
          <ul className="content-list4-ul2 thq-flex-column">
            <li className="content-list4-li03 thq-flex-column list-item">
              <h2 className="content-list4-heading1 thq-heading-2">
                {props.heading1}
              </h2>
              <p>{props.content1}</p>
              <ul className="content-list4-ul3 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">{props.heading2}</h3>
                  <p>{props.content2}</p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">{props.heading3}</h3>
                  <p className="thq-body-small">{props.content3}</p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">{props.heading4}</h3>
                  <p className="thq-body-small">{props.content4}</p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">{props.heading5}</h3>
                  <p className="thq-body-small">{props.content5}</p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">{props.heading6}</h3>
                  <p className="thq-body-small">{props.content6}</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="thq-body-small content-list4-content2 thq-flex-column">
          <ul className="content-list4-ul4 thq-flex-column">
            <li className="content-list4-li09 thq-flex-column list-item">
              <h2 className="content-list4-heading10 thq-heading-2">
                {props.heading10}
              </h2>
              <p className="content-list4-content10 thq-body-small">
                {props.content10}
              </p>
              <ul className="content-list4-ul5 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">{props.heading11}</h3>
                  <p className="thq-body-small">{props.content11}</p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">{props.heading12}</h3>
                  <p className="thq-body-small">{props.content12}</p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">{props.heading13}</h3>
                  <p className="thq-body-small">{props.content13}</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList4.defaultProps = {
  heading10: 'Contact Us',
  heading6: 'Account Details',
  heading3: 'Authentication Options',
  content6: 'Access and manage your account details securely.',
  content4: 'Read and agree to our Terms of Use before proceeding.',
  heading2: 'Sign In',
  content2: 'Already have an account? Sign in here.',
  heading12: 'Damages and issues',
  content9: 'Share your feedback with us to help improve our services.',
  content3: 'Choose how you want to sign in: email, Facebook, or Google.',
  heading13: 'Refunds',
  content7: 'Your information is protected with secure authentication methods.',
  content13:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  content1: 'Sign up for a new account to access exclusive features.',
  content5: 'Review our Privacy Policy to understand how your data is handled.',
  heading5: 'Privacy Policy',
  heading4: 'Terms of Use',
  heading11: 'General',
  content10: 'Reach out to us if you have any questions or need assistance.',
  heading7: 'Secure Authentication',
  heading9: 'Feedback',
  heading1: 'Create an Account',
  content11:
    'Lorem ipsum dolor sit amet. Nam nihil facilis sit consequuntur internos qui minima rerum ut molestias laudantium aut iusto deserunt. Aut voluptatibus excepturi qui officia laudantium est repellendus tempore hic sunt debitis.  Ut galisum tempore in enim fugit eum pariatur possimus est tenetur nemo et sint sint et dolores Quis. Aut illum perspiciatis rem architecto culpa et fuga aliquid. Est omnis praesentium ut nisi internos rem quod totam et similique quis. Est tempore cumque aut recusandae labore qui error molestiae et possimus quia!  Eum Quis asperiores non nihil tempora qui quia voluptatem aut aspernatur aspernatur aut asperiores labore et sapiente quaerat qui suscipit quia. Ea nesciunt iste aut temporibus culpa sit dignissimos quaerat eum architecto voluptatum et nemo velit At harum harum.',
  content12:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  heading8: 'Stay Connected',
}

ContentList4.propTypes = {
  heading10: PropTypes.string,
  heading6: PropTypes.string,
  heading3: PropTypes.string,
  content6: PropTypes.string,
  content4: PropTypes.string,
  heading2: PropTypes.string,
  content2: PropTypes.string,
  heading12: PropTypes.string,
  content9: PropTypes.string,
  content3: PropTypes.string,
  heading13: PropTypes.string,
  content7: PropTypes.string,
  content13: PropTypes.string,
  content1: PropTypes.string,
  content5: PropTypes.string,
  heading5: PropTypes.string,
  heading4: PropTypes.string,
  heading11: PropTypes.string,
  content10: PropTypes.string,
  heading7: PropTypes.string,
  heading9: PropTypes.string,
  heading1: PropTypes.string,
  content11: PropTypes.string,
  content12: PropTypes.string,
  heading8: PropTypes.string,
}

export default ContentList4
