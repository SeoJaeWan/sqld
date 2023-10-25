import Loading from "component/atoms/loading";
import Pagination from "../pagination";
import { useRef } from "react";
import { useObserver } from "hook/util/useObserver";
import Box from "component/atoms/box";

const List = (props) => {
  const {
    api,
    preFetch,
    params,
    isInfinite,
    //
    children: renderChildren,
  } = props;
  const bottom = useRef();
  const { list, maxPage, isLoading, isSuccess, isError, fetchNextPage } =
    api(params);

  if (preFetch) preFetch(params);

  const onIntersect = ([entry]) => {
    if (entry.isIntersecting) {
      fetchNextPage();
    }
  };

  useObserver({ target: bottom, onIntersect, isActive: isInfinite });

  return (
    <>
      {isLoading && <Loading />}
      {isSuccess && (
        <>
          {renderChildren(list)}
          {!isInfinite && !isNaN(maxPage) && maxPage !== 0 && (
            <Pagination maxPage={maxPage} />
          )}
        </>
      )}
      <Box ref={bottom} />
    </>
  );
};

export default List;
