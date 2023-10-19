import axios from "axios";

const API_URL = `https://api.staging.myautochek.com/v1`;
const API_URL_PROD = `https://api-prod.autochek.africa/v1`;

export const getPopularBrands = async () => {
  const response = await axios.get(`${API_URL}/inventory/make?popular=true`);

  return response.data;
};

export const getAllCars = async (page: number) => {
  const response = await axios.get(
    `${API_URL_PROD}/inventory/car/search?currentPage=${page}`
  );

  return response.data;
};

export const getCarDetails = async (carId: string) => {
  const response = await axios.get(`${API_URL_PROD}/inventory/car/${carId}`);

  return response.data;
};

export const getCarMedia = async (carId: string) => {
  const response = await axios.get(
    `${API_URL_PROD}/inventory/car_media?carId=${carId}`
  );

  return response.data;
};
