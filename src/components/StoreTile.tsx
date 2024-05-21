import { useDispatch } from "react-redux";
import {
  toggleAddToCartDialog,
  setActiveAddToCartItem,
} from "@/redux/cart/cart.slice";

import Image from "next/image";

interface StoreItem {
  id: string;
  name: string;
  variation: string;
  price: number;
  img: string;
}

const StoreTile = ({ id, name, price, variation, img }: StoreItem) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(toggleAddToCartDialog());
        dispatch(
          setActiveAddToCartItem({ id, name, img, price, variation, qty: 1 })
        );
      }}
      className='border w-full sm:max-w-[186px] max-w-[140px] rounded cursor-pointer'>
      <div className='bg-stone-300 h-32 relative flex items-center justify-center'>
        <Image src={img} alt='' className='p-4 w-[80%] h-full' />
      </div>
      <div className='px-3 py-2 max-w-[24ch] mt-2'>
        <h1 className='text-base font-medium'>{name}</h1>
        <p className='text-sm text-stone-400'>{variation}</p>
        <p className='font-bold text-amber-500 mt-2'>P{price}</p>
      </div>
    </div>
  );
};

export default StoreTile;
