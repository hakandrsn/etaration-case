import React from 'react';
import {Backdrop, CircularProgress} from "@mui/material";
import PropTypes from "prop-types";

const BackDropCustom = ({loading}) => {
    return (
        <Backdrop
            sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={loading}
        >
            <CircularProgress color="inherit"/>
        </Backdrop>
    );
};

BackDropCustom.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default BackDropCustom;