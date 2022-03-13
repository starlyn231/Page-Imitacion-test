import React from 'react'
import { HeaderBancanet } from '../header/HeaderBancanet'
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useFormik } from 'formik';
import { Button, Grid } from '@mui/material';
import {
  ButtonSaveContainer, Container, FieldTitle,
  MediumHeightDivider, Row, StyledButtonOutlined, StyledTextInput, ContentContainer,
  TextInput, TopContainer, UserDataContainer, TableContainer,
  TableBody,
  TableTr,
  TableTd,
  TableLabel,
  ConteinInput,
  ButtonRegister,
  UlTableContainer,
  SmallHeightDivider
} from './style/Register';
import { FormSchema } from '../LoginConstants';
import axios from 'axios';
import backContentGenericMid from '../../../asset/image/backContentGenericMid.png'
export const Register = () => {


  const formik = useFormik({
    initialValues: {
      //DEVELOPMENT COMMENT OR REMOVE
      user: '',
      password: '',
      firstName: "",
      id: '',
      lastName: '',
      email: '',
      //rol: 'User'


      /* PRODUCTION
            id: '',
            password: '' */
    },
    validationSchema: FormSchema,
    // validateOnChange: true,
    // validateOnBlur: true,
    onSubmit: (values) => {
      handleRegister(values);
    },

  });
  const handleRegister = async (formData) => {


    let response = await axios.post('http://localhost:3000/register', {
      user: formData.user,
      password: formData.password,
      id: formData.id,
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
    })
    console.log(response);
    /*
   //console.log(response);
   console.log('register function')
   /* let response = {
     user: formData.user,
     password: formData.password,
     id: formData.id,
     email: formData.email,
     firstName: formData.firstName,
     lastName: formData.lastName,
   }
   console.log(response);*/

  }

  return (
    <Container>
      <HeaderBancanet />
      <TopContainer>
        <UserDataContainer>
          <h3 style={{ fontSize: '1.3em', color: '#838181', textShadow: '0 1px 1px #fff', padding: '17px 10px 0 40px' }}>Solicitud de Bancanet</h3>
        </UserDataContainer>

      </TopContainer>


      <UlTableContainer>
        <li style={{
          minHeight: '5px',
          listStyle: 'none',
          display: 'block',
          paddin: '0 25px 2px 25pxs'
        }}>
          <li style={{ height: '450px', float: 'left', listStyle: 'none', }}>
            {/* <h3 style={{
              width: '550px', margin: '20px 25px 0 25px',

              fontSize: '1.1em',
              fontFamily: 'CalibriRegular',
              fontWeight: 'normal',
              paddingBottom: ' 5px',
              marginBottom: '10px'

            }}

            >
              Complete su información
            </h3>
            */ }

            <SmallHeightDivider />

            <TableContainer >
              <tbody style={{
                display: 'table-row-group',
                verticalAlign: 'middle',
                borderColor: 'inherit'
              }}>

                <tr style={{
                  display: 'table-row',
                  verticalAlign: 'inherit',
                  borderColor: 'inherit'
                }}>


                  <td>
                    <span style={{
                      float: 'right',
                      paddingRight: '18px',
                      color: ' #777',
                      marginBottom: '10px',
                      fontSize: '1em!important'
                    }}> Número de documento:*</span>
                  </td>


                  <td style={{ margin: 0, padding: 0 }}>
                    <div style={{
                      width: '256px',
                      backgroundPosition: '-1018px -331px'
                    }}>

                      <TextInput
                        title='Actual Password'
                        type='text'
                        id='DocumentId'

                      />
                    </div>
                  </td>
                </tr>



                <tr style={{
                  display: 'table-row',
                  verticalAlign: 'inherit',
                  borderColor: 'inherit'
                }}>


                  <td>
                    <span style={{
                      float: 'right',
                      paddingRight: '18px',
                      color: ' #777',
                      marginBottom: '10px',
                      fontSize: '1em!important'
                    }}> Nombre:*</span>
                  </td>


                  <td style={{ margin: 0, padding: 0 }}>
                    <div style={{
                      width: '256px',
                      backgroundPosition: '-1018px -331px'
                    }}>

                      <TextInput

                        type='text'
                        id='name'

                      />
                    </div>
                  </td>
                </tr>

                <tr style={{
                  display: 'table-row',
                  verticalAlign: 'inherit',
                  borderColor: 'inherit'
                }}><td>
                    <span style={{
                      float: 'right',
                      paddingRight: '18px',
                      color: ' #777',
                      marginBottom: '10px',
                      fontSize: '1em!important'
                    }}> Apellido:*</span>
                  </td>


                  <td style={{ margin: 0, padding: 0 }}>
                    <div style={{
                      width: '256px',
                      backgroundPosition: '-1018px -331px'
                    }}>
                      <TextInput
                        title='Actual Password'
                        type='text'
                        id='Lastname' />
                    </div>
                  </td>
                </tr>

                <tr style={{
                  display: 'table-row',
                  verticalAlign: 'inherit',
                  borderColor: 'inherit'
                }}><td>
                    <span style={{
                      float: 'right',
                      paddingRight: '18px',
                      color: ' #777',
                      marginBottom: '10px',
                      fontSize: '1em!important'
                    }}> Email:*</span>
                  </td>


                  <td style={{ margin: 0, padding: 0 }}>
                    <div style={{
                      width: '256px',
                      backgroundPosition: '-1018px -331px'
                    }}>
                      <TextInput

                        type='email'
                        id='email'
                      />
                    </div>
                  </td>
                </tr>


                <tr style={{
                  display: 'table-row',
                  verticalAlign: 'inherit',
                  borderColor: 'inherit'
                }}><td>
                    <span style={{
                      float: 'right',
                      paddingRight: '18px',
                      color: ' #777',
                      marginBottom: '10px',
                      fontSize: '1em!important'
                    }}> Telefono de contacto:</span>
                  </td>


                  <td style={{ margin: 0, padding: 0 }}>
                    <div style={{
                      width: '256px',
                      backgroundPosition: '-1018px -331px'
                    }}>
                      <TextInput

                        type='phone'
                        id='phone'
                      />
                    </div>
                  </td>
                </tr>

                <tr style={{
                  display: 'table-row',
                  verticalAlign: 'inherit',
                  borderColor: 'inherit'
                }}><td>
                    <span style={{
                      float: 'right',
                      paddingRight: '18px',
                      color: ' #777',
                      marginBottom: '10px',
                      fontSize: '1em!important'
                    }}> Password:*</span>
                  </td>


                  <td style={{ margin: 0, padding: 0 }}>
                    <div style={{
                      width: '256px',
                      backgroundPosition: '-1018px -331px'
                    }}>
                      <TextInput

                        type='password'
                        id='password'
                      />
                    </div>
                  </td>
                </tr>


                <div style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',

                }}>

                  <div style={{ margin: '0 5px 0 0' }}>
                    <button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 4 }}
                      style={{ backgroundColor: 'gray' }}
                    >
                      Cancelar
                    </button>
                  </div>


                  <div style={{

                  }} >
                    <button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 4 }}
                      color="success"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </tbody>
            </TableContainer>

          </li>



        </li>
      </UlTableContainer>
    </Container>
  )
}
