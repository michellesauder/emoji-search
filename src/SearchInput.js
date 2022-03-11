import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SearchInput.css";

const SearchInput = ({ textChange }) => {

 const handleChange = event => textChange(event);

  return (
      <div className="component-search-input">
        <div>
          <input onChange={handleChange} />
        </div>
      </div>
  )
}

export default SearchInput
