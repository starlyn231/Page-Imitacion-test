import React from 'react'
import { DinamicForm } from '../../component/form/DinamicForm'
import { HeaderBancanet } from './header/HeaderBancanet'
import {
  TopContainer, TitleWelcome, Date, List, Container, MainContainer,
  LoginContainer, StyledTextInput, StyledButton, ListUl
} from './style/BancanetLogin'
import { useFormik } from 'formik';
import { FormSchema } from './LoginConstants';
import { fontSize } from '@mui/system';

import PersonIcon from '@mui/icons-material/Person';
import { Grid } from '@mui/material';
export const BancanetLogin = () => {


  const formik = useFormik({
    initialValues: {

      user: 'starlynFernandez',
      password: 'Starlyn231',

    },
    validationSchema: FormSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const handleLogin = (formData) => {
    let response = {
      citizen_id: formData.id,
      password: formData.password,
    }
    console.log(response)
  }
  return (
    <Container>
      <HeaderBancanet />

      <TopContainer >
        <Grid item xs={6} sm={6} md={6}>
          <TitleWelcome>
            Bienvenido(a) a  Bancanet.
          </TitleWelcome>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Date>  Miércoles, 16 de febrero de 2022</Date>

        </Grid>
      </TopContainer>
      <MainContainer>
        <LoginContainer>
          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '25px' }}>
            <div style={{

              padding: '18px 12px 0 8px',
              top: 0,
              left: 0,
              width: '200px',
              float: 'left',
              textAlign: 'right',
              listStyle: 'none'
            }}>
              <span style={{
                margin: '5px', width: '33px',
                height: '33px',
                position: 'relative',
                top: '-5px',
                right: '10px'
              }}><PersonIcon /></span>
              <span style={{ color: '#5a5a5a', fontSize: '1.1em' }}>usuario</span>
            </div>

            <div style={{ color: '#5a5a5a', fontSize: '1.1em' }}>
              <StyledTextInput
                type='text'
                placeholder="ingrese usuario"
                id='id'
                value={formik.values.id}
                onChange={formik.handleChange}
                error={formik.touched.id && Boolean(formik.errors.id)}
                helperText={formik.touched.id && formik.errors.id}
              />
            </div>

          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{

              padding: '18px 12px 0 8px',
              top: 0,
              left: 0,
              width: '200px',
              float: 'left',
              textAlign: 'right',
              listStyle: 'none'
            }}>
              <span style={{
                margin: '5px', width: '33px',
                height: '33px',
                position: 'relative',
                top: '-5px',
                right: '10px'
              }}><PersonIcon /></span>
              <span style={{ color: '#5a5a5a', fontSize: '1.1em' }}>usuario</span>
            </div>

            <div style={{ color: '#5a5a5a', fontSize: '1.1em' }}>
              <StyledTextInput
                type='text'
                placeholder="ingrese usuario"
                id='id'
                value={formik.values.id}
                onChange={formik.handleChange}
                error={formik.touched.id && Boolean(formik.errors.id)}
                helperText={formik.touched.id && formik.errors.id}
              />
            </div>

          </div>

          <div>
            <p style={{
              display: 'block',
              color: '#777',
              marginLeft: '207px',
              marginTop: '25px'
            }}>Puede utilizar el teclado virtual para ingresar su nombre de usuario</p>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',

            width: '73%'
          }}>
            <StyledButton onClick={() => formik.handleSubmit()}>
              Entrar
            </StyledButton>
          </div>
        </LoginContainer>
      </MainContainer >
    </Container >


  )
}
