
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

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
                                            <Typography variant="body2" color="text.secondary">Berat : {value?.weight}</Typography>
                                            <Typography variant="body2" color="text.secondary">RP. {value?.harga}.00</Typography>
                                            <Typography variant="body2" color="text.secondary">Jumlah : {value?.qty}</Typography>
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
                    <Link to={'/checkout'} style={{ color: 'white', textDecoration: 'none', width: '100%' }}>
                        <BtnCheckout>
                            Checkout
                        </BtnCheckout>
                    </Link>
                </Grid>
            </Box>
        </Container>
    )
}

export default Carts

const BtnCheckout = styled(Button)`
    background-color: #3412fd;
    color: white;
    width: 100%;
`
