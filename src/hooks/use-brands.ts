import { getPopularBrands } from "@/service/api";
import { useQuery } from "@tanstack/react-query";

export const useBrands = () => {
  const brandsQuery = useQuery({
    queryKey: ["brands"],
    queryFn: getPopularBrands,
  });

  return brandsQuery;
};
