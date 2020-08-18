import React from 'react';
import { Typography, Paper, List, ListItem, Divider,makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        margin: theme.spacing("28px", 0),
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
            <Typography variant="h5" className={classes.header}><span role="img" aria-label="sparkle">✨</span> Code of Conduct</Typography>
            <Divider />
            <div className={classes.divider}></div>
            <Typography variant="h6">Offering a set of eyes?</Typography>
            <List>
                <ListItem disableGutters>
                    <Typography>1. Offer feedback and advice graciously</Typography>
                </ListItem>
                <ListItem disableGutters>
                    <Typography>2. Give justifications for why something should be done a particular way</Typography>
                </ListItem>
                <ListItem disableGutters>
                    <Typography>3. Exhibit patience and remember that asking for help is in and of itself an act of courage</Typography>
                </ListItem>
            </List>
            <br />
            <Typography variant="h6">Requesting another set of eyes?</Typography>
            <List>
                <ListItem disableGutters>
                    <Typography>1. Respect the time of people offering feedback</Typography>
                </ListItem>
                <ListItem disableGutters>
                    <Typography>2. Avoid getting defensive</Typography>
                </ListItem>
                <ListItem disableGutters>
                    <Typography>3. Understand that those giving you feedback are not perfect</Typography>
                </ListItem>
            </List>
            <br />
            <Typography variant="h6">General Commit Thread Rules</Typography>
            <List>
                <ListItem disableGutters>
                    <Typography>1. Refrain from posting any content that is NSFW, racist, profane, or discriminatory toward any people group</Typography>
                </ListItem>
                <ListItem disableGutters>
                    <Typography>2. Avoid posting any personal or identifying information of yourself or others</Typography>
                </ListItem>
                <ListItem disableGutters>
                    <Typography>3. Do not post any recruitment messages, spam, or ads</Typography>
                </ListItem>
            </List>
        </Paper>
    )
}