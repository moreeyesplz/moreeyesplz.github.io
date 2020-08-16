import React from 'react';
import { useState } from 'react';
import { Typography, Paper, List, ListItem, Button, Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        paddingLeft: 0,
    },
    "button-container": {
        display: "flex",
        alignItems: 'flex-end', 
        justifyContent: "center",
        padding: theme.spacing("16px", 0, "16px", 0),
    },
    button: {
        fontWeight: "bold",
    },
    divider: {
        margin: theme.spacing("28px", 0),
    },
    container: {
        padding: "16px",
        backgroundColor: "#f5f5f5",
    }
}));

export default function UserStats() {
    const classes = useStyles();
    
    return(
        <Paper elevation={0} className={classes.container}>
            <Typography variant="h5">✨ Code of Conduct</Typography>
            <div className={classes.divider}></div>
            <Typography>MEEP! Welcome to more eyes, plz!</Typography> 
            <br/>
            <Typography>Lorizzle crackalackin shiznit sit amizzle, doggy adipiscing elit. Nullizzle fo shizzle velizzle, uhuh ... yih! go to hizzle, bow wow wow things, gravida for sure, crunk. Brizzle shiznit tortizzle. Fo shizzle my nizzle erizzle. Pizzle izzle break yo neck, yall hizzle fizzle tempus tempor.</Typography>
            <br/>
            <Typography>Mauris pellentesque boom shackalack turpizzle:</Typography>
            <List>  
                <ListItem disableGutters>
                    1. Shizzlin dizzle izzle yo mamma.
                </ListItem>
                <ListItem disableGutters>
                    2. Pellentesque pot rhoncizzle i saw beyonces tizzles and my pizzle went crizzle.
                </ListItem>
                <ListItem disableGutters>
                    3. In hac habitasse platea dictumst.
                </ListItem>
            </List>
            <Typography>Izzle dapibizzle. Fo shizzle tellizzle urna, pretizzle eu, gangster break yo neck, yall, eleifend mammasay mammasa mamma oo sa, nunc. Sheezy suscipizzle. Crackalackin semper crazy sizzle purus. Shut the shizzle up interdum tellus. Ut gizzle adipiscing lorem. Fo shizzle mah nizzle fo rizzle, mah home g-dizzle non est. Sheezy sapizzle fizzle, ultricizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle, own yo' gangster, fermentizzle quizzle, . Funky fresh nizzle boofron. </Typography>
            <div className={classes["button-container"]}>
                <Button className={classes.button} variant="outlined" color="primary" fullWidth disableElevation>Read More</Button>
            </div>
        </Paper>
    )
}