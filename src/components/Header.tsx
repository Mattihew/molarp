import * as React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1
    },
    icon:{
        color: theme.palette.primary.contrastText
    }
}));

export default () => {

    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position='static' >
                <Toolbar>
                    <IconButton className={classes.icon} edge='start'>
                        <MenuIcon/>
                    </IconButton>
                    <Typography>MOLARP</Typography>
                    <div className={classes.grow}/>
                    <IconButton className={classes.icon}>
                        <Badge badgeContent={(Math.random()*100).toFixed()} color='secondary'>
                            <MailIcon/>
                        </Badge>
                    </IconButton>
                    <IconButton className={classes.icon} edge='end'>
                        <AccountCircle/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
