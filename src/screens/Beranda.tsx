import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Container } from '@mui/material';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { actCategories, actSetCategory } from '../redux/action/categories';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    boxShadow: 'none'
}));

const Drinks = React.lazy(() => import('../components/drinks'));
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