"use client";
import Navbar from "@/components/Navbar";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className='bg-green-800 w-full h-60 flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold text-white'>Contact us</h1>
        <p className='text-stone-200 mt-2 text-center'>
          We would love to respond to your queries.
        </p>
      </div>
      <div className='w-full min-h-screen flex flex-col mt-4 items-center p-4'>
        <div className='w-full max-w-[1200px] h-[600px] border rounded flex justify-center flex-wrap'>
          <div className='px-6 py-4 md:px-12 md:p-8 md:flex-[0.6] rounded flex-1'>
            <h1 className='font-bold text-2xl text-green-700 mb-12'>
              Send your request
            </h1>
            <div className='flex flex-col gap-y-4 w-full min-w-60'>
              <div className='flex justify-between gap-4'>
                <div className='flex-1 flex-wrap'>
                  <p className='mb-3 text-stone-500'>Name</p>
                  <input className='border p-1 rounded w-full' type='text' />
                </div>
                <div className='flex-1 flex-wrap'>
                  <p className='mb-3 text-stone-500'>Phone</p>
                  <input className='border p-1 rounded w-full' type='text' />
                </div>
              </div>
              <div className='flex justify-between gap-4'>
                <div className='flex-1 flex-wrap'>
                  <p className='mb-3 text-stone-500'>Email</p>
                  <input className='border p-1 rounded w-full' type='text' />
                </div>
                <div className='flex-1 flex-wrap'>
                  <p className='mb-3 text-stone-500'>Subject</p>
                  <input className='border p-1 rounded w-full' type='text' />
                </div>
              </div>
              <div className='flex-1 flex-wrap'>
                <p className='mb-3 text-stone-500'>Message</p>
                <textarea className='border p-1 rounded w-full h-32' />
              </div>
              <button
                onClick={() => alert("Your request has been sent!")}
                className='bg-green-700 rounded text-white p-2'>
                Send
              </button>
            </div>
          </div>
          <div className='px-12 p-8 bg-green-800 flex-[0.4] rounded md:flex flex-col hidden'>
            <h1 className='font-bold text-2xl text-white mb-8'>Reach Us</h1>
            <div className='flex justify-around flex-col h-full'>
              <div className='flex'>
                <div className='flex text-white flex-col gap-y-4'>
                  <p className='font-bold mr-8'>Email</p>
                  <p className='font-bold mr-8'>Phone</p>
                  <p className='font-bold mr-8'>Address</p>
                </div>
                <div className='flex text-white flex-col gap-y-4'>
                  <p>greenbasket@gmail.com</p>
                  <p>+63 912 345 6789</p>
                  <div>
                    <p>University of St. La Salle</p>
                    <p>Bacolod City, Negros Occidental, 6100</p>
                  </div>
                </div>
              </div>
              <div className='flex gap-x-4'>
                <FaFacebook
                  onClick={() =>
                    window.location.replace("https://facebook.com")
                  }
                  className='text-white cursor-pointer'
                  size={24}
                />
                <FaTwitter
                  onClick={() => window.location.replace("https://twitter.com")}
                  className='text-white cursor-pointer'
                  size={24}
                />
                <FaInstagram
                  onClick={() =>
                    window.location.replace("https://instagram.com")
                  }
                  className='text-white cursor-pointer'
                  size={24}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='px-6 p-4 md:p-8 bg-green-800 flex-1 w-full mt-8 rounded-r md:hidden flex-col flex '>
          <h1 className='font-bold text-2xl text-white mb-8'>Reach us</h1>
          <div className='flex justify-around flex-col h-full'>
            <div className='flex'>
              <div className='flex text-white flex-col gap-y-4'>
                <p className='font-bold mr-3 md:mr-8 text-sm'>Email</p>
                <p className='font-bold mr-3 md:mr-8 text-sm'>Phone</p>
                <p className='font-bold mr-3 md:mr-8 text-sm'>Address</p>
              </div>
              <div className='flex text-white flex-col gap-y-4'>
                <p className='text-sm'>greenbasket@gmail.com</p>
                <p className='text-sm'>+63 912 345 6789</p>
                <div>
                  <p className='text-sm'>University of St. La Salle</p>
                  <p className='text-sm'>
                    Bacolod City, Negros Occidental, 6100
                  </p>
                </div>
              </div>
            </div>
            <div className='flex gap-x-4 mt-8'>
              <FaFacebook
                onClick={() => window.location.replace("https://facebook.com")}
                className='text-white cursor-pointer'
                size={24}
              />
              <FaTwitter
                onClick={() => window.location.replace("https://twitter.com")}
                className='text-white cursor-pointer'
                size={24}
              />
              <FaInstagram
                onClick={() => window.location.replace("https://instagram.com")}
                className='text-white cursor-pointer'
                size={24}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
