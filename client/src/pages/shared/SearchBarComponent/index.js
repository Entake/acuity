// Libraries
import React, { PropTypes } from 'react'

// Local styling
import './index.css'

const SearchBar = (props) => {
  const searchValue = props.searchValue

  return (
    <div className='small-12 medium-12 large-12 columns'>
      <input className='searchbar' name='Searchbar' placeholder='Search auto tagged images' value={searchValue} disabled />
    </div>
  )
}

SearchBar.propTypes = {
  searchValue: PropTypes.string
}

export default SearchBar
