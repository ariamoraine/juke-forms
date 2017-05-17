import React from 'react';

const FilterInput = (props) => {
  console.log(props)
  return (
    <form className="form-group" style={{marginTop: '20px'}}>
      <input
        className="form-control"
        placeholder="Enter artist name"
        onChange={props.handleInput}
      />
    </form>
  );
};

export default FilterInput;
