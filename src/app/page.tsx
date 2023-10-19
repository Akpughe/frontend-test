"use client";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import { getPopularBrands, getAllCars, getCarDetails } from "@/service/api";
import { useState } from "react";
import { formatNumber } from "../../helpers";
import { useQuery, useQueryClient } from "@tanstack/react-query";

interface Car {
  id: string;
  title: string;
  year: string;
  imageUrl: string;
  marketplacePrice: number;
  marketplaceOldPrice: number;
}

export default function Home() {
  const brandsQuery = useQuery({
    queryKey: ["brands"],
    queryFn: getPopularBrands,
  });

  const carsQuery = useQuery({
    queryKey: ["cars"],
    queryFn: getAllCars,
  });

  if (brandsQuery.isLoading) return <h1>Loading...</h1>;
  if (brandsQuery.isError)
    return <pre>{JSON.stringify(brandsQuery.error)}</pre>;

  if (carsQuery.isLoading) return <h1>Loading...</h1>;
  if (carsQuery.isError) return <pre>{JSON.stringify(carsQuery.error)}</pre>;

  const brandList = brandsQuery.data?.makeList;

  const carList = carsQuery.data?.result;

  return (
    <>
      <section className="w-full h-[768px] bg-slate-400"></section>

      <div className="max-w-7xl mx-auto flex py-10 px-6 space-x-5">
        <div className="max-w-4xl flex-1 border">
          {/* Brands */}
          <BrandList text={"popular brands"} list={brandList} />
          {/* Cars */}
          <CarList text={`All Cars`} list={carList} />
        </div>
        <div className="max-w-sm w-2/5 border">2</div>
      </div>
    </>
  );
}

const BrandList = ({ text, list }: any) => {
  return (
    <div className="brands_box p-12">
      <h4 className="text-center text-4xl font-semibold capitalize">{text}</h4>

      <div className="pt-10 flex items-center">
        <div className="grid grid-cols-5 grid-rows-auto gap-8">
          {list.map((imgs: any) => {
            return (
              <div key={imgs.id} className="flex items-center cursor-pointer">
                <Image
                  src={imgs.imageUrl}
                  alt={imgs.name}
                  width={100}
                  height={100}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const CarList = ({ text, list }: any) => {
  return (
    <div className="brands_box p-12 mt-10">
      <h4 className="text-center text-4xl font-semibold capitalize">{text}</h4>

      <div className="pt-10 flex items-center">
        <div className="grid grid-cols-2 grid-rows-auto gap-4">
          {list?.map((car: Car) => {
            return (
              <div key={car.id} className="flex flex-col cursor-pointer">
                <div className="">
                  <Image
                    src={car.imageUrl}
                    alt={car.title}
                    width={373}
                    height={224}
                    // className="object-cover"
                  />
                </div>
                <div className="py-4">
                  <h4 className="text-xl font-bold ">
                    {car.title + " " + car.title}
                  </h4>
                  <div className="flex space-x-5">
                    <p className="text-red-500">
                      ₦ {formatNumber(car.marketplacePrice)}
                    </p>
                    <p className="text-black line-through">
                      ₦ {formatNumber(car.marketplaceOldPrice)}
                    </p>
                  </div>
                  <button className="text-white bg-[#0879c9] w-full h-12 flex items-center justify-center mt-4">
                    <span className="capitalize">see details</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
