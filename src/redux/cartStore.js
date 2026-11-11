import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice"
import wishlistSlice from "./slices/wishlistSlice"
import cartSilce from "./slices/cartSlice"

const cartStore = configureStore({
    reducer: {
        productReducer: productSlice,
        wishlistReducer: wishlistSlice,
        cartReducer: cartSilce
    }
})

export default cartStore 