"use client";
import OrderDelivery from "@/assets/order_delivery.svg";
import { IRootState } from "@/redux/store";
import getCartGrandTotal from "@/utils/getCartGrandTotal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const PlaceOrderPage = () => {
  const { cartItems } = useSelector((state: IRootState) => state.cart);

  const router = useRouter();
  const onGoBackToHome = async () => {
    router.push("/");
  };

  return (
    <div className='w-full flex flex-col items-center justify-center min-h-screen'>
      <div>
        <div className='border rounded p-4 mb-3'>
          <div className='flex justify-center items-center flex-col'>
            <Image src={OrderDelivery} alt='' width={128} height={128} />
            <h1 className='text-center my-4 text-stone-500'>
              Preparing your food. Your deliver man will pick it up once it's
              ready.
            </h1>
          </div>
          <div>
            <h1 className='font-bold'>Order Details</h1>
            {cartItems.map((item) => (
              <div key={item.id} className='flex justify-between'>
                <p>
                  <b>{item.qty}x</b> - {item.name} - {item.variation}
                </p>
                <p>₱{item.price}</p>
              </div>
            ))}
            <p className='w-full text-end font-bold mt-2'>
              Total: ₱{getCartGrandTotal(cartItems)}
            </p>
          </div>
        </div>
        <button
          onClick={onGoBackToHome}
          className='border w-full rounded my-1 p-2 bg-green-700'>
          <h1 className='font-bold text-white'>Go back to home</h1>
        </button>
      </div>
    </div>
  );
};

export default PlaceOrderPage;
