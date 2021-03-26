import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles, Card } from '@material-ui/core'
// import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
// import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchIcon from '@material-ui/icons/Search';
import SchoolIcon from '@material-ui/icons/School';
import React from 'react'




const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
        width: 'auto',
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(2)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: 'theme.spacing(1)'
        }
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(0),
        color: '#00b8b8'
    },
}))

export default function Header() {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <div className={classes.pageIcon}>
                        <SchoolIcon fontSize="large" />
                    </div>
                    <h3>User Table</h3>

                    <Grid item>
                        <InputBase
                            placeholder="Search topics"
                            className={classes.searchInput}
                            startAdornment={<SearchIcon fontSize="small" />}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>

                        <IconButton className={classes.btn}>
                            <Badge>
                                <PersonIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        <IconButton className={classes.btn}>
                            <Badge>
                                <PersonAddIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge>
                                <PowerSettingsNewOutlinedIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
