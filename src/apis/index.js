import axios from "axios";
import Router from "next/router";
import { createHTTPHeader } from "./util";
import { paramsObjectToQueryString } from "../utils/paramsToQueryString";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../utils/constants";
import { message } from "antd";
import Cookies from "js-cookie";

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.code === "ERR_NETWORK") {
      message.error("Network Error, please try again");
    }
    if (error.response.status === 401) {
      Cookies.remove("token");
      message.error("Session Expired. Please login to continue");
      Router.push("/");
    }
    return Promise.reject(error);
  }
);

const api = {
  post: (url, body, headers = createHTTPHeader()) => {
    return axios.post(url, body, { headers }).then((response) => response.data);
  },
  put: (url, body, headers) => {
    return axios.put(url, body, { headers }).then((response) => response.data);
  },
  patch: (url, body, headers) => {
    return axios
      .patch(url, body, { headers })
      .then((response) => response.data);
  },
  get: (url, headers) => {
    return axios.get(url, { headers }).then((response) => response.data);
  },
  delete: (url, headers, body) => {
    return axios
      .delete(url, { headers, data: body })
      .then((response) => response.data);
  },
};

<ToastContainer />;

export default api;
