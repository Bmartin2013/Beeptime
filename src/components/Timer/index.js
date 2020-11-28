import React from "react";
import { Typography, Grid } from '@material-ui/core';

export default ({ message }) => {

    return (
        <>
            <Grid>
                <Typography variant="h5"> {message}</Typography>
            </Grid>
        </>
    );
}