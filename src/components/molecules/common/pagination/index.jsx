import Box from "component/atoms/box";
import Button from "component/atoms/button";
import Link from "component/atoms/link";
import usePagination from "hook/util/usePagination";
import useUrl from "hook/util/useUrl";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Pagination = (props) => {
  const { maxPage } = props;
  const { query: queries } = useUrl();
  const router = useNavigate();
  const { page: currentPage, pages } = usePagination({
    maxPage: maxPage ?? 0,
    pagePerBlock: 5,
  });

  const pageBlock = pages.find((p) => p.includes(currentPage));

  const getQuery = (page, value) => {
    const query = {
      ...queries,
      page: page + value,
    };

    return new URLSearchParams(query).toString();
  };

  const nextPage = () => {
    if (currentPage === maxPage) return;

    router({ search: getQuery(currentPage, 1), hash: "list" });
  };

  const beforePage = () => {
    if (currentPage === 1) return;

    router({ search: getQuery(currentPage, -1), hash: "list" });
  };

  if (!pageBlock) return null;

  return (
    <Box
      display={{
        display: "flex",
        justify: "center",
      }}
      size={{
        width: "100%",
      }}
      margin={{
        top: "50px",
      }}
    >
      <Button
        size={{
          width: "28px",
          height: "28px",
        }}
        border={{
          all: "1px",
        }}
        background={{
          color: "white",
        }}
        onClick={beforePage}
      >
        <FiChevronLeft
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Button>

      <Box
        display={{
          display: "flex",
          align: "center",
          gap: "11px",
        }}
        margin={{
          all: "0 20px",
        }}
      >
        {pageBlock.map((page) => {
          const isActive = page === currentPage;

          return (
            <Link
              key={page}
              link={`?${getQuery(page, 0)}#list`}
              display={{
                display: "flex",
                align: "center",
                justify: "center",
              }}
              size={{
                width: isActive ? "28px" : "auto",
                height: "28px",
              }}
              border={{
                all: isActive ? "1px" : "0",
                radius: "50%",
              }}
              typo={{
                size: "14px",
                weight: "400",
                color: "black",
                lineHeight: "normal",
              }}
              background={{
                color: isActive ? "pink02" : "white",
              }}
            >
              {page}
            </Link>
          );
        })}
      </Box>

      <Button
        size={{
          width: "28px",
          height: "28px",
        }}
        border={{
          all: "1px",
        }}
        background={{
          color: "white",
        }}
        onClick={nextPage}
      >
        <FiChevronRight
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Button>
    </Box>
  );
};

export default Pagination;
