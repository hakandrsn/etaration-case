import ListProduct from "../pages/ListProduct";
import DetailProduct from "../pages/DetailProduct";

export const routes = [
    {
        path: '/products',
        component: ListProduct,
        exact: true,
    },
    {
        path: '/product/:id',
        component: DetailProduct,
        exact: true,
    }
]