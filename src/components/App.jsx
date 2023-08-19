import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './sharedlayout/SharedLayout';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('components/cast/Cast'));
const Reviews = lazy(() => import('components/reviews/Reviews'));
const MoviesList = lazy(() => import('components/movieslist/MoviesList'));
const MovieSearchForm = lazy(() =>
  import('components/moviessearchform/MovieSearchForm')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />}>
          <Route index element={<MovieSearchForm />} />
          <Route index element={<MoviesList />} />
        </Route>
        <Route path="/movies" element={<Movies />}>
          <Route index element={<MoviesList />} />
        </Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
