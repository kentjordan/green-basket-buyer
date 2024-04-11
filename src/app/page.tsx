import Navbar from "@/components/Navbar";
import Image from "next/image";
import header_bg from "@/assets/header_bg.jpg";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='w-full h-96 relative'>
        <div className='w-full h-full z-10 bg-gradient-to-b from-black to-transparent absolute'></div>
        <Image
          src={header_bg}
          alt='Food as Background'
          className='w-full'
          objectFit='cover'
          layout='fill'
        />
      </div>
    </div>
  );
}
