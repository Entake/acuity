// Libraries
import React, { PropTypes } from 'react'

// Local styling
import './index.css'

const SearchBar = (props) => {
  const searchValue = props.searchValue

  return (
    <div className='small-12 medium-12 large-12 columns'>
      <input input='text' className='searchbar' name='Searchbar' placeholder='Search auto tagged images' value={searchValue} />
    </div>
  )
}

SearchBar.propTypes = {
  searchValue: PropTypes.string
}

export default SearchBar
