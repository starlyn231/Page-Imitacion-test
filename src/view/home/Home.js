
import { Header } from '../../component/header/Header';
import {
  Container, CardsContainer, Item, ContainerSegmento, CardSegmento,
  ContentCard, BtncardHome, BtnContacto, TitleContact, ContainerIcons
} from './style/Home';
import { CarouselBootstrap } from './carrousel/CarouselBootstrap'
import { Posts } from '../../component/post/Posts';
import { CardCategory } from './componets/CardCategory';
import { Nedded } from '../../component/nedded/Nedded';
import CardMedia from '@mui/material/CardMedia';
import { Button, Typography } from '@mui/material';
import { SegmentoConten } from '../../component/nedded/CardContains'

import InstagramIcon from '@mui/icons-material/Instagram';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import Box from '@mui/material/Box';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { TouchDragSlider } from './touch-drag-slider/TouchDragSlider';
import SwiperCarousel from './swiperSlider/SwiperCarousel';
import { Footer } from './componets/Footer';
import { Contactanos } from '../../component/Contact/Contactanos';
import { PolicyComponent } from '../../component/PolicyComponent/PolicyComponent';
//import { experimentalStyled as styled } from '@mui/material/styles';
export const Home = () => {

  return <Container>

    <Header />
    {/* <CarouselBootstrap />   <TouchDragSlider />*/}

    <CarouselBootstrap />

    <CardsContainer>



      <Grid item xs={12} sm={12} md={3}>
        <CardCategory backgroundColor='blue' title="Para ti"
          infoButton="VER MÁS"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <CardCategory backgroundColor='blueDark' title="Para 'Mi Negocio' "
          infoButton="VER MÁS"
        /></Grid>

      <Grid item xs={12} sm={12} md={3}>
        <CardCategory backgroundColor='gray' title="Para tu empresa"
          infoButton="VER MÁS"
        />

      </Grid>

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
    <Contactanos />

    <Footer />


  </Container >;
};
