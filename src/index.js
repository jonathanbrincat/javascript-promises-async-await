import { fetchWithTimeout } from "./services";

// import * as movies from "./data/movies.json";
const movies = require("./data/movies.json");

export function fetchMovies() {
  const resolveFunction = () => movies;

  return fetchWithTimeout(1000).then(resolveFunction);
}

const moviePromise = fetchMovies();
moviePromise.then((results) => {
  console.log(results);
});
