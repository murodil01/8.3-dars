import { useMutation, useQuery } from "@tanstack/react-query";
import { useAxios } from "../useAxios";
import Cookies from "js-cookie";
import type { AuthType } from "../../@types";
import { useDispatch } from "react-redux";
import { setOpenAuthoritastionModalVisiblity } from "../../redux/modal-slice";
import { notificationApi } from "../../generic/notificationApi";
import { signInWithGoogle } from "../../config";
import { getCoupon } from "../../redux/shop-slice";

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

export const useRegisterWithGoogleMutation = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const notify = notificationApi();

  return useMutation({
    mutationKey: ["register-google"],
    mutationFn: async () => {
      const response = await signInWithGoogle();

      return axios({
        url: "user/sign-up/google",
        method: "POST",
        body: { email: response.user.email },
      });
    },

    onSuccess: (data: { token: string; user: AuthType }) => {
      Cookies.set("token", data.token);
      Cookies.set("user", JSON.stringify(data.user));
      notify("login_success");
      dispatch(setOpenAuthoritastionModalVisiblity());
      console.log(data);
    },
    onError: (error: { status: number }) => {
      console.log(error);

      if (error.status === 406) {
        notify(error.status);
      }
    },
  });
};

export const useLoginWithGoogleMutation = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const notify = notificationApi();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: async () => {
      const response = await signInWithGoogle();
      return axios({
        url: "user/sign-in/google",
        method: "POST",
        body: { email: response.user.email },
      });
    },

    onSuccess: (data: { token: string; user: AuthType }) => {
      Cookies.set("token", data.token);
      Cookies.set("user", JSON.stringify(data.user));
      notify("login_success");
      dispatch(setOpenAuthoritastionModalVisiblity());
      console.log(data);
    },
    onError: () => {
      notify("login_wrong");
    },
  });
};

export const useGetCoupon = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  return useMutation({
    mutationKey: ["coupon"],
    mutationFn: (coupon_code: string) =>
      axios({
        url: "faetures/coupon",
        params: { coupon_code },
      }),
    onSuccess(data) {
      dispatch(getCoupon(data.discount_for));
    },
  });
};

interface BillingAddress {
  country: string;
  town: string;
  street_address: string;
  state: string;
  zip: string;
  extra_address: string;
}

export interface UserProfile {
  _id: string;
  name: string;
  surname: string;
  email: string;
  phone_number: string;
  username: string;
  profile_photo: string;
  billing_address: BillingAddress;
  wishlist: { route_path: string; flower_id: string }[];
  user_type: string;
  created_at: string;
}

export const useGetProfile = () => {
  const axios = useAxios();
  const user = Cookies.get("user");

  const userId = user ? JSON.parse(user)._id : null;

  return useQuery<UserProfile>({
    queryKey: ["user", userId],
    queryFn: () =>
      axios({
        url: `user/by_id/${userId}`,
        method: "GET",
      }),
    enabled: !!userId,
  });
};

