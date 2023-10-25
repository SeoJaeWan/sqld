import axios from "axios";

export const SERVER_URL =
  process.env.NODE_ENV === "development"
    ? ""
    : process.env.REACT_APP_SERVER_URL;
export const API_VERSION = process.env.REACT_APP_API_VERSION;

const instance = axios.create({
  baseURL: SERVER_URL + "/api/" + API_VERSION,
  withCredentials: true,
});

const fetchAPI = async (ins) => await ins;

export const GET = async (...args) => {
  const { data } = await fetchAPI(instance.get(...args));

  return data;
};
export const POST = async (...args) => {
  const { data } = await fetchAPI(instance.post(...args));

  return data;
};
export const PUT = async (...args) => {
  const { data } = await fetchAPI(instance.put(...args));

  return data;
};

export const DELETE = async (url, body) => {
  const { data } = await fetchAPI(instance.delete(url, { data: body }));

  return data;
};

export const PATCH = async (...args) => {
  const { data } = await fetchAPI(instance.patch(...args));

  return data;
};

export default instance;
