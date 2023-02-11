import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",
    tagTypes: ["products"],
    baseQuery: fetchBaseQuery({baseUrl: "https://5fc9346b2af77700165ae514.mockapi.io/"}),
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => `products`,
            providesTags: ["products"],
            transformResponse(baseQueryReturnValue, meta, arg) {
                const newData = baseQueryReturnValue.sort((a, b) => {
                    const date1 = new Date(a.createdAt);
                    const date2 = new Date(b.createdAt);
                    return date1 - date2;
                });
                return newData
            }
        })
    })
})

export const {useGetProductsQuery} = productsApi