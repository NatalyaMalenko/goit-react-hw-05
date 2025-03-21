import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzgyMzc2MzA5NWRjMTg0ODE0OWMwNGQxYmJhZTc1NyIsIm5iZiI6MTc0MjQ3MDYxNy40MDUsInN1YiI6IjY3ZGJmZGQ5OWYzNThmNGExMzdmYTg3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J5pkU_wpOfP-xBX9PYBx6rir2vM531B648JW0pOhCtU",
  },
};

export const fetchMovies = async () => {
  const url =
    " https://api.themoviedb.org/3/trending/movie/day?include_adult=false&lang=en-US&page=1";

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const fetchDetails = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?include_adult=false&language=en-US&page=1`;

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchCast = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchReviews = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearch = async (searchQuery) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`;

  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};
