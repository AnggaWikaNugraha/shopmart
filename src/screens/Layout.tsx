import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AppBarWeb() {

    const stateKeranjang = useSelector((state: any) => state.stateKeranjang);

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
                            <div>cart anda: {stateKeranjang.length > 0 ? stateKeranjang.length : 0}</div>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
            <Outlet />
        </>
    );
}