"use client";
import Navbar from "@/components/Navbar";

const AboutUsPage = () => {
  return (
    <div className='w-full flex flex-col items-center min-h-screen'>
      <Navbar />
      <div className='bg-green-700 w-full h-64 flex justify-center items-center'>
        <h1 className='text-4xl font-bold text-white'>Green Basket</h1>
      </div>
      <div className='w-full max-w-[1200px] bg-white min-h-screen pt-8 flex flex-col items-center'>
        <div className='flex p-4 flex-wrap items-start mb-16 m-2 rounded gap-8'>
          <div className='bg-stone-300 flex-1 border h-full basis-64 flex items-center justify-center'>
            <div className='w-full h-[200px]'></div>
          </div>
          <div className='flex-1 h-full basis-64'>
            <h1 className='font-bold text-2xl mb-4'>About us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              animi. Incidunt, quibusdam. Repellat, numquam officia perferendis
              unde commodi nisi ab tenetur ratione, dolor, reiciendis non at
              sint explicabo consectetur officiis quaerat rem necessitatibus
              expedita temporibus! Sed eius possimus temporibus repellat? Eaque
              a nostrum optio assumenda dolore perferendis similique praesentium
              dolor.
            </p>
          </div>
        </div>

        <div className='flex p-4 flex-wrap items-start mb-16 m-2 rounded gap-8'>
          <div className='bg-stone-300 flex-1 border h-full basis-64 flex items-center justify-center'>
            <div className='w-full h-[200px]'></div>
          </div>
          <div className='flex-1 h-full basis-64'>
            <h1 className='font-bold text-2xl mb-4'>Our Mision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              animi. Incidunt, quibusdam. Repellat, numquam officia perferendis
              unde commodi nisi ab tenetur ratione, dolor, reiciendis non at
              sint explicabo consectetur officiis quaerat rem necessitatibus
              expedita temporibus! Sed eius possimus temporibus repellat? Eaque
              a nostrum optio assumenda dolore perferendis similique praesentium
              dolor.
            </p>
          </div>
        </div>

        <div className='flex p-4 flex-wrap items-start mb-16 m-2 rounded gap-8'>
          <div className='bg-stone-300 flex-1 border h-full basis-64 flex items-center justify-center'>
            <div className='w-full h-[200px]'></div>
          </div>
          <div className='flex-1 h-full basis-64'>
            <h1 className='font-bold text-2xl mb-4'>Our Values</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              animi. Incidunt, quibusdam. Repellat, numquam officia perferendis
              unde commodi nisi ab tenetur ratione, dolor, reiciendis non at
              sint explicabo consectetur officiis quaerat rem necessitatibus
              expedita temporibus! Sed eius possimus temporibus repellat? Eaque
              a nostrum optio assumenda dolore perferendis similique praesentium
              dolor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
