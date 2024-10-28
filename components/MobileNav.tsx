import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SlMenu } from "react-icons/sl";
import MobileNavMenu from "./MobileNavMenu";
import Link from "next/link";
import Languages from "./Languages";
import { Button } from "./ui/button";

const MobileNav = () => {
  return (
    <div className=' xl:hidden'>
      <Dialog>
        <DialogTrigger>
          <SlMenu size={22} />
        </DialogTrigger>
        <DialogContent
          className='h-screen min-w-full inline-flex flex-col px-0 gap-0'
          style={{ zIndex: "1100" }}
        >
          <MobileNavMenu />
          <Link href='#' className=' py-5 px-[4vw] w-full'>
            Pricing
          </Link>
          <Link href='#' className=' py-5 px-[4vw] w-full border-b '>
            Mobile App
          </Link>
          <Link href='#' className=' py-5 px-[4vw] w-full'>
            Wix Studio
          </Link>
          <Link href='#' className=' py-5 px-[4vw] w-full border-b '>
            Enterprise
          </Link>
          <Link href='#' className=' py-5 px-[4vw] w-full border-b '>
            English
          </Link>
          <div className='flex gap-4 px-[4vw] mt-auto border-t'>
            <Link
              href='#'
              className='border border-black py-2 px-[30px] rounded-full mt-4 hover:bg-[#f2f2f2]'
            >
              Log In
            </Link>
            <Link
              href='#'
              className='bg-[#166aea] py-2 px-[30px] rounded-full text-white mt-4 hover:bg-[#2D83FF]'
            >
              Get Started
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MobileNav;