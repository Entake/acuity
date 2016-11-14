// Libraries
import React, { PropTypes } from 'react'

// Local styling
import './index.css'

const Footer = (props) => {

  return (
    <section className='footer'>
      <div className='footerContainer'>
        <div className='row'>
          <div className='small-12 medium-6 large-3 columns'>
            <ul className='footer-ul'>
              <li className='footer-li-header'>
                <a href='#'>Destinations</a>
              </li>
              <li className='footer-li'>
                <a href='#'>Nepal</a>
              </li>
              <li className='footer-li'>
                <a href='#'>Vietnam</a>
              </li>
              <li className='footer-li'>
                <a href='#'>Sri Lanka</a>
              </li>
              <li className='footer-li'>
                <a href='#'>Thailand</a>
              </li>
              <li className='footer-li'>
                <a href='#'>Indien</a>
              </li>
            </ul>
          </div>
          <div className='small-12 medium-6 large-3 columns'>
            <ul className='footer-ul'>
              <li className='footer-li-header'>
                <a href='#'>Projekter</a>
              </li>
              <li className='footer-li'>
                <a href='#'>Skildpadder</a>
              </li>
              <li className='footer-li'>
                <a href='#'>Women Empowerenment</a>
              </li>
              <li className='footer-li'>
                <a href='#'>Elefanter</a>
              </li>
              <li className='footer-li'>
                <a href='#'>Fattigdom</a>
              </li>
              <li className='footer-li'>
                <a href='#'>Uddannelse</a>
              </li>
            </ul>
          </div>
          <div className='small-12 medium-6 large-3 columns'>
            <ul className='footer-ul'>
              <li className='footer-li-header'>
                <a href='#'>Om Os</a>
              </li>
              <li className='footer-li'>
                <a href='#'>Hvorfor Idex</a>
              </li>
              <li className='footer-li'>
                <a href='#'>Vores Værdier</a>
              </li>
              <li className='footer-li'>
                <a href='#'>Vores Mål</a>
              </li>
              <li className='footer-li'>
                <a href='#'>Vores Netværk</a>
              </li>
              <li className='footer-li'>
                <a href='#'>Vores Hold</a>
              </li>
            </ul>
          </div>
          <div className='small-12 medium-6 large-3 columns'>
            <ul className='footer-ul'>
              <li className='footer-li-header'>
                <a href='#'>Sociale Medier</a>
              </li>
              <li className='footer-li'>
                <a href='#'>Faceboom</a>
              </li>
              <li className='footer-li'>
                <a href='#'>Instagram</a>
              </li>
              <li className='footer-li'>
                <a href='#'>Twitter</a>
              </li>
              <li className='footer-li'>
                <a href='#'>YouTube</a>
              </li>
              <li className='footer-li'>
                <a href='#'>Google +</a>
              </li>
            </ul>
          </div>
          <div className='small-12 medium-12 large-12'>
            <div className='copyright'>All rights reserved 2016</div>
          </div>
        </div>
      </div>
    </section>

  )
}

Footer.propTypes = {

}

export default Footer
