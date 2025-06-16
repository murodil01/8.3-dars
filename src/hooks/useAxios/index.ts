import axios from "axios";
import Cookies from "js-cookie";

interface AxiosType {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: object;
  params?: object;
  body?: object;
}

export const useAxios = () => {
  const request = ({
    url,
    method = "GET",
    body,
    params,
    headers,
  }: AxiosType) => {
    return axios({
      url: `${import.meta.env.VITE_BASE_URL}/${url}`,
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
        ...headers,
      },
      data: body,
      params: {
        access_token: "64eecf3b54abde61153d1fd3",
        ...params,
      },
    }).then((data) => data.data.data);
  };
  return request;
};
