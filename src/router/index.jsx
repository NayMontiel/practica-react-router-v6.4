import { createBrowserRouter } from "react-router-dom";
import { About, Blog, Error404, Home, Post, loaderBlog, loaderPost } from "../pages";

import { LayoutPublic } from "../layout/LayoutPublic";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: loaderBlog,
      },
      {
        path: "/blog/:id",
        element: <Post />,
        loader: loaderPost,
      },
    ],
  },
]);
