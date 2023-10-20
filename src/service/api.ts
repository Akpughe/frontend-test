import { apiProdClient, apiStagingClient } from "@/lib/api-client";

export const getPopularBrands = async () => {
  const response = await apiStagingClient.get(`/inventory/make?popular=true`);

  return response.data;
};

export const getAllCars = async (page: number) => {
  const response = await apiProdClient.get(
    `/inventory/car/search?currentPage=${page}`
  );

  return response.data;
};

export const getCarDetails = async (carId: string) => {
  const response = await apiProdClient.get(`/inventory/car/${carId}`);
  return response;
};

export const getCarMedia = async (carId: string) => {
  const response = await apiProdClient.get(
    `/inventory/car_media?carId=${carId}`
  );

  return response.data;
};
