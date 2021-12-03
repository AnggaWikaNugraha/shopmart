import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: '#F7F7F7',
    boxShadow: 'none',
    padding: '46px 51px',
}));

const user = {
    email: 'user@gmail.com',
    password: '123'
}

const Login = () => {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            const userLogin = {
                email: values.email,
                password: values.password,
            }
            const eq = JSON.stringify(user) === JSON.stringify(userLogin)
            if (eq) {
                alert('login')
                localStorage.setItem("auth", JSON.stringify(userLogin));
                navigate('/carts')
            } else {
                alert('password/email salah')
            }
        },
    });

    return (
        <>
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Item sx={{ width: { xs: '100%', md: '40%', marginTop: '100px' } }}>
                                <Title fontSize={'25px'} fontWeight={'700'} >Login</Title>
                                <Form onSubmit={formik.handleSubmit}>

                                    <Title fontSize={'18px'} fontWeight={'400'} >Email</Title>
                                    <Field
                                        id="email"
                                        name="email"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        placeholder='Masukan email'
                                    />

                                    <Title fontSize={'18px'} fontWeight={'400'} >Password</Title>
                                    <Field
                                        id="password"
                                        name="password"
                                        type="password"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        placeholder='Masukan password'
                                    />

                                    <ButtonAuth type="submit">Masuk</ButtonAuth>
                                </Form>

                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </>
    )
}

export default Login
type IButton = {
    backgroundColor?: string
}

type ITitle = {
    color?: string;
    fontWeight?: string
    fontSize?: string
    textAlign?: string
}
const Title = styled(Typography) <ITitle>`
    color: ${props => props.color ? props.color : '#2F281E'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
    font-size: ${props => props.fontSize ? props.fontSize : '16px'};
    font-family: 'Poppins', sans-serif;
    text-align: ${props => props.textAlign ? props.textAlign : 'start'};
`

const Form = styled('form')`
    display: flex;
    flex-direction: column;
`

const Field = styled('input')`
    height: 48px;
    border-radius: 10px;
    border: 1px solid #5865F2;
    padding: 0px 23px;
    &:focus {
        outline: none;
    }
`

const ButtonAuth = styled(Button) <IButton>`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#5865F2'};
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    border-radius: 10px;
    font-weight: bold;
    width: 100%;
`
