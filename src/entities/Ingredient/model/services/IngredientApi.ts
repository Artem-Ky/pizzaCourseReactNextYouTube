import { axiosInstance } from "@/shared/config/axios/instance";
import { ApiRoutes } from "@/shared/constants";

import { Ingredient } from "@prisma/client";

export const getAllIngredients = async (): Promise<Ingredient[]> => {
  return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data;
};