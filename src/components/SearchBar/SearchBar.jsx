import React from 'react'
import "./styles.css"

const SearchBar = ({value, changeInput}) => {
  return (
    <div className='Search-Bar'>
        <h3>Search Properties to rent</h3>
        <input type="text" placeholder='Search Bar' value={value} onChange={changeInput} />
    </div>
  )
}

export default SearchBar