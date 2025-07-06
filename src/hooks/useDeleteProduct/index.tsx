import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const token = Cookies.get("token");

  return useMutation({
    mutationFn: async (productId: string) => {
      return axios.delete(
        `${import.meta.env.VITE_BASE_URL}/api/user/products/${productId}?access_token=${token}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-products"] });
    },
  });
};
