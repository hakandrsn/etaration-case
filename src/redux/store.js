import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./features/product/productSlice";
import {productsApi} from "./services/products";
import {setupListeners} from "@reduxjs/toolkit/query";
import cartSlice from "./features/cart/cartSlice";
import {cartMiddleware} from "./features/cart/localSave";
export const store = configureStore({
    reducer: {
        products: productSlice,
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
})

setupListeners(store.dispatch)