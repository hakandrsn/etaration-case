import { createSlice, } from "@reduxjs/toolkit";
import { find } from "lodash";

const initialState = {
    cart: [],
    page: 1
}

export const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        addCart: (state, action) => {
            if (state.cart.some((item) => item.item.id === action.payload.item.id)) {
                return;
            } else {
                state.cart.push(action.payload)
            }
        },
        deleteCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.item.id !== action.payload)
        },
        incrementCount: (state, action) => {
            state.cart = state.cart.map((item) => item.item.id === action.payload && item.count < 999 ? { ...item, count: item.count + 1 } : item)
        },
        decrementCount: (state, action) => {
            const item = find(state.cart, (item) => item.item.id === action.payload)
            if (item.count > 1) {
                state.cart = state.cart.map((item) => item.item.id === action.payload ? { ...item, count: item.count - 1 } : item)
            }else{
                state.cart = state.cart.filter((item) => item.item.id !== action.payload)
            }
        }
    }
})

export const { addCart, deleteCart, decrementCount, incrementCount } = cartSlice.actions
export default cartSlice.reducer