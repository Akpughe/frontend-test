"use client";
import React from "react";
import { getCarDetails, getCarMedia } from "@/service/api";
import { formatNumber } from "../../../../helpers";
import { useQuery } from "@tanstack/react-query";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { ICar, ICarMedia } from "@/types";
import { Rating } from "@mantine/core";

type Props = {
  params: { carId: string };
};

const CarInfo = ({ params }: Props) => {
  const { carId } = params;

  const carQuery = useQuery({
    queryKey: ["car", carId],
    queryFn: () => getCarDetails(carId),
  });

  const carMediaQuery = useQuery({
    queryKey: ["carMedia", carId],
    queryFn: () => getCarMedia(carId),
  });

  if (carQuery.isLoading) return <h1>Loading...</h1>;
  if (carQuery.isError) return <pre>{JSON.stringify(carQuery.error)}</pre>;

  if (carMediaQuery.isLoading) return <h1>Loading...</h1>;
  if (carMediaQuery.isError) return <pre>{JSON.stringify(carQuery.error)}</pre>;

  const mediaList = carMediaQuery.data?.carMediaList;
  const carInfo: ICar = carQuery.data;

  const location = carInfo.city + ", " + carInfo.state + ", " + carInfo.country;

  const slides = mediaList.map((car: ICarMedia) => (
    <Carousel.Slide key={car.id}>
      <Image
        src={car.url}
        alt={car.name}
        width={600}
        height={400}
        blurDataURL="data:image/webp;base64,UklGRpICAABXRUJQVlA4WAoAAAAgAAAA0QAAjQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggpAAAAPAKAJ0BKtIAjgA+7Xa3VqmnJSOgSAEwHYlpbt1f4QBPa9FXCDIIaqlDjkcW1zB1d70ZjI2/1X+nrOHXzHuDEfwlXBaYDtQaamv0XOtAKbucrSk/jxHiLm7lIaBTuTIlMAD+3hlSngd1wvIK7WOcdrwOOgUaYxTOMOtpqMuDDhxV99uSMGPOaGVvXp+Hvme8q9ymFPxWXqB6QQfT1+a0pmibhAAA"
        placeholder="blur"
        className="w-full"
      />
    </Carousel.Slide>
  ));

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row">
        {/* car pictures */}
        <div className="flex flex-1">
          <div className="h-full ">
            <Carousel withIndicators withControls>
              {slides}
            </Carousel>
          </div>
        </div>
        {/* car details */}
        <div className="flex-1">
          <div className="p-5">
            <div>
              <h4 className="text-3xl font-bold">{carInfo.carName}</h4>
              <div className="grid sm:grid-cols-4 grid-cols-3 grid-rows-auto gap-3 pt-4">
                <Pill text={carInfo.sellingCondition} />
                <Pill text={carInfo.mileage} />
                <Pill text={carInfo.engineType} />
                <Pill text={carInfo.transmission} />
              </div>
              <div className="pt-4 w-3/5">
                <p className="flex items-center justify-between w-full">
                  <span className="text-base">Price:</span>
                  <span className="text-xl font-bold">
                    ₦{formatNumber(carInfo.marketplacePrice)}
                  </span>
                </p>
                <p className="flex items-center justify-between w-full">
                  <span className="text-base">Monthly payment:</span>
                  <span className="text-xl font-bold">
                    ₦{formatNumber(carInfo.installment)}
                  </span>
                </p>
              </div>

              <div className="pt-4">
                Location: <span className="font-semibold">{location}</span>
              </div>
              <div className="flex items-center pt-4 space-x-3">
                <span>Grade: </span>
                <div>
                  <Rating value={carInfo.gradeScore} fractions={2} readOnly />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 px-5 md:px-5 lg:px-0 xl:px-0">
        <h4 className="font-bold">More Info</h4>

        <div className="pt-4">
          Interior color:{" "}
          <span className="font-semibold">{carInfo.interiorColor}</span>
        </div>

        <div className="pt-4">
          Exterior color:{" "}
          <span className="font-semibold">{carInfo.exteriorColor}</span>
        </div>

        <div className="pt-4">
          Fuel type: <span className="font-semibold">{carInfo.fuelType}</span>
        </div>
      </div>
    </div>
  );
};

const Pill = ({ text }: any) => {
  return (
    <span className="bg-blue-500 text-white text-xs w-auto capitalize h-6 flex items-center justify-center rounded px-2 sm:mt-0 mt-3 ">
      {text}
    </span>
  );
};

export default CarInfo;
