import React from 'react'
import { DinamicForm } from '../../component/form/DinamicForm'
import { HeaderBancanet } from './header/HeaderBancanet'
import {
  TopContainer, TitleWelcome, Date, List, Container, MainContainer,
  LoginContainer, StyledTextInput, StyledButton, ListUl, ContainerLeft, ContainerHeader, AsideRight, LinkRegister
} from './style/BancanetLogin'
import { useFormik } from 'formik';
import { FormSchema } from './LoginConstants';
import { fontSize, width } from '@mui/system';

import PersonIcon from '@mui/icons-material/Person';
import { Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import zIndex from '@mui/material/styles/zIndex';
import { DefaultButton } from '../../component/PolicyComponent/styles/PolicyStyles';
export const BancanetLogin = () => {

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {

      user: '',


    },
    validationSchema: FormSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const handleLogin = (formData) => {
    let response = {
      user: formData.user,

    }
    console.log('funciona')
    console.log(response)
  }

  const onRoute = () => {
    navigate("/register", {
      replace: true
    })
  }

  return (
    <Container>
      <ContainerHeader>
        <HeaderBancanet />
      </ContainerHeader>
      <MainContainer>

        <TopContainer >

          <TitleWelcome>
            Bienvenido(a) a  Bancanet.
          </TitleWelcome>


          <Date>  Miércoles, 16 de febrero de 2022</Date>


        </TopContainer>


        <ContainerLeft>
          <LoginContainer>
            <div style={{

              width: '99%', margin: '0 3px 0 3px',
              zIndex: 101,

              textAlign: 'center',
              height: '300px',
            }}>
              <div style={{
                width: '800px',
                display: 'flex', flexDirection: 'row',
                marginBottom: '25px'
              }}>

                <div style={{
                  color: 'rgb(0, 0, 0)',
                  padding: '18px 12px 0 8px',
                  top: 0,
                  left: 0,
                  width: '200px',
                  float: 'left',
                  textAlign: 'right',
                  alignItems: 'center',
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'row',

                  justifyContent: 'flex-end'
                }}>
                  <span style={{

                  }}><PersonIcon style={{
                    width: '43px',
                    height: '33px',

                  }} />
                  </span>

                  <span style={{
                    color: '#5a5a5a', fontSize: '17px', width: '43px',
                    height: '33px',
                  }}>Usuario</span>
                </div>

                <div style={{ color: '#5a5a5a', fontSize: '1.1em' }}>
                  <StyledTextInput
                    type='text'
                    placeholder="ingrese usuario"
                    id='user'
                    value={formik.values.user}
                    onChange={formik.handleChange}
                    error={formik.touched.user && Boolean(formik.errors.user)}
                    helperText={formik.touched.user && formik.errors.user}
                  />
                </div>






              </div>




              <div>
                <p style={{

                  color: '#777',


                }}>Puede utilizar el teclado virtual para ingresar su nombre de usuario</p>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',

                width: '100%',
                marginTop: '25px ',
                marginBottom: '20px',

              }}>

                <DefaultButton onClick={() => formik.handleSubmit()}>
                  Entrar
                </DefaultButton>




              </div>
              <div style={{
                color: '#1063b0',
                fontSize: '1em',
                display: 'flex', flexDirection: 'row',
                justifyContent: 'flex-end', textAlign: 'right', padding: '33px 18px 0 8px', height: '30px',
                marginLeft: '5px'
              }}>


                <p style={{ fontFamily: 'CalibriLight', fontSize: '16px', color: 'rgb(90, 90, 90)' }} >
                  Solicitud de acceso: </p>

                <LinkRegister >Empresa</LinkRegister>  |
                <LinkRegister onClick={onRoute}>Persona</LinkRegister>
              </div>
            </div>
          </LoginContainer>



        </ContainerLeft>




      </MainContainer>


    </Container >


  )
}
