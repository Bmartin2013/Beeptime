import React, { useEffect, useState } from "react";
import {
    Card,
    Grid
} from '@material-ui/core';
import styles from '../../assets/styles';

import { play } from "../../utils"
import Timer from "../../components/Timer"
import Form from "../../components/Form"
import { TIMER } from "../../constants"

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
                    <Timer 
                        message={`${counter} seconds to beep!`} />
                    <Form 
                        placeholder="Set seconds to beep"
                        label={!stopped ? "Stop" : "Start"}
                        handleOnChange={e => setDefaultValue(e.target.value)}
                        handleOnClick={() => setStopped(!stopped ? true : false)}/>
                </Grid>
            </Card>
        </>
    );
}
