import { useState } from "react";
import { IoMdCart, IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { IRootState } from "@/redux/store";
import { motion } from "framer-motion";

const Cart = () => {
  const [isCartItemVisible, setIsCartItemVisible] = useState(false);
  const { cartItems } = useSelector((state: IRootState) => state.cart);

  const getGrandTotal = () => {
    let grandTotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
      grandTotal += cartItems[i].qty * cartItems[i].price;
    }
    return grandTotal;
  };

  return (
    <div className='fixed z-50 h-screen'>
      <div
        className='h-12 w-12 bg-green-700 rounded-full flex items-center justify-center m-4 cursor-pointer shadow-md bottom-0 right-0 fixed'
        onClick={() => setIsCartItemVisible(!isCartItemVisible)}>
        <IoMdCart size={28} className='text-white' />
      </div>
      {isCartItemVisible && (
        <motion.div
          initial={{
            opacity: 0,
            x: 500,
          }}
          transition={{
            ease: "anticipate",
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          className='w-full flex flex-col justify-between max-w-[800px] min-w-[256px] bg-white shadow-md h-full fixed right-0 p-2'>
          <div>
            <div className='w-full flex border-b-stone-300 border-b p-1 items-center justify-between'>
              <div className='flex items-center'>
                <IoMdCart size={20} className='text-black' />
                <h1 className='ml-3 font-bold text-lg'>Your cart</h1>
              </div>
              <IoMdClose
                size={20}
                className='text-red-700 cursor-pointer'
                onClick={() => setIsCartItemVisible(!isCartItemVisible)}
              />
            </div>
            <div className='flex mt-4 flex-col gap-2'>
              {cartItems.map((item) => (
                <CartItem {...item} />
              ))}
            </div>
          </div>
          <div className='p-2'>
            <div className='flex justify-between'>
              <h1 className='mb-4 text-lg'>Grand Total</h1>
              <h1 className=' text-lg text-amber-500 font-bold'>
                ₱ {getGrandTotal()}
              </h1>
            </div>
            <button className='bg-green-700 w-full text-sm p-2 rounded text-white font-bold'>
              Check out
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
