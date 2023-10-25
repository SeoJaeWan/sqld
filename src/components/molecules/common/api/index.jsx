import Loading from "component/atoms/loading";

const Api = (props) => {
  const {
    api,
    params,
    //
    children: renderChildren,
  } = props;

  const { data, isLoading, isSuccess, isError } = api(params);

  return (
    <>
      {isLoading && <Loading />}
      {isSuccess && <>{renderChildren(data)}</>}
    </>
  );
};

export default Api;
