import { useEffect } from "react";

const useExternalSelection = (callback) => {
  useEffect(() => {
    document.addEventListener("click", callback);

    return () => document.removeEventListener("click", callback);
  }, [callback]);
};

export default useExternalSelection;
