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
                state = [...remainingitems, existingItem]
            }
            else {
                state.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price })
            }
        },
        removeFromCart: (state, action) => {
            const existingItem = state.find(item => item.id == action.payload.id)
            if (existingItem.quantity > 1) {
                existingItem.quantity -= 1
                existingItem.totalPrice = existingItem.quantity * action.payload.price
                const remainingitems = state.filter(itm => itm.id !== existingItem.id)
                state = [...remainingitems, existingItem]
            }
            else {
                return state.filter(item => item.id != action.payload.id)
            }
        },
        deleteItem: (state, action) => {
            return state.filter(item => item.id != action.payload)
        },
        emptyCart: (state) => {
            return state = []
        }
    }
})

export const { addToCart, removeFromCart, deleteItem, emptyCart } = cartSilce.actions
export default cartSilce.reducer