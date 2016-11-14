// Libraries
import React, { } from 'react'

// Local styling
import './index.css'

const Footer = (props) => {
  return (
    <section className='footer'>
      <div className='footerContainer'>
        <div className='row'>
          <div className='small-12 medium-12 large-12'>
            <div className='copyright'>All images remain property of their original owners.
              <a href='https://github.com/Entake/acuity/blob/master/LICENSE'> Licensed under MIT
              </a>
            </div>
            <a href='https://github.com/Entake/acuity'>
              <div className='githubLogo'>
                <img src='assets/githubSmall.png' />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

  )
}

Footer.propTypes = {

}

export default Footer
