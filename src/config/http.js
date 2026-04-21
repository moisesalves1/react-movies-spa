import axios from "axios";

export const moviesApis = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDI1ZjBmNzE3OWEyNjAxNzYzNzdiY2VhYjlkM2M3ZiIsIm5iZiI6MTY2MjE0MDU5Ny4wOTUsInN1YiI6IjYzMTI0MGI1NTY0ZWM3MDA5MTVjZDk5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ll3NvPYdGWGlxb7C0gU9ha4NSQLrsNZJzJSsztTACK8"
  }
})