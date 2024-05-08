import { MdDeleteOutline } from "react-icons/md";
import { IoAdd, IoRemove } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { updateItemQty } from "@/redux/cart/cart.slice";

interface ICartItem {
  id: string;
  qty: number;
  name: string;
  variation: string;
  price: number;
}
const CartItem = ({ id, name, price, qty, variation }: ICartItem) => {
  const dispatch = useDispatch();

  const onItemAddQty = () =>
    dispatch(
      updateItemQty({
        id,
        name,
        price,
        qty,
        variation,
        type: "ADD",
      })
    );

  const onItemRemoveQty = () =>
    dispatch(
      updateItemQty({
        id,
        name,
        price,
        qty,
        variation,
        type: "SUBTRACT",
      })
    );

  const onItemDeleteFromCart = () => {
    dispatch(
      updateItemQty({
        id,
        name,
        price,
        qty,
        variation,
        type: "DELETE",
      })
    );
  };

  return (
    <div className='border p-2 rounded flex justify-between'>
      <div className='flex gap-2 '>
        <div className='bg-stone-300 w-20 h-20 rounded'></div>
        <div>
          <h1 className='text-base font-medium'>{name}</h1>
          <p className='text-sm text-stone-400'>{variation}</p>
          <p className='font-bold text-amber-500'>P{price}</p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-around'>
        <div className='flex items-center justify-between'>
          <IoAdd
            className='font-bold text-green-700 text-xl cursor-pointer'
            onClick={onItemAddQty}
          />
          <h1 className='mx-2 border py-1 px-2 rounded'>{qty}</h1>
          <IoRemove
            onClick={onItemRemoveQty}
            className='text-xl cursor-pointer'
          />
        </div>
        <div>
          <MdDeleteOutline
            onClick={onItemDeleteFromCart}
            className='text-red-700 text-xl mt-3 cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
