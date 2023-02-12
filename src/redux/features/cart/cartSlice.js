import { createSlice, } from "@reduxjs/toolkit";
import { find } from "lodash";
import {getCartFromLocalStorage, reHydrateStoreCart} from "./localSave";


const initialState = {
    cart: getCartFromLocalStorage(),
    page: 1,
}

const addLocalCartFromLocal = (state) => {
    try {
        if (typeof window !== "undefined") {
            window.localStorage.setItem("cart", JSON.stringify(state.cart));
        }
    } catch (error) {
        console.log(error);
    }
}
export const cartSlice = createSlice({
    name: "carts",
    initialState,
    hydrate: (state, action) => {
        return {
            ...state,
            ...action.payload.cart
        }
    },
    reducers: {
        addCart: (state, action) => {
            if (state.cart.some((item) => item.item.id === action.payload.item.id)) {
                return;
            } else {
                state.cart.push(action.payload)
            }
            addLocalCartFromLocal(state)
        },
        addLocalCart: (state, action) => {
            state.cart = action.payload
        },
        deleteCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.item.id !== action.payload)
            addLocalCartFromLocal(state)
        },
        incrementCount: (state, action) => {
            state.cart = state.cart.map((item) => item.item.id === action.payload && item.count < 999 ? { ...item, count: item.count + 1 } : item)
            addLocalCartFromLocal(state)
        },
        decrementCount: (state, action) => {
            const item = find(state.cart, (item) => item.item.id === action.payload)
            if (item.count > 1) {
                state.cart = state.cart.map((item) => item.item.id === action.payload ? { ...item, count: item.count - 1 } : item)
            }else{
                state.cart = state.cart.filter((item) => item.item.id !== action.payload)
            }
            addLocalCartFromLocal(state)
        }
    }
})

export const { addCart, deleteCart, decrementCount, incrementCount,addLocalCart } = cartSlice.actions
export default cartSlice.reducer