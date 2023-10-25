import React from "react";
import { CgSpinner } from "react-icons/cg";
import { LoadingContainer } from "./loading.style";

const Loading = () => {
  return (
    <LoadingContainer aria-label="Loading">
      <CgSpinner />
    </LoadingContainer>
  );
};

export default Loading;
