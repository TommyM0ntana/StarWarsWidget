import React from 'react'
import './searchbar.css'

const SearchBar = (props) => {
  return (
    <div>
      <input className="search" placeholder='Search card name' type='text' onChange={props.handleInput} />
    </div>
  )
}

export default SearchBar
