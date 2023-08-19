const MovieSearchForm = ({ onSearchSubmit, query, onQueryChange }) => {
  return (
    <form onSubmit={onSearchSubmit}>
      <input type="text" value={query} onChange={onQueryChange} />
      <button type="submit">Search</button>
    </form>
  );
};
export default MovieSearchForm;
