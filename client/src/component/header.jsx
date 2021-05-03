import React from 'react';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { AppBar, Typography, Toolbar, IconButton } from '@material-ui/core';

import style from './style';

const Header = () => {
    const classes = style();
    return (
        <>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton edge="start">
                        <PermIdentityIcon className={classes.Icon} />
                    </IconButton>
                    <Typography variant="h6">
                        Dev Profile
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;