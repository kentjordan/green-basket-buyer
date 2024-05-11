import { CartItem } from "@/redux/cart/cart.slice";

const getCartGrandTotal = (cartItems: Array<CartItem>) => {
    let grandTotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
        grandTotal += cartItems[i].qty * cartItems[i].price;
    }
    return grandTotal;
};

export default getCartGrandTotal;