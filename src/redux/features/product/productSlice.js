import {createSlice,} from "@reduxjs/toolkit";
import { take } from "lodash";
import {productsApi} from "../../services/products";

const initialState={
    data :[],
    filteredData:[],
    page:1,
    models:[],
    brands:[],
    selectModels:[],
    selectBrands:[],
    sort:"oldtonew",
    search:"",
    error:"",
    isLoading:false,
    pagePass:12,
    dataCount:0
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        changePage:(state,action)=>{
            state.page = action.payload
        },
        sortProducts:(state,action)=>{
            state.sort =action.payload
        },
        selectModels:(state,action)=>{
            state.selectModels = action.payload
        },
        selectBrands:(state,action)=>{
            state.selectBrands = action.payload
        },
        selectSort:(state,action)=>{
            state.selectedSort = action.payload
        },
        newListData:(state,action)=>{
            state.filteredData = action.payload.pageData
            state.dataCount = action.payload.dataCount
        },
        searchData:(state,action)=>{
            state.search = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addMatcher(
            productsApi.endpoints.getProducts.matchFulfilled,
            (state, action) => {
                state.data = action.payload
                state.models = [...new Set(action.payload.map(item => item.model))]
                state.brands = [...new Set(action.payload.map(item => item.brand))]
            },
            productsApi.endpoints.getProducts.matchPending,
            (state, action) => {
                state.isLoading = true
            },
            productsApi.endpoints.getProducts.matchRejected,
            (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            }
        )
    }
})

export const { changePage,sortProducts,selectBrands,selectModels,selectSort,newListData,searchData} = productSlice.actions
export default productSlice.reducer