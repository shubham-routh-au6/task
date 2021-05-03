import React from 'react';
import { Link } from "react-router-dom";
import { Container, CssBaseline, Button } from '@material-ui/core';

import style from './style';
import Header from './header';
import Footer from './footer';
import PieChart from './chart';



const Page2 = () => {
    const classes = style();

    return (
        <>
            <CssBaseline />
            <Header />
            <div className={classes.ContainerDiv}>
                <Container maxWidth="sm" className={classes.Container}>
                    <Link className={classes.Link} to="/page1">
                        <Button variant="outlined" color="primary">
                            Go to Page 1
                        </Button>
                    </Link>
                    <PieChart />
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Page2;