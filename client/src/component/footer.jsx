import React from 'react';
import ComputerSharpIcon from '@material-ui/icons/ComputerSharp';
import { AppBar, Typography, Toolbar, IconButton} from '@material-ui/core';

import style from './style';

const Footer = () => {
    const classes = style();
    return (
        <>
            <div>
            <AppBar position="static" className={classes.FooterBColor}>
                <Toolbar>
                    <IconButton edge="start">
                        <ComputerSharpIcon />
                    </IconButton>
                    <Typography variant="subtitle2" align="center">
                        Developed By:{" "}<span className={classes.FooterName}>Shubham Routh</span>, Using <i className="fab fa-react" style={{color:"blue"}} /> React JS, integrated with MongoDB &amp; Powered by Express.Js
                    </Typography>
                </Toolbar>
            </AppBar>
            </div>
        </>
    )
}

export default Footer;