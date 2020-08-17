import React, { useState } from 'react';
import { AppBar, Toolbar, TextField, InputAdornment, Avatar, Badge, makeStyles, Grid, Menu, MenuItem, Divider, Typography, Button, Popover } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import GitHubIcon from '@material-ui/icons/GitHub';
import Icon from './Logo/icon';

const useStyles = makeStyles((theme) => ({
    "icon-hover": {
        transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        borderRadius: "50%",
        "&:hover" : {
            backgroundColor: "#f5f5f5",
            "& > *" : {
                color: "#3f51b5"
            }
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
    },
    signUpButton:{
        margin: theme.spacing(0, .5),
    },
    loginButton:{
        margin: theme.spacing(0, .5),
        color: "white",
        borderColor: "white"
    },
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(0, 1),
    },
}));

export default function NavBar (props: {isUserActive: boolean}){
    const classes = useStyles();
    const [anchorMenu, setAnchorMenu] = useState(null);
    const [anchorIcon, setAnchorIcon] = useState(null);

    const handleClick = (event: any) => {
        setAnchorMenu(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorMenu(null);
    };

    const handlePopoverOpen = (event : any) => {
        setAnchorIcon(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorIcon(null);
    };

    const open = Boolean(anchorIcon);

    const displayUserActions = props.isUserActive ? 
        <Grid item>
            <Avatar alt="username" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
            <Menu
                className={classes.menu}
                anchorEl={anchorMenu}
                keepMounted
                open={Boolean(anchorMenu)}
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
                <MenuItem className={classes["menu-item"]} onClick={handleClose}>My Posts</MenuItem>
                <MenuItem className={classes["menu-item"]} onClick={handleClose}>Settings</MenuItem>
                <MenuItem className={classes["menu-item"]} onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </Grid>
        :
        <Grid item>
            <Button variant="outlined" className={classes.loginButton} onClick={() => window.location.href="https://github.com/login/oauth/authorize?client_id=ac67cef96ff2922c4a3c"}>Login</Button>
            <Button variant="contained" color="secondary" className={classes.signUpButton}  onClick={() => window.location.href="https://github.com/login/oauth/authorize?client_id=ac67cef96ff2922c4a3c"}>Sign Up</Button>
        </Grid>

    const displaySearchBar = props.isUserActive ?
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
        :
        null

    return (
        <AppBar>
            <Toolbar>
                <Grid container alignItems="center" spacing={0}>
                    <Grid item xs={3}>
                        <Icon />
                    </Grid>
                    <Grid item xs={6}>
                        {displaySearchBar}
                    </Grid>                    
                    <Grid item xs={3} container alignItems="center" justify="flex-end" spacing={3}>
                        <Grid item className={classes["icon-hover"]}
                            aria-owns={open ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            color="secondary"
                            onMouseEnter={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose}
                            onClick={() => window.location.href="https://github.com/marketplace/actions/meep-scanner"}
                            >
                            <GitHubIcon className="nav-icon" />
                            <Popover
                                className={classes.popover}
                                classes={{paper: classes.paper}}
                                open={open}
                                anchorEl={anchorIcon}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                onClose={handlePopoverClose}
                                disableRestoreFocus>
                                <Typography variant="caption">GitHub Store Page</Typography>
                            </Popover>
                        </Grid>
                        <Grid item className={classes["icon-hover"]}>
                            <Badge color="secondary" variant="dot" invisible={false}>
                                <NotificationsIcon className="nav-icon" />
                            </Badge>
                        </Grid>                        
                        {displayUserActions}
                    </Grid>
                </Grid>
                
            </Toolbar>
        </AppBar>
    )
}