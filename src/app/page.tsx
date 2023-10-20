"use client";
import Image from "next/image";
import formatCurrency from "@/utils/format-currency";
import { useRouter } from "next/navigation";
import { ICar } from "@/index";
import { useEffect, useState } from "react";
import { Pagination } from "@mantine/core";
import { useBrands } from "@/hooks/use-brands";
import { useCars } from "@/hooks/use-cars";

export default function Home() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <>
      <section className="w-full sm:h-[368px] h-[384px] bg-slate-400">
        <div className="flex items-center justify-center h-full">
          <h2 className="sm:text-6xl text-3xl font-extrabold text-center">
            Buy your <span className="text-red-500">dream</span> car{" "}
          </h2>
        </div>
      </section>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-col lg:flex-row xl:flex-row py-10 px-6 sm:space-x-5 space-x-0 space-y-5 sm:space-y-0">
        <div className="max-w-6xl flex-1 border">
          {/* Brands */}
          <BrandList text={"popular brands"} />
          {/* Cars */}
          <CarList
            text={`All Cars`}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            setTotalPages={setTotalPages}
            // paginate={paginate}
          />
        </div>
      </div>
    </>
  );
}

const BrandList = ({ text }: any) => {
  const { isLoading, error, data } = useBrands();
  const brandList = data?.makeList;

  isLoading && <h1>Loading...</h1>;
  error && <pre>{JSON.stringify(error)}</pre>;

  return (
    <div className="brands_box p-4 md:p-8 lg:p-12 xl:p-12">
      <h4 className="text-center sm:text-4xl text-2xl font-semibold capitalize">
        {text}
      </h4>

      <div className="pt-10 flex justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 grid-rows-auto gap-8">
          {brandList?.map((imgs: any) => {
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

const CarList = ({ text, page, setPage, totalPages, setTotalPages }: any) => {
  const router = useRouter();
  const { isLoading, error, data } = useCars(page);

  const carList = data?.result;
  const paginate = data?.pagination;

  isLoading && <h1>Loading...</h1>;
  error && <pre>{JSON.stringify(error)}</pre>;

  useEffect(() => {
    setTotalPages(paginate?.total);
  }, []);
  return (
    <div className="brands_box p-4 md:p-8 lg:p-12 xl:p-12 mt-10">
      <h4 className="text-center sm:text-4xl text-2xl font-semibold capitalize">
        {text}
      </h4>

      <div className="pt-10 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-rows-auto gap-4">
          {carList?.map((car: ICar) => {
            const carId = car.id;
            return (
              <div key={car.id} className="flex flex-col cursor-pointer">
                <div className=" h-72 overflow-clip ">
                  <Image
                    src={car.imageUrl}
                    alt={car.title}
                    width={373}
                    height={1}
                    blurDataURL="data:image/webp;base64,UklGRpICAABXRUJQVlA4WAoAAAAgAAAA0QAAjQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggpAAAAPAKAJ0BKtIAjgA+7Xa3VqmnJSOgSAEwHYlpbt1f4QBPa9FXCDIIaqlDjkcW1zB1d70ZjI2/1X+nrOHXzHuDEfwlXBaYDtQaamv0XOtAKbucrSk/jxHiLm7lIaBTuTIlMAD+3hlSngd1wvIK7WOcdrwOOgUaYxTOMOtpqMuDDhxV99uSMGPOaGVvXp+Hvme8q9ymFPxWXqB6QQfT1+a0pmibhAAA"
                    placeholder="blur"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="py-4 h-44 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold ">
                      {car.title + " " + car.title}
                    </h4>
                  </div>
                  <div className="flex space-x-5">
                    <p className="text-red-500">
                      ₦ {formatCurrency(car.marketplacePrice)}
                    </p>
                    <p className="text-black line-through">
                      ₦ {formatCurrency(car.marketplaceOldPrice)}
                    </p>
                  </div>
                  <button
                    onClick={() => router.push(`/car/${carId}`)}
                    className="text-white bg-[#0879c9] w-full h-12 flex items-center justify-center mt-4">
                    <span className="capitalize">see details</span>
                  </button>
                </div>
              </div>
            );
          })}
          <Pagination
            value={page}
            siblings={3}
            onChange={setPage}
            total={totalPages}
          />
        </div>
      </div>
    </div>
  );
};
