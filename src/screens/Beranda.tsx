import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Container, Typography } from '@mui/material';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { actCategories, actSetCategory } from '../redux/action/categories';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    boxShadow: 'none'
}));

const Foods = React.lazy(() => import('../components/foods'));

export default function Beranda() {
    const dispatch = useDispatch()
    const stateCategories = useSelector((state: any) => state.stateCategories)

    const [type, settype] = React.useState('foods')

    const actTypeFoods = (value: string) => {
        dispatch(actSetCategory(value))
    }
    const actTypeDrinks = () => {
        settype('drinks')
    }

    React.useEffect(() => {
        dispatch(actCategories())
    }, [dispatch])

    return (
        <Container maxWidth='xl' style={{ marginTop: '20px' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Item>
                            <NavSideBar style={{ marginLeft: '-50px', fontSize: '20px' }}>Kategory</NavSideBar>
                            {
                                stateCategories?.data.map((value: any, key: number) => {
                                    return (
                                        <NavSideBar key={key} onClick={() => actTypeFoods(value?.strCategory)}>{value.strCategory}</NavSideBar>
                                    )
                                })
                            }
                        </Item>
                    </Grid>
                    <Grid item xs={10}>
                        <Item>
                            <Foods />
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