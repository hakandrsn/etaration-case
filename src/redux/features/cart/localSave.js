export const cartMiddleware = store => next => action => {
    try {
        if (typeof window !== "undefined") {
            const result = next(action);
            window.localStorage.setItem("cart", JSON.stringify(store.getState().cart.cart));
            return result;
        }
    } catch (error) {
        console.log(error);
    }

}

export const getCartFromLocalStorage = () => {
    try {
        if (typeof window !== "undefined") {
            const cart = window.localStorage.getItem("cart");
            if (cart) {
                return JSON.parse(cart);
            }
        }
    } catch (error) {
        console.log(error);
    }
    return [];
}