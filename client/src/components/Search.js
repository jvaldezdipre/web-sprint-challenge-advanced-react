import React from 'react';

const Search = ({ searchChangeHandler }) => {
  return (
    <form>
      <input
        type='text'
        onChange={searchChangeHandler}
        style={{ marginTop: 30 }}
      />
    </form>
  );
};

export default Search;
