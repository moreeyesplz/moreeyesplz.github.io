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
                <CardHeader className={classes.header} title="🏆 Tags/Filter"/>
               
            </CardContent>
        </Card>
    )
}