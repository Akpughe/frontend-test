import React from "react";
import Link from "next/link";
import {
  FaTruck,
  FaShoppingCart,
  FaPhone,
  FaSignInAlt,
  FaSignOutAlt,
  FaCartPlus,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full">
      <TopHeader />
      <nav className="max-w-6xl mx-auto py-6">
        <div className="flex justify-evenly items-center">
          <div>
            <h1 className="font-extrabold text-[#F45C5D] text-4xl tracking-wide italic">
              Car Store
            </h1>
          </div>
          <div className="max-w-2xl w-full">
            <form className="flex items-center h-12">
              <label htmlFor="voice-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full h-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="voice-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base focus:ring-[#F45C5D] focus:border-[#F45C5D] block w-full pl-4 p-2.5 h-full "
                  placeholder="Search"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"></button>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center py-2.5 px-3 ml-2 h-full w-36 text-sm font-medium text-white bg-[#F45C5D] border border-[#F45C5D] hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Search
              </button>
            </form>
          </div>
          <div>
            <button className="flex items-center justify-center bg-black text-white p-4 rounded-md">
              <FaCartPlus className="text-white text-lg" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

const TopHeader = () => {
  return (
    <div className="bg-[#0879c9] py-2 px-4 w-full flex items-center justify-between">
      <div className="">
        <p className="text-white">Offer Zone Top Deals & Discounts </p>
      </div>
      <div className="">
        <ul className="flex header_list w-full items-center space-x-10 pr-10">
          <li className="">
            <a className="text-white text-sm capitalize flex items-center space-x-4">
              <FaShoppingCart className="text-white" />{" "}
              <span>select location</span>
            </a>
          </li>
          <li className="">
            <a className="text-white text-sm capitalize flex items-center space-x-4">
              <FaTruck className="text-white" />
              <span>track order</span>
            </a>
          </li>
          <li>
            <a className="text-white text-sm capitalize flex items-center space-x-4">
              <FaPhone className="text-white" />
              <span> 001 234 5678</span>
            </a>
          </li>
          <li>
            <a className="text-white text-sm capitalize flex items-center space-x-4">
              <FaSignInAlt className="text-white" />
              <span>login</span>
            </a>
          </li>
          <li>
            <a className="text-white text-sm capitalize flex items-center space-x-4">
              <FaSignOutAlt className="text-white" />
              <span>register</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
