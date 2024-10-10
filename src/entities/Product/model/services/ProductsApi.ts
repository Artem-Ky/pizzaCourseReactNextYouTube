import { axiosInstance } from "@/shared/config/axios/instance";
import { ApiRoutes } from "@/shared/constants";
import { Product } from "@prisma/client";
export const search = async (query: string): Promise<Product[]> => {
  return (
    await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
      params: { query },
    })
  ).data;
};
