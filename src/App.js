import React, { useState, useEffect, useRef } from 'react';
import MovieList from './componentMovie/ListeMovie';
import Filter from './componentMovie/Filter'

const initialMovies = [
  { title: 'Inception', description: 'A mind-bending thriller', posterURL: 'inception.jpg', rating: 9 },
  { title: 'Interstellar', description: 'A journey through space', posterURL: 'interstellar.jpg', rating: 8 },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filter, setFilter] = useState({ title: '', rating: '' });
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  useEffect(() => {
    const filterMovies = () => {
      const filtered = movies.filter(movie => 
        movie.title.toLowerCase().includes(filter.title.toLowerCase()) && 
        movie.rating >= (filter.rating || 0)
      );
      setFilteredMovies(filtered);
    };
    filterMovies();
  }, [filter, movies]);

  const titleRef = useRef();
  const descriptionRef = useRef();
  const posterURLRef = useRef();
  const ratingRef = useRef();

  const addMovie = () => {
    const newMovie = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      posterURL: posterURLRef.current.value,
      rating: parseInt(ratingRef.current.value),
    };
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <MovieList movies={filteredMovies} />
      <div>
        <input ref={titleRef} placeholder="Title" />
        <input ref={descriptionRef} placeholder="Description" />
        <input ref={posterURLRef} placeholder="Poster URL" />
        <input ref={ratingRef} type="number" placeholder="Rating" />
        <button onClick={addMovie}>Add Movie</button>
      </div>
    </div>
  );
}

export default App;
