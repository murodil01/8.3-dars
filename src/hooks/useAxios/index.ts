import axios from "axios";
import Cookies from "js-cookie";

interface AxiosType {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  params?: Record<string, any>;
  body?: any;
}

export const useAxios = () => {
  const token = Cookies.get("token");

  const request = async ({
    url,
    method = "GET",
    body,
    params,
    headers = {},
  }: AxiosType) => {
    try {
      const response = await axios({
        url: `${import.meta.env.VITE_BASE_URL}/${url}`,
        method,
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
          ...headers,
        },
        data: body,
        params: {
          access_token: "64eecf3b54abde61153d1fd3", 
          ...params,
        },
      });

      return response.data;
    } catch (error: any) {
      console.error("Axios request error:", error);
      throw error?.response?.data || error;
    }
  };

  return request;
};
