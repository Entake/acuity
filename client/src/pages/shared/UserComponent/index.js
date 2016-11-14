// Libraries
import React, { PropTypes } from 'react'

// Local styling
import './index.css'

const User = (props) => {
  const userName = props.userName
  const quote = props.quote
  const userProfile = props.userProfile

  return (
    <section className='user'>
      <a href={userProfile}>
        <div className='avatar'>
            <img src='../assets/aksel.jpg' />
        </div>
        <div className='username'>
            <h4>{userName}</h4><br />
            <h6>{quote}</h6>
        </div>
      </a>
    </section>
  )
}

User.propTypes = {
  userName: PropTypes.string.isRequired,
  userProfile: PropTypes.string,
  quote: PropTypes.string,
}

export default User
