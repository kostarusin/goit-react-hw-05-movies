const MovieSearchForm = ({ onSearchSubmit, selectedMovies, onQueryChange }) => {
  return (
    <div style={{ margin: '20px 0' }}>
      <form onSubmit={onSearchSubmit}>
        <input type="text" value={selectedMovies} onChange={onQueryChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default MovieSearchForm;
