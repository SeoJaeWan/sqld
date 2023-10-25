import { useState } from "react";
import useExternalSelection from "./useExternalSelection";
import useToggle from "./useToggle";

const useExternalToggle = ({ className, max, exception }) => {
  const { toggle, setToggle } = useToggle();
  const [cnt, setCnt] = useState(0);

  const handleOutsideClose = (e) => {
    const target = document.querySelector(className);

    if (target && toggle) {
      if (cnt === max) {
        if (e.target.classList.contains(exception)) return;
        if (!target.contains(e.target) && toggle) {
          setCnt(0);
          setToggle(false);
        }
      } else {
        setCnt((prev) => prev + 1);
      }
    }
  };

  useExternalSelection(handleOutsideClose);

  return [toggle, setToggle];
};

export default useExternalToggle;
