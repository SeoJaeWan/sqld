import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "pages/home";

const getQueries = (list, url) => {
  const queries = {};
  for (const key of list) {
    const value = url.searchParams.get(key);
    if (value) {
      queries[key] = value;
    }
  }
  return queries;
};

const createRouter = () => {
  return createBrowserRouter([
    {
      path: "",
      element: (
        <>
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
          loader: ({ request }) => {
            const url = new URL(request.url);
            return getQueries(
              ["filter", "keyword", "category", "mood", "status", "page"],
              url
            );
          },
        },
      ],
    },
  ]);
};

export const Router = createRouter();
