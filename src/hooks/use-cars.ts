import { getAllCars, getCarDetails, getCarMedia } from "@/service/api";
import { useQuery } from "@tanstack/react-query";

export const useCars = (page: number) => {
  const carsQuery: any = useQuery({
    queryKey: ["cars", { page }],
    queryFn: () => getAllCars(page),
    /*@ts-ignore*/
    keepPreviousData: true,
  });

  return carsQuery;
};

export const useCarDetails = (params: { carId: string }) => {
  const { carId } = params;
  const carQuery = useQuery({
    queryKey: ["car", carId],
    queryFn: () => getCarDetails(carId),
  });

  return carQuery;
};

export const useCarMedia = (params: { carId: string }) => {
  const { carId } = params;
  const carMediaQuery = useQuery({
    queryKey: ["carMedia", carId],
    queryFn: () => getCarMedia(carId),
  });

  return carMediaQuery;
};
