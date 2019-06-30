import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import {Home} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    toolbar: {
        margin: '0 20%'
    },
    title: {
        flexGrow: 1,
        width: '20%'
    },
    button: {
      marginRight: theme.spacing(2),
    },
    link: {
        margin: theme.spacing(1),
    },
    menu: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
  }));

const Header = (props) => {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <AppBar color="default">
            <Toolbar className={classes.toolbar}>
                <IconButton edge="start" className={classes.button} color="inherit"     aria-label="Home">
                    <Home></Home>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Ashwini Manoj
                </Typography>
                <Grid container direction="row" justify="flex-end" alignItems="center">
                    <Grid item>
                        <MenuItem>Home</MenuItem>
                    </Grid>
                    <Grid item>
                        <MenuItem>About Me</MenuItem>
                    </Grid>
                    <Grid item>
                        <MenuItem>Contact Me</MenuItem>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </div>);
}

export default Header;