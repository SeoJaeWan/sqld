import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useDeviceStore from "store/useDeviceStore";

const Observer = () => {
  const { pathname } = useLocation();
  const { setDevice } = useDeviceStore();

  const resize = () => {
    const { innerWidth } = window;

    setDevice(innerWidth);
  };

  useEffect(() => {
    sessionStorage.removeItem("prevUrl");

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    return () => {
      sessionStorage.setItem("prevUrl", pathname);
    };
  }, [pathname]);
  return <></>;
};

export default Observer;
