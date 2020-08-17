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

    return (
        <Paper elevation={0} className={classes.container}>
            <Typography variant="h5">✨ Code of Conduct</Typography>
            <div className={classes.divider}></div>
            <Typography variant="h6">Offering a set of eyes?</Typography>
            <br />
            <List>
                <ListItem disableGutters>
                    1. Offer feedback and advice graciously
                </ListItem>
                <ListItem disableGutters>
                    2. Give justifications for why something should be done a particular way
                </ListItem>
                <ListItem disableGutters>
                    3. Exhibit patience and remember that asking for help is in and of itself an act of courage
                </ListItem>
            </List>
            <br />
            <Typography variant="h6">Requesting another set of eyes?</Typography>
            <br />
            <List>
                <ListItem disableGutters>
                    1. Respect the time of people offering feedback
                </ListItem>
                <ListItem disableGutters>
                    2. Avoid getting defensive
                </ListItem>
                <ListItem disableGutters>
                    3. Understand that those giving you feedback are not perfect
                </ListItem>
            </List>
            <br />
            <Typography variant="h6">General Commit Thread Rules</Typography>
            <br />
            <List>
                <ListItem disableGutters>
                    1. Refrain from posting any content that is NSFW, racist, profane, or discriminatory toward any people group
                </ListItem>
                <ListItem disableGutters>
                    2. Avoid posting any personal or identifying information of yourself or others
                </ListItem>
                <ListItem disableGutters>
                    3. Do not post any recruitment messages, spam, or ads
                </ListItem>
            </List>
        </Paper>
    )
}