import axios from "axios";

const tmdbBearerToken = process.env.REACT_APP_TMDB_BEARER_TOKEN;

export const moviesApis = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: tmdbBearerToken ? `Bearer ${tmdbBearerToken}` : undefined
  }
})