const MovieDetailsList = ({ movie }) => {
  const { overview, poster_path, original_title, vote_average, genres } = movie;
  const defaultImg = `https://i.pinimg.com/564x/e4/71/1e/e4711e46bea5264eaab661d643285ff6.jpg`;
  return (
    <>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : defaultImg
        }
        width="500"
        alt={original_title}
      />
      {!poster_path && <p>Sorry, we didn't find a poster.</p>}
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
