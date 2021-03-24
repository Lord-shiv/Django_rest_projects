import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React from 'react'

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item sm={6} style={{ border: '1px solid #fff' }}>
                        <inputBase />
                    </Grid>
                    <Grid item sm={6} style={{ border: '1px solid #000' }}>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="secondary">
                                <MailOutlineIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="secondary">
                                <ExitToAppIcon />
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
