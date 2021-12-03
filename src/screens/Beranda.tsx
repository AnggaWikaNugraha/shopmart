import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Container, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

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
    const BtnSetCategory = (value: string) => { dispatch(actSetCategory(value)) }
    const [view, setView] = React.useState('Beef');

    const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
        setView(nextView);
    };

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

                            <ToggleButtonGroup
                                orientation="vertical"
                                value={view}
                                exclusive
                                onChange={handleChange}
                            >
                                {
                                    stateCategories?.data.map((value: any, key: number) => {
                                        return (
                                            <ToggleButton onClick={() => BtnSetCategory(value?.strCategory)} value={value.strCategory} aria-label={value.strCategory}>
                                                {value.strCategory}
                                            </ToggleButton>
                                        )
                                    })
                                }

                            </ToggleButtonGroup>

                        </Item>
                    </Grid>
                    <Grid item xs={10}>
                        <Item>
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <Foods />
                            </React.Suspense>
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