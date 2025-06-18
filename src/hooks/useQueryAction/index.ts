import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../useAxios";
import Cookies from "js-cookie";
import type { AuthType } from "../../@types";
import { useDispatch } from "react-redux";
import { setOpenAuthoritastionModalVisiblity } from "../../redux/modal-slice";
import { notificationApi } from "../../generic/notificationApi";

export const useLoginMutation = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const notify = notificationApi();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: { email: string; password: string }) =>
      axios({
        url: "user/sign-in",
        method: "POST",
        body: data,
      }),

    onSuccess: (data: { token: string; user: AuthType }) => {
      Cookies.set("token", data.token);
      Cookies.set("user", JSON.stringify(data.user));
      notify("login_success");
      dispatch(setOpenAuthoritastionModalVisiblity());
    },
    onError: () => {
      notify("login_wrong");
    },
  });
};


export const useRegisterMutation = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const notify = notificationApi();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: (data: object) =>
      axios({
        url: "user/sign-up",
        method: "POST",
        body: data,
      }),

    onSuccess: (data: { token: string; user: AuthType }) => {
      Cookies.set("token", data.token);
      Cookies.set("user", JSON.stringify(data.user));
      notify("login_success");
      dispatch(setOpenAuthoritastionModalVisiblity());
    },
    onError: (error: { status: number }) => {
      if (error.status === 406) {
        notify(error.status);
      }
    },
  });
};
