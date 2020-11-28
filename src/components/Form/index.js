import React from "react";
import {
    Grid,
    TextField,
    Button
} from '@material-ui/core';

import styles from '../../assets/styles';

export default ({ placeholder,label, handleOnChange, handleOnClick }) => {

    const classes = styles();

    return (
        <>
            <Grid xs={12} className={classes.buttonsContainer}>
                <TextField
                    color="secondary"
                    className={classes.textField}
                    placeholder={placeholder}
                    onChange={handleOnChange}>
                </TextField>
            </Grid>
            <Grid xs={12} className={classes.buttonsContainer}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOnClick}>
                    {label}
                </Button>
            </Grid>
        </>
    );
}
