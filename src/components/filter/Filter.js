import React from 'react';
import Grid2 from "@mui/material/Unstable_Grid2";
import { useSelector} from "react-redux";
import {selectBrands, selectModels, sortProducts} from "../../redux/features/product/productSlice";
import SortBy from "./SortBy";
import FilterBy from "./FilterBy";

const Filter = () => {
    const {models, brands} = useSelector(state => state.products)
    return (
        <Grid2 container colums={1} item padding={0} margin={0} width={"100%"} display="flex"
               alignItems="center" flexDirection="column">
            <SortBy title="Sort By" func={sortProducts} />
            <FilterBy title="Brands" data={brands} func={selectBrands}/>
            <FilterBy title="models" data={models} func={selectModels}/>
        </Grid2>
    );
};

export default Filter;