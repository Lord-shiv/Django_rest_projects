import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core";


const style = ({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0',
        width: '320px',
        height: '100%',
        backgroundColor: '#20b2aa'
        // #0fc0fc
    }
})


const SideMenu = (props) => {
    const { classes } = props;
    return (
        <div className={classes.sideMenu}>

        </div>
    )
}


export default withStyles(style)(SideMenu);