const MovieDetailsList = ({ movie }) => {
  const { overview, poster_path, original_title, vote_average, genres } = movie;

  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
      <h2>{original_title}</h2>
      <p>User score: {Math.round(Number(vote_average) * 10)} %</p>
      <p>{overview}</p>
      <ul>
        Genres
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default MovieDetailsList;
