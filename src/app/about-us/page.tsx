"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import logo from "@/assets/logo.png";

const AboutUsPage = () => {
  return (
    <div className='w-full flex flex-col items-center min-h-screen'>
      <Navbar />
      <div className='bg-green-800 w-full h-64 flex justify-center items-center gap-4 p-4'>
        <Image src={logo} alt='' className='w-20 h-20 rounded-full' />
        <h1 className='text-4xl font-bold text-white'>Green Basket</h1>
      </div>
      <div className='w-full max-w-[1200px] bg-white min-h-screen pt-8 flex flex-col items-center'>
        <div className='flex p-4 flex-wrap items-start mb-16 m-2 rounded gap-8'>
          <div className='bg-stone-300 rounded-md flex-1 border h-full basis-64 flex items-center justify-center'>
            <div className='w-full h-[200px]'></div>
          </div>
          <div className='flex-1 h-full basis-64'>
            <h1 className='font-bold text-2xl mb-4'>About us</h1>
            <p className='text-stone-500'>
              Green Basket is your on-campus food delivery solution. We&apos;re
              dedicated to providing convenient, tasty meals right to your
              location within the school. With a focus on quality, variety, and
              exceptional service, Green Basket makes satisfying your cravings
              easier than ever. Join us in redefining the way you enjoy food on
              campus.
            </p>
          </div>
        </div>

        <div className='flex p-4 flex-wrap items-start mb-16 m-2 rounded gap-8'>
          <div className='bg-stone-300 rounded-md flex-1 border h-full basis-64 flex items-center justify-center'>
            <div className='w-full h-[200px]'></div>
          </div>
          <div className='flex-1 h-full basis-64'>
            <h1 className='font-bold text-2xl mb-4'>Our Mision</h1>
            <p className='text-stone-500'>
              Our mission is to revolutionize the way students and staff enjoy
              meals within the school campus. We aim to provide a seamless and
              enjoyable dining experience, offering a diverse menu of delicious
              options delivered promptly to your doorstep. With Green Basket,
              you can focus on your studies and activities while we take care of
              your hunger.
            </p>
          </div>
        </div>

        <div className='flex p-4 flex-wrap items-start mb-16 m-2 rounded gap-8'>
          <div className='bg-stone-300 rounded-md flex-1 border h-full basis-64 flex items-center justify-center'>
            <div className='w-full h-[200px]'></div>
          </div>
          <div className='flex-1 h-full basis-64'>
            <h1 className='font-bold text-2xl mb-4'>Our Values</h1>
            <p className='text-stone-500'>
              At Green Basket, we believe in convenience, quality, and
              community. We&apos;re committed to delivering more than just food
              – we&apos;re delivering an experience. Our values drive everything
              we do, from selecting the freshest ingredients to providing
              exceptional customer service. Join us as we strive to make your
              school experience even more enjoyable, one delicious meal at a
              time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
