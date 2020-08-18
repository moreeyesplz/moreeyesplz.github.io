import React, { useState } from 'react';
import { AppBar, Toolbar, Avatar, makeStyles, Grid, Menu, MenuItem, Divider, Typography, Button, Popover, useMediaQuery } from '@material-ui/core';
// import {TextField, InputAdornment } from '@material-ui/core';
// import { Badge } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
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

export default function NavBar (props: {isUserActive: boolean, username?:string, avatarURL?:string, userURL?:string}){
    const classes = useStyles();
    const isTablet = useMediaQuery('(max-width:1000px');
    const isPhone = useMediaQuery('(max-width:600)');
    const [anchorMenu, setAnchorMenu] = useState(null);
    const [anchorIcon, setAnchorIcon] = useState(null);
    const [anchorTwitterIcon, setAnchorTwitterIcon] = useState(null);

    const loginNavTablet = isTablet ? 
    <Button color="inherit" href="https://github.com/marketplace/actions/meep-scanner"><GitHubIcon style={{marginLeft:"8px"}}/> </Button>
    :
    <Button variant="outlined" color="inherit" href="https://github.com/marketplace/actions/meep-scanner">GitHub MarketPlace <GitHubIcon style={{marginLeft:"8px"}}/> </Button>

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

    const handleTwitterPopoverOpen = (event : any) => {
        setAnchorTwitterIcon(event.currentTarget);
    };

    const handleTwitterPopoverClose = () => {
        setAnchorTwitterIcon(null);
    };

    const open = Boolean(anchorIcon);
    const openTwitter = Boolean(anchorTwitterIcon);

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    const displayNavBar = props.isUserActive ? 
        <Grid container alignItems="center" spacing={0}>
            <Grid item xs={3} onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}>
                <Icon />
            </Grid>
            <Grid item xs={6}>
                {/* <TextField 
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
                /> */}
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
                        <Typography variant="caption">GitHub Actions Marketplace</Typography>
                    </Popover>
                </Grid>
                <Grid item className={classes["icon-hover"]}
                    aria-owns={openTwitter ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    color="secondary"
                    onMouseEnter={handleTwitterPopoverOpen}
                    onMouseLeave={handleTwitterPopoverClose}
                    onClick={() => window.location.href="https://github.com/marketplace/actions/meep-scanner"}
                    >
                    <TwitterIcon className="nav-icon" />
                    <Popover
                        className={classes.popover}
                        classes={{paper: classes.paper}}
                        open={openTwitter}
                        anchorEl={anchorTwitterIcon}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        onClose={handleTwitterPopoverClose}
                        disableRestoreFocus>
                        <Typography variant="caption">Follow Us Twitter!</Typography>
                    </Popover>
                </Grid>
                {/* <Grid item className={classes["icon-hover"]}>
                    <Badge color="secondary" variant="dot" invisible={false}>
                        <NotificationsIcon className="nav-icon" />
                    </Badge>
                </Grid> */}
                <Grid item>
                    <Avatar src={props.avatarURL} alt={props.username} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
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
                        <MenuItem className={classes["MuiMenuItem-root"]} onClick={() => window.location.href=`${props.userURL}`}>
                            <Typography variant="button">Logged in as</Typography>
                            <Typography variant="h6">{props.username}<span role="img" aria-label="crown emoji">👑</span></Typography>
                            {/* <Typography>100 pts</Typography> */}
                        </MenuItem>
                        <Divider/>
                        {/* <MenuItem className={classes["menu-item"]} onClick={handleClose}>Messages</MenuItem>
                        <MenuItem className={classes["menu-item"]} onClick={handleClose}>My Posts</MenuItem>
                        <MenuItem className={classes["menu-item"]} onClick={handleClose}>Settings</MenuItem> */}
                        <MenuItem className={classes["menu-item"]} onClick={() => window.location.href=`${props.userURL}`}>My GitHub Profile</MenuItem>
                        <MenuItem className={classes["menu-item"]} onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </Grid>
        :
        <Grid container alignItems="center">
            <Grid item xs={3} onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}>
                <Icon />
            </Grid>
            <Grid item xs={9} container alignItems="center" justify="flex-end" spacing={3}>
                <Grid item>
                    {loginNavTablet}
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary" href="https://github.com/login/oauth/authorize?client_id=ac67cef96ff2922c4a3c">Login</Button>
                </Grid>
            </Grid>
        </Grid>
        


    return (
        <AppBar>
            <Toolbar>
                {displayNavBar}            
            </Toolbar>
        </AppBar>
    )
}