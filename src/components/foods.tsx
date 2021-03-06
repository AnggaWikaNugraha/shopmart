import * as React from 'react';
import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// import { foods } from '../data/foods'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/action/keranjang';
import { actMeals } from '../redux/action/meal';

export default function Foods() {

    const dispatch = useDispatch()
    const stateCategory = useSelector((state: any) => state.stateCategories)
    const stateMeals = useSelector((state: any) => state.stateMeals)

    React.useEffect(() => {
        dispatch(actMeals(stateCategory.category))
    }, [dispatch, stateCategory.category])

    const actSetKeranjang = (item: { strMeal: string, strMealThumb: string, idMeal: string }) => {
        dispatch(addItem(item))
    }
    return (
        <Grid container spacing={2}>
            {
                stateCategory.data.length ? stateMeals?.data.map((value: any, key: number) => {
                    return (
                        <Grid key={key} item xs={12} md={3}>
                            <Card sx={{ maxWidth: 345, margin: 'auto' }} >
                                <CardMedia
                                    component="img"
                                    height="220"
                                    image={value.strMealThumb}
                                    alt="Screen Foods"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">{value?.strMeal}</Typography>
                                    <Typography variant="body2" color="text.secondary">RP. {value?.idMeal}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Keranjang onClick={() => actSetKeranjang(value)} size="small">Add Keranjang</Keranjang>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                }) : <p>tidak ada data</p>
            }
        </Grid>
    );
}

const Keranjang = styled(Button)`
    font-size: 12px;
    text-transform: none;
`

const TitleChoosecategory = styled(Typography)`
    font-size: 18px;
`