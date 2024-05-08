"use client";
import Cart from "@/components/Cart";
import StoreTile from "@/components/StoreTile";
import { useEffect, useState } from "react";
import getStores from "@/data/stores";
import { PulseLoader } from "react-spinners";
import { IRootState } from "@/redux/store";
import { useSelector } from "react-redux";
import AddToCartDialog from "@/components/AddToCartDialog";
import Navbar from "@/components/Navbar";
import Image, { StaticImageData } from "next/image";

interface StorePageProps {
  params: { storeId: string };
}

interface Store {
  id: string;
  name: string;
  stall_thumbnail: StaticImageData;
  summary: string;
  category: string;
  best_items: Array<any>;
  regular_items: Array<any>;
}

const StorePage = ({ params }: StorePageProps) => {
  const [activeStore, setActiveStore] = useState<Store | undefined>(undefined);

  useEffect(() => {
    setActiveStore(getStores().find((store) => store.id === params.storeId));
  }, []);

  const { addToCartDialogVisibility, activeAddToCartItem } = useSelector(
    (state: IRootState) => state.cart
  );

  return (
    <div className='flex flex-col h-screen items-center'>
      <Navbar />
      {addToCartDialogVisibility && <AddToCartDialog />}
      {activeStore ? (
        <>
          <Cart />
          <div
            style={{
              backgroundImage: `url('${activeStore.stall_thumbnail.src}')`,
            }}
            className='mb-16 p-2 h-auto min-h-56 w-full flex flex-col justify-center items-center relative'>
            <div className='bg-black/50 w-full h-full absolute'></div>
            <h1 className='text-3xl font-bold text-center mb-2 text-white z-10'>
              {activeStore && activeStore.name}
            </h1>
            <p className='text-white text-center text-sm z-10'>
              {activeStore && activeStore.summary}
            </p>
          </div>
          <div className='w-full flex flex-col items-center'>
            <h1 className='font-bold text-xl mb-4'>Best selling items</h1>
            <div className='w-full max-w-[600px] flex gap-2 flex-wrap p-2 justify-center'>
              {activeStore &&
                activeStore.best_items.map((item) => (
                  <StoreTile
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    variation={item.variation}
                  />
                ))}
            </div>
          </div>
          <div className='mt-8 w-full flex flex-col items-center'>
            <h1 className='font-bold text-xl mb-4'>Regular Items</h1>
            <div className='w-full max-w-[600px] flex gap-2 flex-wrap p-2 justify-center'>
              {activeStore &&
                activeStore.regular_items.map((item) => (
                  <StoreTile
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    variation={item.variation}
                  />
                ))}
            </div>
          </div>
        </>
      ) : (
        <div className='h-full w-full flex flex-col items-center justify-center'>
          <PulseLoader size={16} />
          <h1 className='mt-2'>LOADING</h1>
        </div>
      )}
    </div>
  );
};

export default StorePage;
