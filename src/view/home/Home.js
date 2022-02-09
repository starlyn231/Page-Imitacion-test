import React from 'react';
import { Header } from '../../component/header/Header';
import { Container, CardsContainer, Item, ContainerSegmento, CardSegmento, ContentCard, BtncardHome, BtnContacto, TitleContact, ContainerIcons } from './style/Home';
import { CarouselBootstrap } from './carrousel/CarouselBootstrap'
import { Posts } from '../../component/post/Posts';
import { CardCategory } from './componets/CardCategory';
import { Nedded } from '../../component/nedded/Nedded';
import CardMedia from '@mui/material/CardMedia';
import { Button, Typography } from '@mui/material';
import { SegmentoConten } from '../../component/nedded/CardContains'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import InstagramIcon from '@mui/icons-material/Instagram';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import Box from '@mui/material/Box';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
//import { experimentalStyled as styled } from '@mui/material/styles';
export const Home = () => {

  return <Container>


    <CarouselBootstrap />
    <CardsContainer>
      <CardCategory backgroundColor='blue' title="Para ti"
        infoButton="VER MÁS"
      />
      <CardCategory backgroundColor='blueDark' title="Para 'Mi Negocio' "
        infoButton="VER MÁS"
      />

      <CardCategory backgroundColor='gray' title="Para tu empresa"
        infoButton="VER MÁS"
      />


    </CardsContainer>

    {/* <Posts /> */}
    <Nedded />
    <ContainerSegmento>
      {
        SegmentoConten.map((item) => (
          <CardSegmento>


            <ContentCard>
              <div style={{
                padding: '2px',
                marginBottom: '5px', width: '100%'
              }}>

                <CardMedia
                  component="img"
                  alt="green_iguana"
                  height="auto"
                  width="100px"
                  // position="relative"
                  marginBottom="-45px"
                  image={item.img}




                />
              </div>


            </ContentCard>
            <div style={{
              padding: '2px',
              margin: '15px 0 5px', width: '100%'
            }}>
              <BtncardHome size="small">{item.btnContent}</BtncardHome>
            </div>
          </CardSegmento>
        ))}
    </ContainerSegmento>
    <div>  <TitleContact >Contactanos</TitleContact>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>


        <BtnContacto><LocalPhoneIcon /> 809-726-1000</BtnContacto>

        <BtnContacto><MailOutlineIcon /> community@bsc.com.do</BtnContacto>

        <BtnContacto><EditLocationIcon /> Encuentranos </BtnContacto>



      </div>
    </div>

    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Item>
            <ContainerIcons>
              <FacebookIcon fontSize="large" />
              <InstagramIcon fontSize="large" />
              <TwitterIcon fontSize="large" />
              <YouTubeIcon fontSize="large" />

            </ContainerIcons>
            <small className="bsc-white uk-display-block uk-margin-left ">© 2022. Banco Santa Cruz RD. Todos los Derechos Reservados. </small>
          </Item>
        </Grid>



      </Grid>
    </Box>


  </Container>;
};
