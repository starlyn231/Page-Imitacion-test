import { Carousel } from "react-bootstrap";
import "./style/style.css";
import "../../../theme/BootstrapStyles.scss";
import { DefaultButton, HomeTextContainer, HomeTitle, } from "../style/Home";
import { ButtonContainer, ImageContainer, Title, SubTitle } from "./style/CarouselBootstrapStyle";

//import nature from '../../../../assets/images/nature.jpg'
import nature from '../../../asset/image/nature.jpg'

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
      <Carousel
        className="carouselMain"
        nextLabel={"Next"}
        prevLabel={"Previous"}
        nextIcon={directionButtons("Next")}
        prevIcon={directionButtons("Previous")}
      >


        <Carousel.Item className="item">
          <ImageContainer  >
            <div class="carousel-item active">
              <img classes="d-block w-100" src={nature} alt="First slide" />
            </div>



            <HomeTextContainer>
              <p>
                fdsafds
              </p>
              <Title>



                {/*  Esta formalidad representa un paso de avance como país en las acciones. */}
              </Title>
              <ButtonContainer>
                <DefaultButton className="">
                  aqui
                </DefaultButton>
              </ButtonContainer>
            </HomeTextContainer>
          </ImageContainer>
        </Carousel.Item>
        );

      </Carousel>
    </div>
  );
};
