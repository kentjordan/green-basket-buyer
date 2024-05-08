import { toggleAddToCartDialog, addToCart } from "@/redux/cart/cart.slice";
import { IRootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

const AddToCartDialog = () => {
  const { activeAddToCartItem } = useSelector(
    (state: IRootState) => state.cart
  );

  const dispatch = useDispatch();

  const onAddToCart = () => {
    if (activeAddToCartItem) {
      dispatch(addToCart(activeAddToCartItem));
      alert(
        `${activeAddToCartItem.name} - ${activeAddToCartItem.variation} has been added to the cart!`
      );
      dispatch(toggleAddToCartDialog());
    }
  };
  const onCancel = () => dispatch(toggleAddToCartDialog());

  return (
    <div className='bg-black/50 h-full w-full fixed z-10 flex items-center justify-center'>
      <div className='bg-white border p-3 rounded h-auto flex flex-col m-2'>
        <h1 className='font-bold mb-4 text-lg border-b pb-2'>
          Add this item into your cart?
        </h1>
        <div className='flex flex-col justify-center items-center'>
          <div className='bg-stone-300 h-40 w-40 rounded'></div>
          <div className='flex justify-center items-center flex-col my-4'>
            <h1 className='font-bold'>{activeAddToCartItem?.name}</h1>
            <p className='text-sm text-stone-500'>
              {activeAddToCartItem?.variation}
            </p>
            <p className='font-bold text-amber-500 mt-2'>
              P{activeAddToCartItem?.price}
            </p>
          </div>
          <div className='flex flex-col mt-3 gap-2 w-full'>
            <button
              onClick={onAddToCart}
              className='bg-green-700 text-sm text-white p-1 px-2 rounded font-bold'>
              Add to cart
            </button>
            <button
              onClick={onCancel}
              className='bg-stone-200 text-sm py-1  rounded px-2'>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartDialog;
