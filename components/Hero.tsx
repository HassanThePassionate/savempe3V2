"use client";
import React from "react";
import { Input } from "./ui/input";
import { HiSearch } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [search, setSearch] = React.useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className=' pb-[90px] pt-[40px]'>
      <div className=' min-[1440px]:max-w-[1248px] max-w-[904px] mx-auto px-4 '>
        <div className='min-[1440px]:ml-[80px] py-[55px]'>
          <h1 className='min-[1440px]:text-[96px] text-[56px] font-bold text-[#D10210] pb-[7px] text-center leading-[110%] tracking-[-0.5px]'>
            Have questions?
          </h1>
          <p className='min-[1440px]:text-[32px] text-2xl mt-[17px] text-center leading-[120%]'>
            We have made it easy to get the support you need by putting together
            the most common queries we receive in one place
          </p>
        </div>
        <div className='bg-white h-[100px] min-[1440px]:h-[114px] flex items-center w-full border border-[#c4c4c4] px-6 py-3 rounded-[20px] min-[1440px]:ml-[80px] '>
          <HiSearch size={48} className='mr-6 text-[#384048]' />
          <Input
            className='bg-transparent border-none outline-none shadow-none min-[1440px]:text-[32px] text-2xl font-normal h-full '
            placeholder='Looking for...'
            value={search}
            onChange={handleSearchChange}
          />
          <button
            className={cn(
              " transition duration-300 transform scale-0",
              search !== "" && "scale-100"
            )}
            onClick={() => setSearch("")}
          >
            <MdCancel size={48} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;