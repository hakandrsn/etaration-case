import ListProduct from "../pages/ListProduct";
import DetailProduct from "../pages/DetailProduct";

export const routes = [
    {
        path: '',
        component: ListProduct,
        exact: true,
        layout: '/product'
    },
    {
        path: '/:id',
        component: DetailProduct,
        exact: true,
        layout: '/product'
    }
]