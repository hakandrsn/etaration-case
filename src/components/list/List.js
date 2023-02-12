import React, {useEffect} from 'react';
import {
    Backdrop,
    Box,
    CircularProgress,
} from "@mui/material";
import PaginationComponent from "./Pagination";
import Grid2 from "@mui/material/Unstable_Grid2";
import {useDispatch, useSelector} from "react-redux";
import {newListData} from "../../redux/features/product/productSlice";
import {uniqBy} from "lodash";
import {sortedProducts} from "../../funcs/filter";
import CardCustom from './CardCustom';
import useWindowSize from '../../hooks/useWindowSize';

const List = () => {
    const {
        data,
        selectModels,
        selectBrands,
        sort,
        filteredData,
        search,
        error,
        isLoading,
        page,
        pagePass,
        dataCount
    } = useSelector(state => state.products)
    const size = useWindowSize();
    const dispatch = useDispatch()

    const newList = (data) => {
        let newData = [];
        data.forEach((item) => {
            selectBrands?.forEach((brand) => {
                if (item.brand === brand) {
                    newData.push(item)
                }
            })
            selectModels?.forEach((model) => {
                if (item.model === model) {
                    newData.push(item)
                }
            })
        })
        const uniqData = newData.length < 1 ? uniqBy(data, "id") : uniqBy(newData, 'id')
        const pageData = uniqData.slice((page - 1) * pagePass, page * pagePass);
        return {"pageData":sortedProducts(pageData, sort),"dataCount":uniqData.length}
    }
    useEffect(() => {
        if (search !== "") {
            let newData = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
            dispatch(newListData(newList(newData)))
        }
        if (search === "") {
            dispatch(newListData(newList(data)))
        }
    }, [search, selectModels, selectBrands, sort, data.length,page])
    if (error) return <div>Something went wrong</div>
    const ListData = () => {
        return (
            <Grid2 sx={{flexGrow: 1}} container spacing={3} display="flex" justifyContent="center">
                {filteredData && filteredData?.map((item) => {
                    return (
                        <Grid2 sx={{minWidth: 200, maxWidth: 245}} key={item.id} item xs={8} md={2}>
                            <CardCustom item={item}/>
                        </Grid2>
                    )
                })}
            </Grid2>
        )
    }
    return (
        <Box display="flex" flexDirection="column" alignContent="center"
             justifyContent={size.width < 600 ? "flex-end" : "center"}>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={isLoading}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
            <ListData/>
            {dataCount > 11 && <PaginationComponent count={dataCount}/>}
        </Box>
    );
};

export default List;