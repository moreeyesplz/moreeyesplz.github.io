import React from 'react';
import { AppBar, Toolbar, TextField, InputAdornment, Avatar, Badge, makeStyles, Grid, Menu, MenuItem, Divider, Typography, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import GitHubIcon from '@material-ui/icons/GitHub';
import Icon from './Logo/icon';

const useStyles = makeStyles((theme) => ({
    "icon-hover": {
        transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        borderRadius: "50%",
        "&:hover" : {
            // backgroundColor: "rgba(255, 20, 147, .5)",
            backgroundColor: "rgba(64, 224, 208, .5)"
        }
    },
    menu: {
        marginTop: "70px",
    },
    "menu-item":{
        minWidth: "200px",
        transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        "&:hover": {
            backgroundColor: "rgba(63, 81, 181, .05)",
        }
    },
    "MuiMenuItem-root": {
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "flex-start"
    }
}));

export default function NavBar (){
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <AppBar>
            <Toolbar>
                <Grid container alignItems="center" spacing={0}>
                    <Grid item xs={3}>
                        <Icon />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                            fullWidth
                            placeholder="Search..."
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>                    
                    <Grid item xs={3} container alignItems="center" justify="flex-end" spacing={3}>
                        <Grid item className={classes["icon-hover"]}>
                            <GitHubIcon />
                        </Grid>
                        <Grid item className={classes["icon-hover"]}>
                            <Badge color="secondary" variant="dot" invisible={false}>
                                <NotificationsIcon />
                            </Badge>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="secondary">Login</Button>
                        </Grid>
                        <Grid item>
                            <Avatar alt="username" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
                            <Menu
                                className={classes.menu}
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <MenuItem className={classes["MuiMenuItem-root"]} onClick={handleClose}>
                                    <Typography variant="h6" >Duchess-Toffee</Typography>
                                    <Typography>100 pts</Typography>
                                </MenuItem>
                                <Divider/>
                                <MenuItem className={classes["menu-item"]} onClick={handleClose}>Messages</MenuItem>
                                <MenuItem className={classes["menu-item"]} onClick={handleClose}>Settings</MenuItem>
                                <MenuItem className={classes["menu-item"]} onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Toolbar>
        </AppBar>
    )
}