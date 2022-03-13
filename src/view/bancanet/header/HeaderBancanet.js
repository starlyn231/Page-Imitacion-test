import React, { useState } from 'react'
import {
  Container, Image, LineContainer, List, MenuContainer, UlList, Link, TextInput,
  ButtonDialog, UlContainer, TextTextarea, TableContainer
} from './style/HeaderBancanet'
import useMediaQuery from "@mui/material/useMediaQuery";
import LogoBancanet from '../../../asset/image/santaCruzLogo.jpg'
import { ModalHeader } from '../../../component/ModalHeader/ModalHeader';
import { Button, Dialog, Grid, TextField } from '@mui/material';
import { ButtonSaveContainer } from '../register/style/Register';

export const HeaderBancanet = () => {
  //const matchesWidth = useMediaQuery("(min-width:768px)");
  const [openConctacto, setOpenConctacto] = useState(false)
  const handleContact = () => {
    setOpenConctacto(!openConctacto);
    console.log('aqui ')
  }

  return (
    <Container>
      <LineContainer>

        <Image src={LogoBancanet} />



        <MenuContainer>



          <UlList>
            <List><Link href="/BSC.ICBanking.WebUI/Pages/General/HelpPublic.aspx">
              Ayuda</Link></List>

            <List id="Li1" onClick={handleContact} ><Link  >
              Contáctenos</Link></List>
          </UlList>

        </MenuContainer>
        {/*  <Dialog onClose={handleContact}
          open={openConctacto}>
          <div style={{ width: '50%', backgroundColor: 'lightblue' }}>
            <p>Hola</p>
            <p>Hola</p>        <p>Hola</p>
          </div>
        </Dialog>*/}

        <ModalHeader
          onClose={handleContact}
          open={openConctacto}
          title='contacto'
        >
          {/* <SmallHeightDivider />*/}


          {/* <SmallHeightDivider />
          <SmallHeightDivider /> */}





          <UlContainer>
            <li style={{ minHeight: '5px', listStyle: 'none', display: 'block' }}>
              <li style={{ height: '450px', float: 'left', listStyle: 'none' }}>
                <h3 style={{
                  width: '550px', margin: '20px 25px 0 25px',
                  borderBottom: '1px solid #a0a0a0',
                  fontSize: '1.1em',
                  fontFamily: 'CalibriRegular',
                  fontWeight: 'normal',
                  paddingBottom: ' 5px',

                }}

                >Complete la informacion a enviar</h3>



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
                    }}><td>
                        <span style={{
                          float: 'right',
                          paddingRight: '18px',
                          color: ' #777',
                          marginTop: '10px',
                          fontSize: '1em!important'
                        }}> Nombre</span>
                      </td>


                      <td style={{ margin: 0, padding: 0 }}>
                        <div style={{
                          width: '256px',
                          backgroundPosition: '-1018px -331px'
                        }}>

                          <TextInput
                            title='Actual Password'
                            type='password'
                            id='old_password'

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
                          marginTop: '10px',
                          fontSize: '1em!important'
                        }}> Dirección</span>
                      </td>


                      <td style={{ margin: 0, padding: 0 }}>
                        <div style={{
                          width: '256px',
                          backgroundPosition: '-1018px -331px'
                        }}>
                          <TextInput
                            title='Actual Password'
                            type='password'
                            id='old_password' />
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
                          marginTop: '10px',
                          fontSize: '1em!important'
                        }}> Telefono</span>
                      </td>


                      <td style={{ margin: 0, padding: 0 }}>
                        <div style={{
                          width: '256px',
                          backgroundPosition: '-1018px -331px'
                        }}>
                          <TextInput
                            title='Actual Password'
                            type='password'
                            id='old_password'
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
                          marginTop: '10px',
                          fontSize: '1em!important'
                        }}> Correo electronico</span>
                      </td>


                      <td style={{ margin: 0, padding: 0 }}>
                        <div style={{
                          width: '256px',
                          backgroundPosition: '-1018px -331px'
                        }}>
                          <TextInput
                            title='Actual Password'
                            type='password'
                            id='old_password'
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
                          margin: '6px 0 6px 0',
                          fontSize: '1em!important'
                        }}> Mensaje *</span>
                      </td>


                      <td style={{ margin: 0, padding: 0 }}>
                        <div style={{
                          width: '256px',
                          backgroundPosition: '-1018px -331px'
                        }}>
                          <TextTextarea id="w3review" name="w3review" rows="4" cols="50" />
                        </div>
                      </td>
                    </tr>


                    <div style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',

                    }}>

                      <div style={{ margin: '0 5px 0 0' }}>
                        <ButtonDialog
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 4 }}
                          style={{ backgroundColor: 'gray' }}
                        >
                          Cancelar
                        </ButtonDialog>
                      </div>


                      <div style={{

                      }} >
                        <ButtonDialog
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 4 }}
                          color="success"
                        >
                          Enviar
                        </ButtonDialog>
                      </div>
                    </div>
                  </tbody>
                </TableContainer>

              </li>



            </li>
          </UlContainer>


        </ModalHeader>

      </LineContainer>
    </Container >
  )
}
