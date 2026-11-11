import { createSlice } from "@reduxjs/toolkit";

const cartSilce = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find(item => item.id == action.payload.id)
            if (existingItem) {
                existingItem.quantity += 1
                existingItem.totalPrice = existingItem.quantity * action.payload.price
                const remainingitems = state.filter(itm => itm.id !== existingItem.id)
                state = [...remainingitems,existingItem]
            }
            else {
                state.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price })
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id != action.payload)
        }
    }
})

export const { addToCart, removeFromCart } = cartSilce.actions
export default cartSilce.reducer