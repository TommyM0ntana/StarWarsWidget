import React from 'react'
import './searchbar.css'

const SearchBar = (props) => {
  return (
    <div className='box'>
      <input className="searchbar" placeholder='Search card name' type='text' onChange={props.handleInput} />
    </div>
  )
}

export default SearchBar
