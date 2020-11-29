import React from "react";
import { Typography, Grid } from '@material-ui/core';

import styles from '../../assets/styles';

export default ({ message }) => {
    const classes = styles();
    return (
        <>
            <Grid item xs={12}>
                <Typography className={classes.buttonsContainer} variant="h5"> {message}</Typography>
            </Grid>
        </>
    );
}