import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function AppBarWeb() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Container maxWidth='xl'>
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Products
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
            <Outlet />
        </>
    );
}