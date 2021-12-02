import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
}));

export default function Beranda() {
    return (
        <Container maxWidth='xl' style={{ marginTop: '20px' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Item>
                            <NavSideBar>Makanan</NavSideBar>
                            <NavSideBar>Miinuman</NavSideBar>
                        </Item>
                    </Grid>
                    <Grid item xs={10}>
                        <Item>xs=4</Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

const NavSideBar = styled(Button)`
    background-color:#ebebeb;
    width: 100%;
    font-weight: 700;
    margin: 10px 0px;
`