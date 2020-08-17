import React from 'react';
import { Button, ButtonBase, Card, CardHeader, CardContent, List, ListItem, ListItemText, Divider, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        paddingLeft: 0,
    },
    "button-container": {
        display: "flex",
        alignItems: 'flex-end', 
        justifyContent: "center",
    },
    button: {
        fontWeight: "bold",
    },
    "MuiCardContent-root": {
        '&:last-child' :{
            paddingBottom: 0,
        }  
    },
    "message-button": {
        width: "100%",
        padding: "8px",
        transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        "&:hover": {
            backgroundColor: "rgba(63, 81, 181, .05)",
        }
    },
    "no-padding": {
        padding: theme.spacing(0),
    },
    text: {
        textAlign: "left",
        "&:hover":{
            color: "#3f51b5"
        }
    }
}));


export default function UserStats() {
    const classes = useStyles();


    return(
        <Card elevation={0}>
            <CardContent className={classes["MuiCardContent-root"]}>
                <CardHeader className={classes.header} title="📮 Messages"/>
                <Divider light/>
                <List disablePadding>
                    <ListItem className={classes["no-padding"]} disableGutters>
                        <ButtonBase className={classes["message-button"]} color="primary">
                            <ListItemText className={classes.text}
                                primary="Sparkles ✨"
                                secondary=" (+10p)"
                            />
                        </ButtonBase>
                    </ListItem>
                    <Divider light/>
                    <ListItem className={classes["no-padding"]} disableGutters>
                        <ButtonBase className={classes["message-button"]}>
                            <ListItemText className={classes.text}
                                primary="You're on Fire! 🔥"
                                secondary="Commented on 5+ posts in the last 24 hours. (+10p)"
                            />
                        </ButtonBase>
                    </ListItem>
                    <Divider light/>
                    <ListItem className={classes["no-padding"]} disableGutters>
                        <ButtonBase className={classes["message-button"]}>
                            <ListItemText className={classes.text}
                                primary="Unicorn 🦄"
                                secondary=" (+10p)"
                            />
                        </ButtonBase>
                    </ListItem>
                    <Divider light/>
                    <ListItem className={classes["no-padding"]} disableGutters>
                        <ButtonBase className={classes["message-button"]}>
                            <ListItemText className={classes.text}
                                primary="Many Thanks! 🙌"
                                secondary="You've been thanked! (+5p)"
                            />
                        </ButtonBase>
                    </ListItem>
                    <Divider light/>
                    <ListItem className={classes["no-padding"]} disableGutters>
                        <ButtonBase className={classes["message-button"]}>
                            <ListItemText className={classes.text}
                                primary="Key to Success! 🔑"
                                secondary="Requested help 10 times. (+5p)"
                            />
                        </ButtonBase>
                    </ListItem>
                    <Divider light/>
                    <ListItem className={classes["no-padding"]} disableGutters>
                        <ButtonBase className={classes["message-button"]}>
                            <ListItemText className={classes.text}
                                primary="You Got Comments! 👀"
                                secondary="Someone has commented on your commit."
                            />
                        </ButtonBase>
                    </ListItem>
                    <Divider light/>
                    <ListItem className={classes["no-padding"]} disableGutters>
                        <ButtonBase className={classes["message-button"]}>
                            <ListItemText className={classes.text}
                                primary="Congrats! 🎉"
                                secondary=" (+10p)"
                            />
                        </ButtonBase>
                    </ListItem>
                    <Divider light/>
                    <ListItem disableGutters className={classes["button-container"]}>
                        <Button className={classes.button} color="primary" fullWidth disableElevation>Go to Inbox</Button>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    )
}