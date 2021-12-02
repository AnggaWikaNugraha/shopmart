import { styled } from '@mui/material/styles';
import { Box, Card, CardActions, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    boxShadow: 'none'
}));

const Carts = () => {

    const stateKeranjang = useSelector((state: any) => state.stateKeranjang);

    return (
        <Container maxWidth='xl' style={{ marginTop: '20px' }}>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
                <Grid container spacing={2} xs={7}>
                    {
                        stateKeranjang?.map((value: any, key: number) => {
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
                                            <Typography gutterBottom variant="h5" component="div">Berat : {value?.weight}</Typography>
                                            <Typography variant="body2" color="text.secondary">RP. {value?.harga}.00</Typography>
                                            <Typography variant="body2" color="text.secondary">{value?.qty}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <Grid container xs={4} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginLeft: '50px' }}>
                    <Typography variant='h5' sx={{ marginBottom: '20px' }} >Keranjang anda : {stateKeranjang?.length > 0 ? stateKeranjang.length : 0}</Typography>
                    <Typography variant='h5' sx={{ marginBottom: '20px' }} >Berat : {stateKeranjang?.length > 0 ? stateKeranjang.length : 0}</Typography>
                    <Typography variant='h5' sx={{ marginBottom: '20px' }} >Total : {stateKeranjang?.length > 0 ? stateKeranjang.length : 0}</Typography>

                </Grid>
            </Box>
        </Container>
    )
}

export default Carts
