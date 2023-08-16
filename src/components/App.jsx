import { Route, Routes } from 'react-router-dom';
// import { SharedLayout } from './SharedLayout';
import Home from 'pages/home/Home';
import Movies from 'pages/movies/Movies';
import MovieDetails from 'pages/moviedetails/MovieDetails';
import NotFound from 'pages/notfound/NotFound';
import Cast from 'components/cast/Cast';
import Reviews from 'components/reviews/Reviews';
import { Container, Header, Link } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
