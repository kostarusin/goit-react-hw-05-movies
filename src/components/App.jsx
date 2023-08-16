import { Route, Routes, NavLink } from 'react-router-dom';
// import { SharedLayout } from './SharedLayout';
import Home from 'pages/home/Home';
import Movies from 'pages/movies/Movies';
import MovieDetails from 'pages/moviedetails/MovieDetails';
import NotFound from 'pages/notfound/NotFound';

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
