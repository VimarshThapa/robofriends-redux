import React from 'react';

function SearchBox({ placeholder, handleChange }) {
    return (
        <input className="pa3 ba b--green bg-lightest-blue tc" type="search" placeholder={placeholder} onChange={handleChange} />
    )
}

export default SearchBox
