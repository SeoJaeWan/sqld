import { useState } from "react";

export default function useToggle() {
  const [toggle, setToggle] = useState(false);

  const toggleOn = () => {
    setToggle(true);
  };

  const toggleOff = () => {
    setToggle(false);
  };

  const handleToggle = () => {
    setToggle((prev) => (prev = !prev));
  };

  return { toggle, handleToggle, toggleOn, toggleOff, setToggle };
}
