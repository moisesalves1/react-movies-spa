import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./views/RootsLayout";
import { Home } from "./views/Home";
import { Movies } from "./views/Movies/Movies";
import { MovieDetail } from "./views/MovieDetail/MovieDetail";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/movies",
        element: <Movies />
      },
      {
        path: "/movies/:id",
        element: <MovieDetail />
      }
    ]
  }
])