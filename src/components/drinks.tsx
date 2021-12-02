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

import { drinks } from '../data/drink'

export default function Drinks() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {
                    drinks?.map((value, key) => {
                        return (
                            <Grid key={key} item xs={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        alt="Screen Foods"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">{value?.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">RP. {value?.harga}.00</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Keranjang size="small">Add Keranjang</Keranjang>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    );
}

const Keranjang = styled(Button)`
    font-size: 12px;
    text-transform: none;
`