import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useDispatch, useSelector} from "react-redux";
import {changePage} from "../../redux/features/product/productSlice";

const PaginationComponent = ({count}) => {
    const {page} = useSelector(state => state.products)
    const dispatch = useDispatch()
    const handleChange = (p) => {
        dispatch(changePage(p))
    };
    return (
        <Stack spacing={2} display="flex" justifyContent="center" alignItems="center" marginY={3}>
            <Pagination count={Math.ceil(count/12)} page={Number(page)} onChange={(event, p)=>handleChange(p)} />
        </Stack>
    );
}
export default PaginationComponent;