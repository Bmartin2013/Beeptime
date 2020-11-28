import React, { useEffect, useState } from "react";
import { play } from "../../utils"
import Timer from "../../components/Timer"
import { TIMER } from "../../constants"
import {
    Card,
    Grid,
    TextField,
    Button
} from '@material-ui/core';
import styles from './styles';

export default () => {
    const [defaultValue, setDefaultValue] = useState(60);
    const [counter, setCounter] = useState(defaultValue);
    const [stopped, setStopped] = useState(true);
    const classes = styles();

    useEffect(() => {
        setCounter(defaultValue)
    }, [defaultValue]);

    useEffect(() => {
        if (!stopped) {
            if (counter > 0)
                setTimeout(() => setCounter(counter - 1), 1000)
            else {
                play(TIMER.DEFAULT_BEEP_SOUND)
                setCounter(defaultValue);
            }
        }

    }, [counter, stopped]);

    return (
        <>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Timer message={`${counter} seconds to beep!`} />
                    <TextField
                        color="secondary"
                        className={classes.textField}
                        placeholder={"Set your time in seconds"}
                        onChange={e => setDefaultValue(e.target.value)}>
                    </TextField>
                    <Grid className={classes.buttonsContainer}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setStopped(!stopped ? true : false)}>
                            {!stopped ? "Stop" : "Start"}
                        </Button>
                    </Grid>
                </Grid>

            </Card>
        </>
    );
}
