import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import { Field, Form, Formik, FormikProps } from 'formik';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getProvincies } from '../api/wilayah';

const Checkout = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Container maxWidth='xl' style={{ marginTop: '20px' }}>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
                <Grid container spacing={2} xs={4}>

                    <Formik
                        initialValues={{
                            provinsi: 0
                        }}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                actions.setSubmitting(false);
                            }, 1000);
                        }}
                    >
                        {(props: FormikProps<any>) => (
                            <Form style={{ width: '100%' }}>
                                <Box>

                                    <FormGroup>
                                        <Gap height={'20px'} />
                                        <Title fontSize={'18px'} fontWeight={'400'} >Pilih Provinsi</Title>
                                        <Gap height={'5px'} />
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="Age"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </FormGroup>

                                    <FormGroup>
                                        <Gap height={'20px'} />
                                        <Title fontSize={'18px'} fontWeight={'400'} >Pilih Kota</Title>
                                        <Gap height={'5px'} />
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="Age"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </FormGroup>

                                    <BtnCheckout>
                                        Checkout
                                    </BtnCheckout>

                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Box>
        </Container>
    )
}

export default Checkout

type IGap = {
    width?: string;
    height?: string;
}

type ITitle = {
    color?: string;
    fontWeight?: string;
    fontSize?: string;
    textAlign?: string
}

export const Gap = styled('div') <IGap>`
    width: ${props => props.width ? props.width : '0px'};
    height: ${props => props.height ? props.height : '0px'};
`

const Title = styled(Typography) <ITitle>`
    color: ${props => props.color ? props.color : '#2F281E'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
    font-size: ${props => props.fontSize ? props.fontSize : '16px'};
    font-family: 'Poppins', sans-serif;
    text-align: ${props => props.textAlign ? props.textAlign : 'start'};
`

const FieldCus = styled('input')`
    height: 48px;
    width: 100%;
    border-radius: 10px;
    padding: 0px 23px;
    &:focus {
        outline: none;
    }
`

const FormGroup = styled('div')`
    width: 100%;
`
const BtnCheckout = styled(Button)`
    background-color: #3412fd;
    color: white;
    width: 100%;
    margin-top: 20px;
`