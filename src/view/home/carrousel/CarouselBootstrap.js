import { Carousel } from "react-bootstrap";
import "./style/style.css";
import "../../../theme/BootstrapStyles.scss";
import { DefaultButton, HomeTextContainer, HomeTitle, } from "../style/Home";
import { ButtonContainer, ImageContainer, Title, SubTitle, CardTextContainer, ProfileContainer } from "./style/CarouselBootstrapStyle";
import { Grid } from '@mui/material';
//import nature from '../../../../assets/images/nature.jpg'
import nature from '../../../asset/image/nature.jpg'
import { SliderData } from './SliderData'
export const CarouselBootstrap = (data) => {

  const directionButtons = (direction) => {
    if (direction === "Next") {
      return (
        <span id="next" aria-hidden="true" className="material-icons">

          arrow_forward_ios
        </span>
      );
    } else if (direction === "Previous") {
      return (
        <span id="back" aria-hidden="true" className="material-icons">

          arrow_back_ios
        </span>
      );
    }
  };

  return (

    <div className="use-bootstrap">

      <CardTextContainer>
        <Grid
          alignItems='flex-start'
          container
          direction='row'
          spacing={{ xs: 4, md: 2 }}
          columns={{ xs: 12, sm: 12, md: 6 }}
        >

          <Carousel
            className="carouselMain"
            nextLabel={"Next"}
            prevLabel={"Previous"}
            nextIcon={directionButtons("Next")}
            prevIcon={directionButtons("Previous")}
          >
            {/* {data.data.map((item, index) => { */}
            {SliderData.map((item, index) => {
              return (
                <Carousel.Item key={index} className="item">
                  <ImageContainer image={item.image} >
                    <HomeTextContainer>
                      <SubTitle>
                        {/*{format(new Date(item.date.replace(" ", "T")), "dd 'de' MMMM yyyy", { locale: es })} */}
                      </SubTitle>
                      <Title>
                        {/*{item.content}   */}
                        Esta formalidad representa un paso de avance como país en las acciones.

                        {/*  Esta formalidad representa un paso de avance como país en las acciones. */}
                      </Title>
                      <ButtonContainer>
                        <DefaultButton onClick={() => window.open(item.notice_url, '_blank')} className="btnMore">
                          Saber mas
                        </DefaultButton>
                      </ButtonContainer>
                    </HomeTextContainer>
                  </ImageContainer>
                </Carousel.Item>
              );
            })}
          </Carousel>



        </Grid>
      </CardTextContainer>

    </div>
  );
};
