
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { sumPrice } from '../utils/sumTotal';

const Carts = () => {

    const stateKeranjang = useSelector((state: any) => state.stateKeranjang);
    const actBayar = () => {
        if (stateKeranjang.length > 0) {

        } else {
            alert('Silahkan Pilih makanan di beranda')
        }
    }
    return (
        <Container maxWidth='xl' style={{ marginTop: '20px' }}>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
                <Grid container spacing={2} xs={7}>
                    {
                        stateKeranjang?.map((value: any, key: number) => {
                            return (
                                <Grid key={key} item xs={4}>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            component="img"
                                            height="220"
                                            image={value.strMealThumb}
                                            alt="Screen Foods"
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">Foods : {value?.strMeal}</Typography>
                                            <Typography variant="body2" color="text.secondary">harga : Rp. {value?.idMeal}</Typography>
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
                    <Typography variant='h5' sx={{ marginBottom: '20px' }} >Total : {sumPrice(stateKeranjang)}</Typography>
                    <BtnCheckout onClick={() => actBayar()}>
                        bayar
                    </BtnCheckout>
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
