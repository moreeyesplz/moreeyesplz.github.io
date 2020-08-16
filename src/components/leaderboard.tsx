import React from 'react';
import { Button, Card, CardContent, CardHeader, List, ListItem, ListItemText, ListItemAvatar, Avatar, makeStyles, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    'avatar-spacing': {
        minWidth: "30px",
    },
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
    divider: {
        marginTop: "8px",
    },
    username: {
        transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        "&:hover":{
            color: "#f50057",
            cursor: "pointer",
        }
    }
}));


export default function UserStats() {
    const classes = useStyles();

    return(
        <Card>
            <CardContent className={classes["MuiCardContent-root"]}>
                <CardHeader className={classes.header} title="🏆 Leaderboard"/>
                <Divider light/>
                <List>
                    <ListItem disableGutters>
                        <ListItemAvatar className={classes['avatar-spacing']}>
                            <Avatar className={classes.small} src=""/>
                        </ListItemAvatar>
                        <ListItemText className={classes.username}
                            primary="jeremyong 🥇"
                        />
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemAvatar className={classes['avatar-spacing']}>
                            <Avatar className={classes.small} src=""/>
                        </ListItemAvatar>
                        <ListItemText className={classes.username}
                            primary="duchess-toffee 🥈"
                        />
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemAvatar className={classes['avatar-spacing']}>
                            <Avatar className={classes.small} src=""/>
                        </ListItemAvatar>
                        <ListItemText className={classes.username}
                            primary="Elmo 🥉"
                        />
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemAvatar className={classes['avatar-spacing']}>
                            <Avatar className={classes.small} src=""/>
                        </ListItemAvatar>
                        <ListItemText className={classes.username}
                            primary="Oscar the Grouch"
                        />
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemAvatar className={classes['avatar-spacing']}>
                            <Avatar className={classes.small} src=""/>
                        </ListItemAvatar>
                        <ListItemText className={classes.username}
                            primary="Cookie Monster"
                        />
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemAvatar className={classes['avatar-spacing']}>
                            <Avatar className={classes.small} src=""/>
                        </ListItemAvatar>
                        <ListItemText className={classes.username}
                            primary="Big Bird"
                        />
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemAvatar className={classes['avatar-spacing']}>
                            <Avatar className={classes.small} src=""/>
                        </ListItemAvatar>
                        <ListItemText className={classes.username}
                            primary="Bert"
                        />
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemAvatar className={classes['avatar-spacing']}>
                            <Avatar className={classes.small} src=""/>
                        </ListItemAvatar>
                        <ListItemText className={classes.username}
                            primary="Ernie"
                        />
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemAvatar className={classes['avatar-spacing']}>
                            <Avatar className={classes.small} src=""/>
                        </ListItemAvatar>
                        <ListItemText className={classes.username}
                            primary="The Count"
                        />
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemAvatar className={classes['avatar-spacing']}>
                            <Avatar className={classes.small} src=""/>
                        </ListItemAvatar>
                        <ListItemText className={classes.username}
                            primary="Snuffleupagus"
                        />
                    </ListItem>
                    <Divider className={classes.divider} light/>
                    <ListItem disableGutters className={classes["button-container"]}>
                        <Button className={classes.button} color="primary" fullWidth disableElevation>See Full Leaderboard</Button>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    )
}