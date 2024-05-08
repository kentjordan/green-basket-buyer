import { LiaCartPlusSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import {
  toggleAddToCartDialog,
  setActiveAddToCartItem,
} from "@/redux/cart/cart.slice";

interface StoreItem {
  id: string;
  name: string;
  variation: string;
  price: number;
}

const StoreTile = ({ id, name, price, variation }: StoreItem) => {
  const dispatch = useDispatch();

  return (
    <div className='border w-full sm:max-w-[186px] max-w-[140px] rounded'>
      <div className='bg-stone-300 h-32 relative'></div>
      <div className='px-3 py-2 max-w-[24ch] mt-2'>
        <h1 className='text-base font-medium'>{name}</h1>
        <p className='text-sm text-stone-400'>{variation}</p>
        <div className='relative flex items-center'>
          <p className='font-bold text-amber-500'>P{price}</p>
          <LiaCartPlusSolid
            className='absolute right-0 cursor-pointer'
            onClick={() => {
              dispatch(toggleAddToCartDialog());
              dispatch(
                setActiveAddToCartItem({ id, name, price, variation, qty: 1 })
              );
            }}
            size={22}
          />
        </div>
      </div>
    </div>
  );
};

export default StoreTile;
