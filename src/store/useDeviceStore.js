import { create } from "zustand";
import theme from "style/theme";

const { responsive } = theme;

const checkDevice = (size) => {
  let device = "pc";
  let isUpdate = false;
  const response = {};

  for (let key in responsive) {
    if (!isUpdate && size <= responsive[key]) {
      device = key;
      isUpdate = true;
      response[key] = true;
    } else {
      response[key] = false;
    }
  }

  if (response.longMobile) {
    response.mobile = true;
  }

  return { device, ...response };
};

export const useDeviceStore = create((set) => ({
  device: "pc",

  setDevice: (size) => set({ ...checkDevice(size) }),
}));

export default useDeviceStore;
