import React from 'react';
import {Box, Divider, FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {sortProducts} from "../../redux/features/product/productSlice";
import Grid2 from "@mui/material/Unstable_Grid2";
import {useDispatch} from "react-redux";


const SortBy = ({title,func}) => {
    const dispatch = useDispatch()
    return (
        <Grid2 width={"100%"} display="flex"
               alignItems="center" flexDirection="column" item xs={{
            xs: 12,
        }}>
            <div style={{textTransform:"capitalize",textAlign:"center",marginBottom:4}}>{title}</div>
            <Divider sx={{marginY:1}} />
            <FormControl
            sx={{

            }}>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="oldtonew"
                    name="radio-buttons-group"
                    onChange={(e)=>dispatch(func(e.target.value))}
                    sx={{minWidth:130,marginLeft:-3}}
                >
                    <FormControlLabel value="oldtonew" control={<Radio  />} label="Old to New" />
                    <FormControlLabel value="newtoold" control={<Radio />} label="New to Old" />
                    <FormControlLabel value="pricegiht" control={<Radio />} label="Price hight to low" />
                    <FormControlLabel value="pricelow" control={<Radio />} label="Price low to hight" />
                </RadioGroup>
            </FormControl>
        </Grid2>
    );
};

export default SortBy;