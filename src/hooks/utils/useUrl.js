import QueryString from "qs";
import {
  createSearchParams,
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

const getPath = (pathname) => {
  const path = pathname.split("/");
  path.shift();

  return path;
};

const getQuery = (search) => {
  return QueryString.parse(search, { ignoreQueryPrefix: true });
};

const useUrl = () => {
  const { pathname, search, hash } = useLocation();
  const searchQuires = useLoaderData();
  const navigate = useNavigate();
  const params = useParams();

  const changeQuery = (query, deleteQuery = []) => {
    const params = {};

    Object.keys(searchQuires).forEach((key) => {
      params[key] = searchQuires[key];
    });

    deleteQuery.forEach((key) => {
      delete params[key];
    });

    navigate({
      search: `?${createSearchParams({
        ...params,
        ...query,
      })}`,
    });
  };

  const changeLink = (link) => {
    navigate(link);
  };

  const cameFromSameDomain = (disabled = []) => {
    const prevUrl = sessionStorage.getItem("prevUrl");

    if (disabled.includes(prevUrl)) {
      return false;
    }

    return !!prevUrl;
  };

  return {
    pathname,
    search,
    hash,
    path: getPath(pathname),
    params,
    query: getQuery(search),
    prevUrl: sessionStorage.getItem("prevUrl"),
    changeQuery,
    changeLink,
    cameFromSameDomain,
  };
};

export default useUrl;
