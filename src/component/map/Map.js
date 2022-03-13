import React from 'react'
import { Header } from '../header/Header'
import "../../theme/BootstrapStyles.scss";
//import "bootstrap/dist/css/bootstrap.min.css";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { BtnContacto, TitleContact } from '../../view/home/style/Home';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import { Button } from '@mui/material';
import { Image } from '../header/style/HeaderStyle';
import { ContainerForm, IconFiltre, TextInput } from './styles/MapStyles';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ComponentMap from './ComponentMap';
import { Contactanos } from '../Contact/Contactanos';
import { Footer } from '../../view/home/componets/Footer';


export const Map = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'blue',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const mapUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyADoOtheQRLLLlwJXisubhw1U57S2YrcOc&v=3.exp&libraries=geometry,drawing,places";
  return (
    <div className='data-uk-grid'>

      <Header />



      <Grid container
        justify="center"
        justifyContent="center"

        style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0, flexWrap: 'wrap' }}
      >
        <Grid style={{ textAlign: 'center', backgroundColor: 'lightgrey', minHeight: '500px' }} item xs={3} >
          <TextInput />
          <div style={{ display: 'flex', flexBasis: 'row' }}>
            <h3 style={{ fontWeight: '700', fontSize: '18px', lineHeight: '1.4' }}>

              <IconFiltre  ><ManageSearchIcon /></IconFiltre></h3>
            FILTROS
          </div>
          <div><Button>Sucursales</Button> <Button>ath</Button></div>
          <div><Button>Sucursales</Button>
            <Button>ath</Button></div>

          <div style={{ padding: '10px' }}>
            <h3></h3>
            <p>Carretera Mella, Km. 8 ½, Santo Domingo Este
            </p>
            <span>24 horas</span>
          </div>


          <div>
            <h3></h3>
            <p>Carretera Mella, Km. 8 ½, Santo Domingo Este
            </p>
            <span>24 horas</span>
          </div>



          <div>
            <h3></h3>
            <p>Carretera Mella, Km. 8 ½, Santo Domingo Este
            </p>
            <span>24 horas</span>
          </div>


          <div>
            <h3></h3>
            <p>Carretera Mella, Km. 8 ½, Santo Domingo Este
            </p>
            <span>24 horas</span>
          </div>

          <div>
            <h3></h3>
            <p>Carretera Mella, Km. 8 ½, Santo Domingo Este
            </p>
            <span>24 horas</span>
          </div>


        </Grid>
        <Grid style={{ textAlign: 'center', minHeight: '500px' }} item xs={9} >
          { /*    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
            <Marker position={{ lat: -34.397, lng: 150.644 }} /> 


          </GoogleMap>*/}

          <ComponentMap
            googleMapURL={mapUrl}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `450px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />

        </Grid>

        <Grid item xs={12} style={{ textAlign: 'center', }}>



        </Grid>
        <div style={{
          gridColumn: 'span 6',
          gridRow: 'span 1', width: '100%', display: 'flex', flexDirection: 'column'
        }}>


          <Contactanos />
        </div>
      </Grid>


      <Grid container justify="center">


      </Grid>

      <Footer />

    </div >
  )
}
