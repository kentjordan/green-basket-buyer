"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import header_bg from "@/assets/header_bg.jpg";
import usls from "@/assets/usls.jpg";
import Stalls from "@/components/Stalls";
import Cart from "@/components/Cart";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Cart />
      <div className='w-full h-64 relative'>
        <div className='w-full h-full z-10 bg-gradient-to-b from-black to-transparent absolute'></div>
        <Image
          src={usls}
          alt='Food as Background'
          className='w-full'
          objectFit='cover'
          layout='fill'
        />
      </div>
      <Stalls />
    </div>
  );
}
