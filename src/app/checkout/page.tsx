"use client";
import { IRootState } from "@/redux/store";
import getCartGrandTotal from "@/utils/getCartGrandTotal";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const { cartItems } = useSelector((state: IRootState) => state.cart);

  const router = useRouter();

  const onPlaceOrder = async () => {
    router.push("/place-order");
  };

  return (
    <div className='flex flex-col min-h-screen items-center'>
      <div className='w-full max-w-[800px] py-3'>
        <h1 className='text-3xl font-bold'>Checkout your Basket</h1>
      </div>
      <div className='w-full max-w-[800px] h-full p-2'>
        <div className='border rounded my-3 p-2'>
          <h1 className='font-bold mb-2'>Specify your location</h1>
          <div className='flex flex-col'>
            <input
              type='text'
              placeholder='City'
              className='p-2 border-b rounded mb-1'
            />
            <input
              type='text'
              placeholder='Barangay'
              className='p-2 border-b rounded mb-1'
            />
            <input
              type='text'
              placeholder='House No. / Building No. / Street'
              className='p-2 border-b rounded mb-1'
            />
          </div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1546.466386931139!2d122.96203461227834!3d10.678851257106254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aed10b2f7ade09%3A0xc82b66977436e242!2sUniversity%20of%20St.%20La%20Salle%20-%20Bacolod%20City!5e0!3m2!1sen!2sph!4v1715428896668!5m2!1sen!2sph'
            className='w-full h-64'
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'></iframe>
        </div>
        <div className='border rounded my-3 p-2'>
          <h1 className='font-bold mb-2'>Order summary</h1>
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
        <div className='border rounded my-3 p-2'>
          <h1 className='font-bold mb-2'>Contact</h1>
          <input
            type='text'
            placeholder='Mobile Number'
            className='p-1 border-b w-full rounded mb-1'
          />
        </div>
        <div className='border rounded my-3 p-2'>
          <h1 className='font-bold mb-2'>Paid with</h1>
          <div className='flex justify-between'>
            <p>Cash on delivery</p>
            <p>₱{getCartGrandTotal(cartItems)}</p>
          </div>
        </div>
        <button
          onClick={onPlaceOrder}
          className='border w-full rounded my-1 p-2 bg-green-700'>
          <h1 className='font-bold text-white'>Place Order</h1>
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
