import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Alert, Container, Stack } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';

export default function AppBarWeb() {

    const stateKeranjang = useSelector((state: any) => state.stateKeranjang);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Container maxWidth='xl'>
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <Link to={'/'} style={{ color: 'white', textDecoration: 'none' }}>
                                    Products
                                </Link>
                            </Typography>

                            <Button color="inherit">Login</Button>
                            <Link to={'/carts'} style={{ color: 'white', textDecoration: 'none' }}>
                                <div style={{ display: 'flex' }}>
                                    <ShoppingCartIcon />
                                    <Count>
                                        {stateKeranjang.length > 0 ? stateKeranjang.length : 0}
                                    </Count>
                                </div>
                            </Link>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
            <Outlet />
        </>
    );
}

const Count = styled('div')`
    margin-top: -10px;
`

export const BasicAlerts = (props: { message: string }) => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">{props.message}</Alert>
        </Stack>
    );
}