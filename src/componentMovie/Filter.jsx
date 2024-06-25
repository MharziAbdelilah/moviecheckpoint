import React from 'react';

function Filter({ filter, setFilter }) {
  const handleTitleChange = (e) => {
    setFilter({ ...filter, title: e.target.value });
  };

  const handleRatingChange = (e) => {
    setFilter({ ...filter, rating: e.target.value });
  };

  return (
    <div>
      <input type="text" placeholder="Filter by title" value={filter.title} onChange={handleTitleChange} />
      <input type="number" placeholder="Filter by rating" value={filter.rating} onChange={handleRatingChange} />
    </div>
  );
}

export default Filter;
