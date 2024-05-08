import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: string,
    qty: number;
    name: string,
    variation: string,
    price: number
}

interface CartInitialState {
    cartItems: Array<CartItem>,
    addToCartDialogVisibility: boolean,
    activeAddToCartItem: CartItem | null
}

const initialState: CartInitialState = {
    cartItems: [],
    addToCartDialogVisibility: false,
    activeAddToCartItem: null
}

// const updateItemQty = (items: Array<any>) => { }

const cartSlice = createSlice({
    name: "Cart Slice",
    initialState,
    reducers: {
        toggleAddToCartDialog: (state) => {
            state.addToCartDialogVisibility = !state.addToCartDialogVisibility;
        },
        setActiveAddToCartItem: (state, action) => {
            state.activeAddToCartItem = action.payload;
        },
        updateItemQty: (state, action: PayloadAction<CartItem & { type: "ADD" | "SUBTRACT" | "DELETE" }>) => {
            const updateType = action.payload.type;

            if (updateType === "DELETE") {
                state.cartItems = state.cartItems.filter((item) => item.id != action.payload.id)
            }

            if (updateType === "ADD") {
                const i = state.cartItems.findIndex((item) => item.id === action.payload.id)
                state.cartItems[i].qty += 1;
            }

            if (updateType === "SUBTRACT") {
                const i = state.cartItems.findIndex((item) => item.id === action.payload.id)
                if (state.cartItems[i].qty > 1) {
                    state.cartItems[i].qty -= 1;
                }
            }
        },
        addToCart: (state, action: PayloadAction<CartItem>) => {
            // If item exists, add 1 to a quantity
            const { id } = action.payload;
            try {
                const i = state.cartItems.findIndex((item) => item.id === id)
                state.cartItems[i].qty += 1;
            } catch (error) {
                state.cartItems.push(action.payload)
            }
        },
        removeItemFromCart: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        }
    }
});

export const {
    addToCart,
    removeItemFromCart,
    toggleAddToCartDialog,
    setActiveAddToCartItem,
    updateItemQty
} = cartSlice.actions
export const cartReducer = cartSlice.reducer;

export default cartSlice;