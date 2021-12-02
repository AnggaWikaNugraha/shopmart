import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Container } from '@mui/material';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    boxShadow: 'none'
}));

const Drinks = React.lazy(() => import('../components/drinks'));
const Foods = React.lazy(() => import('../components/foods'));

export default function Beranda() {

    const [type, settype] = React.useState('foods')
    const actTypeFoods = () => {
        settype('foods')
    }
    const actTypeDrinks = () => {
        settype('drinks')
    }

    return (
        <Container maxWidth='xl' style={{ marginTop: '20px' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Item>
                            <NavSideBar isactive={type === 'foods' ? 'true' : 'false'} onClick={actTypeFoods}>Makanan</NavSideBar>
                            <NavSideBar isactive={type === 'drinks' ? 'true' : 'false'} onClick={actTypeDrinks}>Miinuman</NavSideBar>
                        </Item>
                    </Grid>
                    <Grid item xs={10}>
                        <Item>
                            {
                                type === 'foods' ? <React.Suspense fallback={<div>Loading...</div>}>
                                    <Foods />
                                </React.Suspense> : <React.Suspense fallback={<div>Loading...</div>}>
                                    <Drinks />
                                </React.Suspense>
                            }

                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

type INavbar = {
    isactive?: string
}

const NavSideBar = styled(Button) <INavbar>`
    background-color:${props => props.isactive === 'true' ? '#ebeb' : '#fff'};
    width: 100%;
    font-weight: 700;
    margin: 10px 0px;
`