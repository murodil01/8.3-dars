import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../useAxios";
import Cookies from "js-cookie";
import { message } from "antd";
import type { AuthType } from "../../@types";
import { useDispatch } from "react-redux";
import { setOpenAuthoritastionModalVisiblity } from "../../redux/modal-slice";

export const useLoginMutation = () => {
  const axios = useAxios();
  const dispatch = useDispatch();

  return useMutation({
    mutationKey: ["login"],

    mutationFn: (data: { email: string; password: string }) =>
      axios({
        url: "user-sign-in",
        method: "POST",
        body: data,
      }),

    onSuccess: (data: { token: string; user: AuthType }) => {
      if (data?.token) {
        Cookies.set("token", data.token);
        Cookies.set("user", JSON.stringify(data.user));
        dispatch(setOpenAuthoritastionModalVisiblity());
        message.success("Login successful!");
      } else {
        message.error("Login response error: token not found");
      }

      console.log("Login Success:", data);
    },

    onError: (error: any) => {
      console.error("Login failed:", error);
      message.error(error?.message || "Login failed");
    },
  });
};
