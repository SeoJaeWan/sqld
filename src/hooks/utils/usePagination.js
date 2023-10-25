import { useEffect, useMemo, useState } from "react";
import useUrl from "./useUrl";

const usePagination = ({ maxPage, pagePerBlock }) => {
  const { query: { page: currPage = 1 } = {} } = useUrl();
  const [pages, setPages] = useState([]);
  const page = useMemo(() => parseInt(currPage), [currPage]);

  const countingIndex = (idx) => {
    return pagePerBlock * (currPage - 1) + idx + 1;
  };

  useEffect(() => {
    const pages = [];

    for (let i = 1; i <= maxPage; i += pagePerBlock) {
      const pageBlock = [];

      for (let j = i; j < i + pagePerBlock; j++) {
        if (j > maxPage) break;
        pageBlock.push(j);
      }

      pages.push(pageBlock);
    }

    setPages(pages);
  }, [pagePerBlock, maxPage]);

  return { page, pages, countingIndex };
};

export default usePagination;
